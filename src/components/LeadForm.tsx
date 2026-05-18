import { useState } from "react";
import { z } from "zod";

/* =============================================================================
 * GoHighLevel (GHL) - WEBHOOK / FORM INTEGRATION PLACEHOLDER
 * -----------------------------------------------------------------------------
 * Wire this form to GoHighLevel using one of:
 *   1) Inbound webhook: POST JSON to your GHL workflow webhook URL
 *   2) Embedded GHL form: replace the <form> below with GHL's iframe embed
 *   3) GHL API: server-side create/update contact (do not expose API keys in the browser)
 *
 * Optional env var: VITE_CONTACT_FORM_ENDPOINT can override the default email endpoint.
 * The default recipient is jude@hopevalley.digital.
 *
 * Note: browser POSTs to third-party webhooks often hit CORS restrictions. If that happens,
 * prefer posting to your own API route (TanStack Start server handler) and forward server-to-server to GHL.
 * Pipeline reference (GHL): New Lead -> Contacted -> Discovery Booked -> Converted Client
 * ============================================================================= */

const CONTACT_FORM_RECIPIENT = "jude@hopevalley.digital or bpo@hopevalley.digital";
const CONTACT_FORM_ENDPOINT =
  (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined) ??
  "/api/contact";

async function submitContactForm(payload: Record<string, unknown>) {
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: "New website contact form submission",
      _template: "table",
      _captcha: "false",
      recipient: CONTACT_FORM_RECIPIENT,
      submittedAt: new Date().toISOString(),
      ...payload,
    }),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as { message?: string } | null;
    throw new Error(body?.message ?? `Contact form submission failed with ${response.status}`);
  }

  return { ok: true };
}

function leadTags(data: { service: string; coverage: string }, source: string) {
  const tags = new Set(["website-lead"]);
  if (source.includes("pilot")) tags.add("pilot-request");
  if (source.includes("pricing")) tags.add("pricing-inquiry");
  if (data.service === "Customer Support") tags.add("customer-support");
  if (data.service === "Sales & Outreach") tags.add("sales-outreach");
  if (data.service === "Back Office Operations") tags.add("back-office");
  if (data.service === "AI + Human Support") tags.add("ai-human-support");
  if (data.service === "24/5 or 24/6 Coverage") tags.add("24-5-support");
  if (data.coverage === "24/5") tags.add("24-5-support");
  if (data.coverage === "24/7") tags.add("24-7-support");
  return Array.from(tags);
}

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().min(1, "Company is required").max(120),
  website: z.string().trim().min(1, "Website is required").max(200),
  service: z.string().min(1, "Please select a service"),
  teamSize: z.string().trim().min(1, "Team size is required").max(60),
  tools: z.string().trim().min(1, "Current tools or CRM is required").max(200),
  coverage: z.string().min(1, "Please select coverage"),
  message: z.string().trim().min(1, "Message is required").max(1500),
});

const SERVICES = [
  "Customer Support",
  "Sales & Outreach",
  "Back Office Operations",
  "AI + Human Support",
  "24/5 or 24/6 Coverage",
  "Not Sure Yet",
];
const COVERAGE = ["Business Hours", "Extended Hours", "24/5", "24/6", "24/7", "Pilot First"];

export function LeadForm({
  submitLabel = "Request Consultation",
  source = "contact",
  defaultService = "",
}: {
  submitLabel?: string;
  source?: string;
  defaultService?: string;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const flat: Record<string, string> = {};
      for (const issue of parsed.error.issues) flat[String(issue.path[0])] = issue.message;
      setErrors(flat);
      return;
    }
    setErrors({});
    setFormError("");
    setLoading(true);
    try {
      await submitContactForm({ ...parsed.data, source, tags: leadTags(parsed.data, source) });
      setDone(true);
    } catch (error) {
      console.error(error);
      setFormError(
        `We could not send your request right now. Please email ${CONTACT_FORM_RECIPIENT} directly.`,
      );
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="glass-card p-8 text-center" role="status" aria-live="polite">
        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/15 text-xl text-primary" aria-hidden>
          OK
        </div>
        <h2 className="text-xl font-semibold">Thank you. Your request has been received.</h2>
        <p className="mt-3 text-soft">Our team will review your requirements and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass-card grid gap-5 p-6 md:p-8"
      noValidate
      aria-describedby="lead-form-hint"
    >
      <fieldset className="m-0 min-w-0 grid gap-5 border-0 p-0">
        <legend className="sr-only">Contact and project details</legend>

        <Row>
          <Field
            label="Full Name"
            name="fullName"
            autoComplete="name"
            error={errors.fullName}
            required
          />
          <Field
            label="Work Email"
            name="email"
            type="email"
            autoComplete="email"
            error={errors.email}
            required
          />
        </Row>
        <Row>
          <Field
            label="Company Name"
            name="company"
            autoComplete="organization"
            error={errors.company}
            required
          />
          <Field label="Website" name="website" placeholder="https://" autoComplete="url" error={errors.website} required />
        </Row>
        <Row>
          <Select label="Service Required" name="service" options={SERVICES} error={errors.service} required defaultValue={defaultService} />
          <Field
            label="Team Size Needed"
            name="teamSize"
            placeholder="e.g. 1-3 agents"
            error={errors.teamSize}
            autoComplete="off"
            required
          />
        </Row>
        <Row>
          <Field
            label="Current Tools / CRM"
            name="tools"
            placeholder="e.g. HubSpot, Zendesk"
            error={errors.tools}
            autoComplete="off"
            required
          />
          <Select label="Preferred Coverage" name="coverage" options={COVERAGE} error={errors.coverage} required />
        </Row>
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="message">
            Message
            <span className="text-primary"> *</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="rounded-xl border border-border bg-surface px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="Tell us about your goals, current challenges, or workflows."
          />
          {errors.message && (
            <span id="message-error" className="text-xs text-problem" role="alert">
              {errors.message}
            </span>
          )}
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p id="lead-form-hint" className="text-xs text-muted-foreground">
          We usually recommend starting with a pilot before moving into a full monthly setup.
        </p>
        <button type="submit" disabled={loading} className="btn-primary shrink-0 disabled:opacity-60">
          {loading ? "Sending..." : submitLabel}
        </button>
      </div>
      {formError && (
        <p className="text-sm text-problem" role="alert">
          {formError}
        </p>
      )}
    </form>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-2">{children}</div>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const errId = error ? `${name}-error` : undefined;
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={errId}
        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
      {error && (
        <span id={errId} className="text-xs text-problem" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  error,
  required,
  defaultValue = "",
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  const errId = error ? `${name}-error` : undefined;
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={errId}
        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-primary focus:outline-none"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <span id={errId} className="text-xs text-problem" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
