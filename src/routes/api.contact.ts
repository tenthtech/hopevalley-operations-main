import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/react-start";
import { z } from "zod";

const RESEND_FROM_EMAIL = "hopeValley BPO <bpo@hopevalley.digital>";
const CONTACT_TO_EMAIL = "jude@hopevalley.digital";

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(120),
  website: z.string().trim().min(1).max(200),
  service: z.string().trim().min(1).max(120),
  teamSize: z.string().trim().min(1).max(60),
  tools: z.string().trim().min(1).max(200),
  coverage: z.string().trim().min(1).max(60),
  message: z.string().trim().min(1).max(1500),
  source: z.string().trim().min(1).max(120).optional(),
  tags: z.array(z.string()).optional(),
  submittedAt: z.string().trim().min(1).max(80).optional(),
});

type ContactPayload = z.infer<typeof contactSchema>;

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const payload = contactSchema.safeParse(await request.json().catch(() => null));

        if (!payload.success) {
          return Response.json({ message: "Invalid contact form submission." }, { status: 400 });
        }

        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
          console.error("Missing RESEND_API_KEY for contact form email delivery.");
          return Response.json({ message: "Email delivery is not configured." }, { status: 500 });
        }

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: RESEND_FROM_EMAIL,
            to: CONTACT_TO_EMAIL,
            subject: `New website inquiry from ${payload.data.fullName}`,
            text: formatContactEmail(payload.data),
          }),
        });

        if (!response.ok) {
          const errorBody = await response.text();
          console.error("Resend email delivery failed:", errorBody);
          return Response.json({ message: "Could not send contact form email." }, { status: 502 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});

function formatContactEmail(data: ContactPayload) {
  return [
    "New website contact form submission",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Website: ${data.website}`,
    `Service Required: ${data.service}`,
    `Team Size Needed: ${data.teamSize}`,
    `Current Tools / CRM: ${data.tools}`,
    `Preferred Coverage: ${data.coverage}`,
    `Source: ${data.source ?? "website"}`,
    `Tags: ${data.tags?.join(", ") || "none"}`,
    `Submitted At: ${data.submittedAt ?? "not provided"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}
