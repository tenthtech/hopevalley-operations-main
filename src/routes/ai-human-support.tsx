import { createFileRoute } from "@tanstack/react-router";
import { CheckList, CTABanner, FeatureCard, PageHero, SectionHeader } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/ai-human-support")({
  head: () =>
    pageSeo({
      title: "Human-Led Support With Optional AI-Assisted Coverage",
      description:
        "Design customer support coverage with EU-managed human agents first, plus optional AI-assisted workflows for routine queries, after-hours handling, and routing — not a replacement for your team.",
      ogDescription:
        "Human agents handle complex conversations; optional AI can extend coverage for routine work and after-hours contact capture.",
    }),
  component: Page,
});

const MODELS = [
  { t: "Human Agents Only", d: "Best for businesses that require personal handling across all conversations." },
  { t: "Shift-Based Human Support", d: "Best for 24/5 or 24/6 coverage using multiple agent shifts." },
  { t: "AI After-Hours Layer", d: "Best for companies that need basic support outside human working hours." },
  { t: "Hybrid AI + Human Support", d: "Best for businesses that want AI to handle routine queries while human agents handle complex cases." },
];

function Page() {
  return (
    <>
      <PageHero
        label="AI + Human Support"
        title="AI-Assisted Support With Human Backup Where It Matters"
        intro="Some businesses need 24/7 availability, but hiring three full human shifts immediately is not always the most efficient first step."
      />

      <section className="section pt-0">
        <div className="container-x">
          <p className="text-soft text-lg leading-relaxed max-w-3xl">
            HopeValley Operations helps businesses design the right support coverage model using human agents,
            shift-based teams, and AI-assisted workflows.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-card p-5 text-soft text-sm leading-relaxed max-w-3xl">
            This is not about replacing humans completely. It is about using the <span className="text-primary font-medium">right resource for the right conversation</span>.
          </div>
        </div>
      </section>

      <section className="section bg-surface pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">AI can help with</h3>
            <div className="mt-5">
              <CheckList items={[
                "Answering common questions","Handling after-hours calls","Capturing customer details",
                "Qualifying leads","Routing urgent requests","Reducing missed calls","Supporting human agents with faster workflows",
              ]} />
            </div>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">Human agents remain important for</h3>
            <div className="mt-5">
              <CheckList items={[
                "Complex issues","Sensitive conversations","Escalations","Sales conversations",
                "Complaint handling","Relationship-based support",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader label="Coverage Models" title="Choose the model that fits your operation" />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {MODELS.map((m) => <FeatureCard key={m.t} title={m.t}>{m.d}</FeatureCard>)}
          </div>
        </div>
      </section>

      <CTABanner
        title="Build Your Hybrid Support Model"
        body="We'll help structure the right coverage mix of human shifts and AI assistance."
        primary={{ to: "/contact", label: "Build Your Hybrid Support Model" }}
        secondary={{ to: "/pilot-program", label: "Start a Pilot" }}
      />
    </>
  );
}
