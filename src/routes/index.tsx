import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Headphones, PhoneCall, Database, Bot, Users, ShieldCheck, Rocket, Sparkles,
  ArrowRight, ChevronDown,
} from "lucide-react";
import { CheckList, CTABanner, FAQ, FeatureCard, SectionHeader, SectionLabel } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => pageSeo({
    title: "EU-Managed BPO, Customer Support & Remote Operations",
    description:
      "HopeValley Operations helps businesses scale customer support, outbound sales, and back-office workflows through EU-managed remote teams, with optional AI-assisted coverage where it fits.",
    ogDescription:
      "Scale support, sales, and operations with EU-managed remote teams. Start with a pilot, then scale monthly capacity in euros.",
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesPreview />
      <AIPositioning />
      <ProcessSection />
      <PricingPreview />
      <FAQSection />
      <CTABanner
        title="Start With a Pilot. Scale With Confidence."
        body="Build your remote support, sales, or operations team without committing blindly."
        primary={{ to: "/pilot-program", label: "Start a Pilot" }}
        secondary={{ to: "/contact", label: "Book a Discovery Call" }}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,27,42,0.55) 0%, rgba(13,27,42,0.75) 60%, rgba(13,27,42,0.98) 100%), radial-gradient(ellipse at 75% 50%, rgba(27,198,90,0.12), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="container-x py-16 md:py-24 w-full">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <SectionLabel>EU-Managed Remote Operations</SectionLabel>
          <h1 className="h1 mt-5 [text-wrap:balance]">
            Scale Your Customer Support, Sales Outreach, and Operations{" "}
            <span className="text-primary">Without Hiring Overhead</span>
          </h1>
          <p className="mt-6 text-lg text-soft leading-relaxed max-w-2xl">
            HopeValley Operations helps growing businesses build reliable remote teams for customer support,
            outbound sales, back-office workflows, and extended support coverage through a structured
            EU-managed operations model.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/pilot-program" className="btn-primary">Start a Pilot <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="btn-ghost">Book a Discovery Call</Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2 justify-center">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Start with a controlled pilot before committing to a full monthly operation.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground animate-bounce max-md:bottom-8">
        <span className="tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4" aria-hidden />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-surface section">
      <div className="container-x">
        <SectionHeader
          alert
          label="The Challenge"
          title="Growing Teams Need Support That Can Scale"
          subtitle="As companies grow, customer conversations, sales follow-ups, ticket queues, and operational tasks become harder to manage internally."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "High local hiring costs",
            "Slow recruitment and onboarding",
            "Missed calls and delayed responses",
            "Inconsistent lead follow-up",
            "Limited visibility into team performance",
            "Difficulty covering evenings, weekends, or 24/7 demand",
          ].map((p) => (
            <div key={p} className="glass-card flex items-start gap-3 p-5">
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-problem/25 bg-problem/10 text-sm font-bold text-problem"
                aria-hidden
              >
                !
              </span>
              <p className="text-soft">{p}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-soft max-w-2xl">
          HopeValley Operations gives businesses a structured way to scale without building everything in-house.
        </p>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader
          label="Our Solution"
          title="EU-Managed Remote Operations Built Around Your Business"
          subtitle="We help companies set up dedicated remote teams that work inside your existing systems, scripts, workflows, and reporting structure."
        />
        <p className="mt-4 text-soft max-w-3xl">
          Our role is not only to provide people. We help structure the operation, assign the right execution team,
          and keep communication clear between the client and delivery side.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard icon={<Users className="h-5 w-5" />} title="Remote Agents">
            Trained agents aligned with your customer support, sales, or back-office requirements.
          </FeatureCard>
          <FeatureCard icon={<ShieldCheck className="h-5 w-5" />} title="EU-Managed Coordination">
            A structured communication layer designed for clarity, accountability, and trust.
          </FeatureCard>
          <FeatureCard icon={<Rocket className="h-5 w-5" />} title="Pilot-First Onboarding">
            Start with a controlled pilot before scaling into a monthly operation.
          </FeatureCard>
          <FeatureCard icon={<Bot className="h-5 w-5" />} title="AI-Assisted Coverage">
            Optional AI voice and workflow support for after-hours, routine queries, and high-volume handling.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-surface section">
      <div className="container-x">
        <SectionHeader
          label="Services"
          title="Remote Teams for Support, Sales, Back Office, and Extended Coverage"
        />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <FeatureCard icon={<Headphones className="h-5 w-5" />} title="Customer Support Operations" to="/customer-support" ctaLabel="Explore Customer Support">
            Inbound calls, email support, live chat, ticket handling, escalation support, and customer communication.
          </FeatureCard>
          <FeatureCard icon={<PhoneCall className="h-5 w-5" />} title="Sales & Outreach Operations" to="/sales-outreach" ctaLabel="Explore Sales Support">
            Cold calling, lead qualification, appointment setting, follow-up campaigns, and CRM pipeline support.
          </FeatureCard>
          <FeatureCard icon={<Database className="h-5 w-5" />} title="Back Office Operations" to="/back-office-operations" ctaLabel="Explore Back Office">
            CRM updates, data entry, administrative support, workflow assistance, and operational task handling.
          </FeatureCard>
          <FeatureCard icon={<Bot className="h-5 w-5" />} title="Hybrid AI + Human Support" to="/ai-human-support" ctaLabel="Explore AI + Human Support">
            AI-assisted support coverage for routine conversations, after-hours queries, call routing, and human handoff.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function AIPositioning() {
  return (
    <section className="section">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeader
            label="AI + Human"
            title="Smarter Support Coverage With Human Teams and AI Assistance"
            subtitle="Not every support operation needs a full 24/7 human team from day one."
          />
          <p className="mt-4 text-soft">
            For businesses that need extended availability, HopeValley Operations helps structure the right model
            using human agents, shift-based teams, and AI-assisted workflows.
          </p>
          <div className="mt-6 rounded-xl border border-border bg-card p-5 text-soft text-sm leading-relaxed">
            <strong className="text-foreground">Important:</strong> AI voice agents should not replace the entire support
            experience. Used correctly, they help reduce missed calls, answer common questions, qualify requests, and
            route important conversations to the right human team.
          </div>
          <Link to="/ai-human-support" className="btn-primary mt-7">Discuss Your Support Coverage Model</Link>
        </div>

        <div className="glass-card p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-4">Coverage Options</h3>
          <CheckList
            items={[
              "Human agents during active business hours",
              "Shift-based agents for 24/5 or 24/6 coverage",
              "AI-assisted handling for routine or after-hours queries",
              "Human escalation for complex customer cases",
              "Hybrid support models where AI improves speed while humans protect service quality",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { t: "Discovery", d: "We understand your business, current workflow, target customers, systems, and support or outreach goals." },
    { t: "Pilot Setup", d: "We run a controlled pilot to test communication quality, process fit, and execution before scaling." },
    { t: "Team Assignment", d: "Agents are assigned based on language, experience, service type, working hours, and campaign requirements." },
    { t: "Operations Launch", d: "The team begins working inside your CRM, ticketing system, dialer, or agreed workflow." },
    { t: "Reporting & Improvement", d: "You receive performance visibility, activity summaries, and operational feedback." },
    { t: "Scale", d: "Once the setup is validated, we scale agent count, working hours, channels, or AI-assisted coverage." },
  ];
  return (
    <section className="bg-surface section">
      <div className="container-x">
        <SectionHeader label="Process" title="A Simple Process From Pilot to Scale" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div key={s.t} className="glass-card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-primary)] font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold">{s.t}</h3>
              </div>
              <p className="mt-3 text-soft text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreview() {
  const cards = [
    { t: "Pilot Program", p: "From €120", d: "Best for companies that want to test quality and workflow before committing." },
    { t: "Dedicated Agent", p: "€1,300 – €1,500/mo", d: "Best for ongoing customer support, sales outreach, or operational workflows.", featured: true },
    { t: "Multi-Agent Team", p: "From €2,600/mo", d: "Best for companies needing two or more agents, shift coverage, or larger execution capacity." },
    { t: "24/5 or 24/6 Support", p: "Custom", d: "Custom pricing based on coverage, channels, volume, and SLA requirements." },
    { t: "AI + Human Support", p: "Custom", d: "Custom pricing based on call volume, workflows, integrations, and escalation rules." },
  ];
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader label="Pricing" title="Flexible Pricing for Different Stages of Growth" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.t} className={`glass-card relative p-6 ${c.featured ? "ring-1 ring-primary/40" : ""}`}>
              {c.featured && <span className="absolute -top-3 left-6 label-chip"><Sparkles className="h-3 w-3" />Most popular</span>}
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-3 text-2xl font-bold text-primary">{c.p}</p>
              <p className="mt-3 text-soft text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground max-w-3xl">
          Calling credits, third-party tools, AI platform usage, and special integrations are billed separately where applicable.
        </p>
        <div className="mt-8">
          <Link to="/pricing" className="btn-ghost">Get Monthly Pricing <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

export const HOME_FAQS = [
  { q: "Do you offer a free trial?", a: "No. We start with a paid pilot program so both sides can validate the setup professionally." },
  { q: "What is included in the pilot?", a: "The pilot usually includes limited working hours, selected agents, basic reporting, and campaign execution based on the agreed scope." },
  { q: "Are calling credits included?", a: "No. Calling credits, VoIP usage, and third-party tools are billed separately based on usage." },
  { q: "Can you provide 24/7 support?", a: "Yes. Depending on the business requirement, we can structure shift-based human support, AI-assisted support, or a hybrid model." },
  { q: "Do you replace human agents with AI?", a: "No. AI is used as an optional support layer for routine queries, after-hours handling, and routing. Human agents remain essential for complex and sensitive conversations." },
  { q: "Can you work with our CRM?", a: "Yes. We can work with client-provided CRMs, ticketing systems, scripts, and workflows." },
  { q: "Which businesses do you serve?", a: "We work with SaaS companies, e-commerce brands, real estate businesses, agencies, service businesses, recruitment firms, and other growing teams." },
];

function FAQSection() {
  return (
    <section className="bg-surface section">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="h2 mt-4">Common Questions</h2>
          <p className="mt-4 text-soft">Everything you need to know before starting a pilot or scaling a remote team.</p>
        </div>
        <div className="lg:col-span-8"><FAQ items={HOME_FAQS} /></div>
      </div>
    </section>
  );
}
