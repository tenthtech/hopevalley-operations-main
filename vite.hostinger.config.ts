// Hostinger runs this app as a normal Node.js service.
// Disable the Cloudflare Vite plugin so TanStack Start emits Nitro's .output folder.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
});
