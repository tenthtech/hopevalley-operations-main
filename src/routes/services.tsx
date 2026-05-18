import { createFileRoute, Link } from "@tanstack/react-router";
import { Headphones, PhoneCall, Database, Bot, ArrowRight } from "lucide-react";
import { CheckList, CTABanner, PageHero, SectionLabel } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/services")({
  head: () =>
    pageSeo({
      title: "Remote Operations Services: Support, Sales, Back Office & BPO",
      description:
        "Explore hopeValley BPO: customer support outsourcing, outbound sales support, back-office operations, CRM support, and optional hybrid AI + human coverage. EU-managed teams; pricing in euros.",
      ogDescription:
        "Customer support, sales outreach, back office, and optional AI + human support — EU-managed remote teams.",
    }),
  component: ServicesPage,
});

const SERVICES = [
  {
    slug: "/customer-support",
    icon: <Headphones className="h-6 w-6" />,
    title: "Customer Support Outsourcing",
    intro:
      "For businesses handling growing customer inquiries across calls, email, chat, or tickets.",
    items: [
      "Inbound call support",
      "Email support",
      "Live chat support",
      "Ticket handling",
      "Customer query resolution",
      "Escalation support",
      "24/5 and 24/6 coverage options",
    ],
    cta: "View Customer Support Services",
  },
  {
    slug: "/sales-outreach",
    icon: <PhoneCall className="h-6 w-6" />,
    title: "Sales & Outreach Support",
    intro: "For companies that need consistent outbound activity and lead follow-up.",
    items: [
      "Cold calling",
      "Lead qualification",
      "Appointment setting",
      "Follow-up campaigns",
      "CRM pipeline updates",
      "Demo booking support",
      "Sales admin support",
    ],
    cta: "View Sales Support Services",
  },
  {
    slug: "/back-office-operations",
    icon: <Database className="h-6 w-6" />,
    title: "Back Office Operations",
    intro: "For companies that need operational help behind the scenes.",
    items: [
      "CRM management",
      "Data entry",
      "Admin support",
      "Lead list management",
      "Document processing",
      "Workflow assistance",
      "Reporting support",
    ],
    cta: "View Back Office Services",
  },
  {
    slug: "/ai-human-support",
    icon: <Bot className="h-6 w-6" />,
    title: "Hybrid AI + Human Support",
    intro:
      "For businesses that want faster response times, extended availability, and smarter routing.",
    items: [
      "AI-assisted call handling",
      "After-hours query handling",
      "FAQ-based responses",
      "Lead qualification",
      "Human escalation",
      "Call routing",
      "Support workflow automation",
    ],
    cta: "View AI + Human Support",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Remote Operations Services for Growing Businesses"
        intro="hopeValley BPO provides structured remote teams for businesses that need reliable execution without building large internal departments."
      />

      <section className="section pt-0">
        <div className="container-x grid gap-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              className="glass-card p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-5">
                <SectionLabel>0{i + 1}</SectionLabel>
                <div className="mt-4 flex items-start gap-4">
                  <span className="grid place-items-center h-12 w-12 rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
                    {s.icon}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">{s.title}</h2>
                </div>
                <p className="mt-5 text-soft leading-relaxed">{s.intro}</p>
                <Link to={s.slug} className="btn-primary mt-7">
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Includes
                </h3>
                <CheckList items={s.items} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="Not sure which service fits?"
        body="Tell us about your operation and we'll recommend the right pilot or team setup."
        primary={{ to: "/contact", label: "Discuss Your Support Model" }}
        secondary={{ to: "/pilot-program", label: "Start a Pilot" }}
      />

      <section className="section bg-surface">
        <div className="container-x grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Service Inquiry</SectionLabel>
            <h2 className="h2 mt-4">Request a service recommendation</h2>
            <p className="mt-4 text-soft">
              Tell us what you need to handle, and we'll recommend the right pilot, team, or
              coverage model.
            </p>
          </div>
          <div className="lg:col-span-7">
            <LeadForm submitLabel="Request Service Inquiry" source="services" />
          </div>
        </div>
      </section>
    </>
  );
}
