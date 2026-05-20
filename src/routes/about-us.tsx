import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Check,
  ClipboardCheck,
  Eye,
  Linkedin,
  Mail,
  MessageSquare,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { CheckList, FeatureCard, SectionHeader, SectionLabel } from "@/components/ui-blocks";

const metaTitle = "About HopeValley BPO | EU-Managed Remote Operations";
const metaDescription =
  "Learn about HopeValley BPO, our mission, vision, and EU-managed approach to remote customer support, sales outreach, back-office operations, and hybrid AI + human support.";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: metaTitle },
      { name: "description", content: metaDescription },
      { property: "og:title", content: metaTitle },
      { property: "og:description", content: metaDescription },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:description", content: metaDescription },
    ],
  }),
  component: Page,
});

const approachCards = [
  {
    title: "EU-Managed Communication",
    text: "Clients work with a structured, professional communication layer designed for clarity, accountability, and trust.",
    icon: MessageSquare,
  },
  {
    title: "Pilot-First Execution",
    text: "We recommend starting with a controlled pilot before scaling into a full monthly operation.",
    icon: Rocket,
  },
  {
    title: "Human + AI Support Models",
    text: "For businesses needing extended or 24/7 availability, we can combine human agents with AI-assisted support workflows.",
    icon: Bot,
  },
  {
    title: "Operational Visibility",
    text: "We define reporting, workflow expectations, escalation rules, and performance standards before campaigns go live.",
    icon: Eye,
  },
] as const;

const values = [
  {
    title: "Clarity",
    text: "We believe outsourcing works best when expectations, roles, workflows, and reporting are clearly defined from the start.",
  },
  {
    title: "Accountability",
    text: "Clients should not have to manage scattered remote teams themselves. Our role is to create a structured layer of coordination and responsibility.",
  },
  {
    title: "Quality",
    text: "Cost-efficiency should not mean careless delivery. We focus on agent suitability, reporting, workflow alignment, and continuous improvement.",
  },
  {
    title: "Flexibility",
    text: "Every business has different needs, so we support pilot programs, dedicated agents, multi-agent teams, shift coverage, and hybrid AI + human models.",
  },
  {
    title: "Practical Innovation",
    text: "We use technology and AI where it improves speed, coverage, and efficiency, while keeping human judgment involved where it matters most.",
  },
] as const;

