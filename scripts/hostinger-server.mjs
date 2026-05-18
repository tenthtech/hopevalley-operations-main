import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const clientDir = join(root, "dist", "client");
const serverEntryPath = join(root, "dist", "server", "server.js");
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

if (!existsSync(serverEntryPath)) {
  console.error("Production server build not found. Run `npm run build:hostinger` first.");
  process.exit(1);
}

const serverEntry = await import(`file://${serverEntryPath.replace(/\\/g, "/")}`);
const app = serverEntry.default;

function getStaticFilePath(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(clientDir, normalizedPath);

  if (!relative(clientDir, filePath).startsWith("..") && existsSync(filePath) && statSync(filePath).isFile()) {
    return filePath;
  }

  return undefined;
}

function sendStaticFile(filePath, res) {
  const extension = extname(filePath).toLowerCase();
  const headers = {
    "content-type": mimeTypes[extension] || "application/octet-stream",
  };

  if (filePath.includes(`${join("dist", "client", "assets")}`)) {
    headers["cache-control"] = "public, max-age=31536000, immutable";
  }

  res.writeHead(200, headers);
  createReadStream(filePath).pipe(res);
}

function createWebRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const hostHeader = req.headers["x-forwarded-host"] || req.headers.host || `localhost:${port}`;
  const url = `${protocol}://${hostHeader}${req.url}`;
  const method = req.method || "GET";
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      value.forEach((item) => headers.append(key, item));
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }

  const init = { method, headers };
  if (!["GET", "HEAD"].includes(method)) {
    init.body = req;
    init.duplex = "half";
  }

  return new Request(url, init);
}

async function sendWebResponse(response, res) {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  if (!response.body) {
    res.end();
    return;
  }

  for await (const chunk of response.body) {
    res.write(chunk);
  }
  res.end();
}

createServer(async (req, res) => {
  try {
    const pathname = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`).pathname;
    const staticFilePath = getStaticFilePath(pathname);

    if (staticFilePath) {
      sendStaticFile(staticFilePath, res);
      return;
    }

    const response = await app.fetch(createWebRequest(req), process.env, {});
    await sendWebResponse(response, res);
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  }
}).listen(port, host, () => {
  console.log(`Hostinger server listening on http://${host}:${port}`);
});
