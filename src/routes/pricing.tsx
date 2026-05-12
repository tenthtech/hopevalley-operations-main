import { createFileRoute } from "@tanstack/react-router";
import { CheckList, CTABanner, FAQ, PageHero, SectionHeader } from "@/components/ui-blocks";
import { HOME_FAQS } from "./index";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageSeo({
      title: "BPO & Remote Support Pricing in Europe (EUR)",
      description:
        "HopeValley Operations pricing in euros: pilot programs, dedicated agents, customer support outsourcing, sales outreach, back-office support, and optional AI-assisted coverage.",
      ogDescription: "Start small, validate quality in a paid pilot, then scale monthly capacity when the setup works.",
    }),
  component: Page,
});

const PILOT_PACKAGES = [
  { t: "1-Agent Pilot", d: "5 days, 4–5 hrs/day", p: "€120 – €180" },
  { t: "2-Agent Pilot", d: "5 days, 4–5 hrs/day", p: "€240 – €350" },
  { t: "3-Agent Pilot", d: "5 days, 4–5 hrs/day", p: "€360 – €500" },
];

const MONTHLY = [
  { t: "Dedicated Support Agent", p: "€1,300 – €1,500/mo" },
  { t: "Dedicated Sales Outreach Agent", p: "€1,400 – €1,700/mo" },
  { t: "Back Office Resource", p: "€1,100 – €1,400/mo" },
  { t: "2-Agent Team", p: "€2,600 – €3,200/mo", featured: true },
  { t: "3-Agent Team", p: "€3,900 – €4,800/mo" },
  { t: "24/5 Support Coverage", p: "Custom" },
  { t: "24/6 Support Coverage", p: "Custom" },
  { t: "AI + Human Support", p: "Custom" },
];

const HOURLY = [
  { t: "Customer Support", p: "€9 – €11/hr" },
  { t: "Sales / Appointment Setting", p: "€12 – €15/hr" },
  { t: "Back Office Operations", p: "€8 – €10/hr" },
  { t: "Advanced / Complex Campaigns", p: "€16 – €20/hr" },
  { t: "Pilot Campaigns", p: "€5 – €6/hr" },
];

function Page() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Transparent Pricing for Remote Operations"
        intro="Our pricing is designed to help businesses start small, validate quality, and scale only when the setup works."
      />

      <section className="section pt-0">
        <div className="container-x">
          <SectionHeader label="Pilot Pricing" title="Pilot Program — €5 – €6 / hour" subtitle="Typical setup: 5 days · 1–3 agents · 4–5 hrs/day per agent · limited campaign scope · basic performance reporting." />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {PILOT_PACKAGES.map((p) => (
              <div key={p.t} className="glass-card p-6">
                <h3 className="font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                <p className="mt-4 text-2xl font-bold text-primary">{p.p}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
            The pilot is designed to validate fit, communication, workflow, and execution. It is not positioned as a full-scale performance guarantee.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <SectionHeader label="Monthly" title="Monthly Pricing" />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MONTHLY.map((m) => (
              <div key={m.t} className={`glass-card p-6 ${m.featured ? "ring-1 ring-primary/40" : ""}`}>
                <h3 className="font-semibold">{m.t}</h3>
                <p className="mt-3 text-2xl font-bold text-primary">{m.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <SectionHeader label="Hourly" title="Standard hourly rates" />
            <div className="mt-8 overflow-x-auto overflow-hidden rounded-2xl border border-border">
              <table className="w-full min-w-[280px] text-sm">
                <caption className="sr-only">Standard hourly rates in euros, excluding VAT where applicable</caption>
                <thead>
                  <tr className="border-b border-border bg-surface/80 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <th scope="col" className="p-4">
                      Service type
                    </th>
                    <th scope="col" className="p-4 text-right">
                      Rate (EUR)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {HOURLY.map((h, i) => (
                    <tr key={h.t} className={i % 2 ? "bg-card" : "bg-surface/40"}>
                      <td className="p-4 text-soft">{h.t}</td>
                      <td className="p-4 text-right font-semibold text-primary">{h.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeader label="Notes" title="Costs not included" />
            <div className="mt-8 glass-card p-6">
              <CheckList alert items={[
                "Calling credits","VoIP usage","AI voice platform usage",
                "CRM or ticketing tool subscriptions","Custom integrations",
                "Lead generation","Advanced script creation","Dedicated supervisor for larger teams",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeader label="FAQ" title="Pricing questions" />
          </div>
          <div className="lg:col-span-8"><FAQ items={HOME_FAQS} /></div>
        </div>
      </section>

      <CTABanner
        title="Get Monthly Pricing for Your Team"
        body="Tell us about your operation and we'll prepare a tailored monthly proposal."
        primary={{ to: "/contact", label: "Get Monthly Pricing" }}
        secondary={{ to: "/pilot-program", label: "Start a Pilot" }}
      />
    </>
  );
}