function Page() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="absolute inset-0 -z-10 grid-bg opacity-35 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-x grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel>About HopeValley BPO</SectionLabel>
            <h1 className="h1 mt-5 max-w-5xl">
              Building Reliable Remote Operations for Growing Businesses
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-soft">
              HopeValley BPO helps businesses scale customer support, outbound sales, back-office
              workflows, and hybrid AI + human operations through a structured EU-managed delivery
              model.
            </p>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
              We believe outsourcing should not feel risky, unclear, or disconnected. Our approach
              combines client-facing accountability, operational structure, vetted delivery teams,
              and pilot-first execution so businesses can scale with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/pilot-program" className="btn-primary">
                Start a Pilot
              </Link>
              <Link to="/book-discovery" className="btn-ghost">
                Book a Discovery Call
              </Link>
            </div>
          </div>

          <aside className="glass-card p-6 lg:col-span-4" aria-label="Operational model summary">
            <div className="grid gap-4">
              {[
                ["Managed from Finland", "Client-facing accountability and clear communication."],
                ["Pilot before scale", "Validate workflows before committing to a larger team."],
                ["Support, sales, operations", "One partner for multiple remote delivery needs."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-soft">{text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section pt-0" aria-labelledby="who-we-are">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader label="Company" title={<span id="who-we-are">Who We Are</span>} />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-soft lg:col-span-8">
            <p>
              HopeValley BPO is a remote operations and business process outsourcing service under
              the HopeValley brand. We support companies that need reliable execution without the
              cost and complexity of building large internal teams.
            </p>
            <p>
              Our work covers customer support, sales outreach, appointment setting, CRM support,
              back-office workflows, 24/5 and 24/6 coverage, and hybrid AI + human support models.
            </p>
            <p>
              Instead of simply offering agents, we focus on building structured operations around
              each client’s needs. This includes clear onboarding, scripts, workflows, reporting
              expectations, quality control, and scalable delivery.
            </p>
            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Explore services <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="approach">
        <div className="container-x">
          <SectionHeader
            label="Approach"
            title={<span id="approach">Our Approach</span>}
            subtitle="Every business has different operational needs. Some need help answering customer inquiries. Others need outbound sales support, ticket handling, CRM updates, or extended coverage outside normal business hours."
          />
          <p className="mt-5 max-w-3xl leading-relaxed text-soft">
            That is why we do not push one fixed model. We begin by understanding the client’s
            workflow, then recommend a controlled pilot or scalable monthly setup based on the
            actual requirement.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {approachCards.map(({ title, text, icon: Icon }) => (
              <FeatureCard key={title} title={title} icon={<Icon className="h-5 w-5" />}>
                {text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="meet-jude">
        <div className="container-x">
          <div className="glass-card grid overflow-hidden lg:grid-cols-12">
            <div className="min-h-[360px] border-b border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(27,198,90,0.18),transparent_52%),#000a14] p-6 lg:col-span-5 lg:border-b-0 lg:border-r">
              <JudePortrait />
            </div>
            <div className="p-6 md:p-10 lg:col-span-7">
              <SectionLabel>Owner of HopeValley</SectionLabel>
              <h2 id="meet-jude" className="h2 mt-4">
                Meet Jude Atanga
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-soft">
                Jude Atanga is the owner of HopeValley and leads the Finland-facing side of the
                business. His role is to provide the trusted client-facing foundation for HopeValley
                BPO, support business development, manage key relationships, and ensure clients
                experience clear communication from the first conversation.
              </p>
              <p className="mt-5 leading-relaxed text-soft">
                Through HopeValley BPO, Jude helps position the business as a reliable EU-managed
                partner for companies looking to scale support, sales, and operations without
                building everything internally.
              </p>
              <dl className="mt-7 grid gap-4 text-sm text-soft sm:grid-cols-2">
                <ContactDetail icon={<Mail className="h-4 w-4" />} label="Professional Email">
                  <a href="mailto:jude@hopevalley.digital" className="transition-colors hover:text-primary">
                    jude@hopevalley.digital
                  </a>
                </ContactDetail>
                <ContactDetail icon={<Linkedin className="h-4 w-4" />} label="LinkedIn">
                  <a
                    href="https://www.linkedin.com/in/jude-musam-atanga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    jude-musam-atanga
                  </a>
                </ContactDetail>
              </dl>
              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/in/jude-musam-atanga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Connect With Jude
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TextBand
        label="Delivery Model"
        title="Structured Delivery, Managed With Accountability"
        icon={<ClipboardCheck className="h-5 w-5" />}
      >
        <p>
          HopeValley BPO works through a managed delivery model. Clients work with HopeValley as
          the accountable partner, while operational execution is coordinated through vetted remote
          delivery resources based on the service requirement.
        </p>
        <p>
          This allows businesses to access cost-efficient execution while avoiding the complexity
          of managing offshore teams directly.
        </p>
      </TextBand>

      <section className="section" aria-labelledby="mission-vision">
        <div className="container-x">
          <div className="grid gap-5 lg:grid-cols-2" id="mission-vision">
            <StatementCard icon={<Target className="h-5 w-5" />} title="Our Mission">
              Our mission is to help growing businesses scale customer support, sales outreach, and
              operational workflows through reliable remote teams, structured delivery, and flexible
              support models that reduce hiring pressure without compromising service quality.
            </StatementCard>
            <StatementCard icon={<Sparkles className="h-5 w-5" />} title="Our Vision">
              Our vision is to become a trusted EU-managed remote operations partner for businesses
              that want scalable, cost-efficient, and technology-enabled support without losing the
              human quality of customer communication.
            </StatementCard>
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="values">
        <div className="container-x">
          <SectionHeader label="Values" title={<span id="values">What We Stand For</span>} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-6">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Check className="h-4 w-4" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-soft">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-us">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              label="Why Us"
              title={<span id="why-us">Why Businesses Work With HopeValley BPO</span>}
              subtitle="A practical operating partner for businesses that need execution, visibility, and room to scale."
            />
          </div>
          <div className="glass-card p-6 md:p-8 lg:col-span-7">
            <CheckList
              items={[
                "EU-managed communication and client-facing accountability",
                "Flexible pilot-first onboarding",
                "Remote teams for support, sales, and back-office operations",
                "Hybrid AI + human support options for extended coverage",
                "Clear reporting and operational structure",
                "Cost-efficient delivery without forcing clients to manage offshore teams directly",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              <Link to="/ai-human-support" className="btn-ghost">
                AI + Human Support
              </Link>
              <Link to="/contact" className="btn-ghost">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-surface p-8 text-center shadow-[0_20px_70px_-45px_rgba(27,198,90,0.65)] md:p-14">
            <div
              className="absolute inset-0 -z-10 opacity-70"
              style={{ background: "var(--gradient-hero)" }}
            />
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="h2 mx-auto mt-4 max-w-3xl">
              Ready to Build a More Scalable Operations Model?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-soft">
              Start with a controlled pilot and see how HopeValley BPO can support your customer
              support, sales outreach, back-office workflows, or hybrid AI + human operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/pilot-program" className="btn-primary">
                Start a Pilot
              </Link>
              <Link to="/book-discovery" className="btn-ghost">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function JudePortrait() {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <div className="relative flex h-full min-h-[320px] items-end overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.10),transparent_42%),rgba(255,255,255,0.04)]">
        <div className="grid h-32 w-32 place-items-center rounded-full border border-primary/30 bg-primary/10 text-4xl font-bold text-primary">
          JA
        </div>
      </div>
      {!imageMissing && (
        <img
          src="/jude-atanga.jpg"
          alt="Jude Atanga, owner of HopeValley"
          className="absolute inset-0 h-full w-full object-cover object-center"
          onError={() => setImageMissing(true)}
        />
      )}
      <div className="relative z-10 w-full bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5">
        <p className="text-lg font-semibold">Jude Atanga</p>
        <p className="mt-1 text-sm text-soft">Owner of HopeValley</p>
      </div>
    </div>
  );
}

function ContactDetail({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </dt>
      <dd className="mt-2 break-words text-foreground">{children}</dd>
    </div>
  );
}

function TextBand({
  label,
  title,
  icon,
  children,
}: {
  label: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="section bg-surface" aria-labelledby="delivery-title">
      <div className="container-x grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="grid h-12 w-12 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
            {icon}
          </div>
          <SectionHeader label={label} title={<span id="delivery-title">{title}</span>} />
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-soft lg:col-span-7">{children}</div>
      </div>
    </section>
  );
}

function StatementCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="glass-card p-7 md:p-8">
      <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
        {icon}
      </div>
      <h2 className="text-2xl font-bold leading-tight">{title}</h2>
      <p className="mt-4 leading-relaxed text-soft">{children}</p>
    </article>
  );
}
