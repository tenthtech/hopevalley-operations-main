import { createFileRoute } from "@tanstack/react-router";
import { CheckList, CTABanner, FeatureCard, PageHero, SectionHeader } from "@/components/ui-blocks";
import { Phone, Mail, MessageSquare, Ticket, Database, Bot } from "lucide-react";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/customer-support")({
  head: () =>
    pageSeo({
      title: "Customer Support Outsourcing for European Businesses",
      description:
        "EU-managed customer support outsourcing for calls, email, chat, tickets, 24/5 coverage, and optional AI-assisted after-hours coverage. Engagements priced in euros.",
      ogDescription: "Trained agents, clear workflows, escalation rules, and performance visibility.",
    }),
  component: Page,
});

const COVERAGE = [
  { t: "Business Hours Support", d: "For companies that need dedicated coverage during working hours." },
  { t: "Extended Hours Support", d: "For businesses that need coverage beyond local office hours." },
  { t: "24/5 Support", d: "For weekday around-the-clock support." },
  { t: "24/6 Support", d: "For businesses that need Saturday coverage as well." },
  { t: "Hybrid AI + Human Support", d: "For companies that want routine requests handled automatically while human agents handle complex issues." },
];

function Page() {
  return (
    <>
      <PageHero
        label="Customer Support"
        title="Customer Support Outsourcing That Feels Structured, Not Random"
        intro="Your customer support is part of your brand reputation. We help you manage it with trained agents, clear workflows, escalation rules, and performance visibility."
      />

      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">Best for</h3>
            <div className="mt-5">
              <CheckList items={[
                "E-commerce brands","SaaS companies","Service businesses","Agencies",
                "Real estate and property companies","Subscription-based businesses",
              ]} />
            </div>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">Support channels</h3>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                { i: <Phone className="h-4 w-4" />, t: "Phone support" },
                { i: <Mail className="h-4 w-4" />, t: "Email support" },
                { i: <MessageSquare className="h-4 w-4" />, t: "Chat support" },
                { i: <Ticket className="h-4 w-4" />, t: "Ticketing systems" },
                { i: <Database className="h-4 w-4" />, t: "CRM-based support" },
                { i: <Bot className="h-4 w-4" />, t: "AI-assisted after-hours" },
              ].map((c) => (
                <div key={c.t} className="flex items-center gap-3 rounded-xl border border-border bg-surface/40 p-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">{c.i}</span>
                  <span className="text-sm text-soft">{c.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <SectionHeader label="Coverage" title="Coverage options" />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COVERAGE.map((c) => (
              <FeatureCard key={c.t} title={c.t}>{c.d}</FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Reliable Support Coverage?"
        body="Start with a controlled pilot and test the workflow before scaling."
        primary={{ to: "/pilot-program", label: "Request Support Pilot" }}
        secondary={{ to: "/contact", label: "Book a Discovery Call" }}
      />
    </>
  );
}
