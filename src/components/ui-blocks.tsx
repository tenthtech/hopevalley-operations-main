import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { faqJsonLd } from "@/lib/schema";

export function SectionLabel({ children, alert }: { children: ReactNode; alert?: boolean }) {
  return <span className={`label-chip ${alert ? "alert" : ""}`}>{children}</span>;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  alert,
  center,
}: {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  alert?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {label && <SectionLabel alert={alert}>{label}</SectionLabel>}
      <h2 className="h2 mt-4">{title}</h2>
      {subtitle && <p className="mt-4 text-soft text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
  to,
  ctaLabel,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  to?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="glass-card p-6 md:p-7 h-full flex flex-col">
      {icon && (
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-2 text-soft leading-relaxed text-sm flex-1">{children}</div>
      {to && ctaLabel && (
        <Link
          to={to}
          className="mt-5 inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-primary transition-all hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {ctaLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export function CheckList({ items, alert }: { items: string[]; alert?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3">
          <span
            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
              alert ? "bg-problem/15 text-problem" : "bg-primary/15 text-primary"
            }`}
          >
            {alert ? (
              <span className="text-xs leading-none">!</span>
            ) : (
              <Check className="h-3 w-3" strokeWidth={3} />
            )}
          </span>
          <span className="text-soft">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function CTABanner({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body?: string;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="glass-card relative overflow-hidden p-8 md:p-14 text-center">
          <div
            className="absolute inset-0 -z-10 opacity-60"
            style={{ background: "var(--gradient-hero)" }}
          />
          <h2 className="h2">{title}</h2>
          {body && <p className="mt-4 text-soft max-w-2xl mx-auto">{body}</p>}
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            {primary && (
              <Link to={primary.to} className="btn-primary">
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link to={secondary.to} className="btn-ghost">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
        {items.map((it, i) => (
          <FAQItem key={`${it.q}-${i}`} panelId={`faq-panel-${i}`} {...it} />
        ))}
      </div>
    </>
  );
}

function FAQItem({ q, a, panelId }: { q: string; a: string; panelId: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        id={`${panelId}-trigger`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-card-hover md:p-6"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="font-medium">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180 text-primary" : ""}`}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={`${panelId}-trigger`}
        hidden={!open}
        className="px-5 pb-6 leading-relaxed text-soft md:px-6"
      >
        {a}
      </div>
    </div>
  );
}

export function PageHero({
  label,
  title,
  intro,
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-12">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-x">
        {label && <SectionLabel>{label}</SectionLabel>}
        <h1 className="h1 mt-5 max-w-4xl">{title}</h1>
        {intro && <p className="mt-5 text-lg text-soft max-w-2xl leading-relaxed">{intro}</p>}
      </div>
    </section>
  );
}

export function TestimonialPlaceholder() {
  return (
    <section className="section">
      <div className="container-x grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel>Proof</SectionLabel>
          <h2 className="h2 mt-4">Client proof will grow from validated pilots</h2>
        </div>
        <div className="glass-card p-8 lg:col-span-8">
          <p className="text-xl leading-relaxed text-soft">
            Future testimonials can highlight communication quality, operational reliability,
            support coverage, and the path from pilot validation into a monthly remote team.
          </p>
          <div className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
            Testimonial placeholder for approved client feedback.
          </div>
        </div>
      </div>
    </section>
  );
}

export function ComparisonTable() {
  const rows = [
    ["Hiring internally", "Slow recruitment, local overhead, fixed payroll, and management load."],
    ["Generic outsourcing", "Lower control, weaker coordination, and inconsistent visibility."],
    [
      "hopeValley BPO",
      "EU-managed coordination, pilot-first validation, remote teams, and optional AI-assisted coverage.",
    ],
  ];

  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionHeader
          label="Comparison"
          title="A structured alternative to hiring or generic outsourcing"
        />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] text-left text-sm">
            <caption className="sr-only">
              Comparison of internal hiring, generic outsourcing, and hopeValley BPO
            </caption>
            <thead>
              <tr className="border-b border-border bg-card text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <th scope="col" className="p-4">
                  Model
                </th>
                <th scope="col" className="p-4">
                  Operational impact
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([model, impact], i) => (
                <tr
                  key={model}
                  className={
                    i === rows.length - 1 ? "bg-primary/10" : i % 2 ? "bg-card" : "bg-surface/40"
                  }
                >
                  <th scope="row" className="p-4 font-semibold text-foreground">
                    {model}
                  </th>
                  <td className="p-4 text-soft">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
