import { createFileRoute } from "@tanstack/react-router";
import { CheckList, CTABanner, FAQ, PageHero, SectionHeader } from "@/components/ui-blocks";
import { LeadForm } from "@/components/LeadForm";
import { HOME_FAQS } from "./index";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/pilot-program")({
  head: () =>
    pageSeo({
      title: "Start a BPO Pilot Program Before Scaling",
      description:
        "Test remote customer support, sales outreach, or back-office operations with a paid, low-risk pilot in euros before moving to a full monthly team.",
      ogDescription: "Validate workflow, communication, and execution with a controlled pilot.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="Pilot Program"
        title="Start With a Pilot Before You Scale"
        intro="A pilot helps both sides validate whether the workflow, communication, agents, and operational setup are the right fit."
      />

      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">What the pilot tests</h3>
            <div className="mt-5">
              <CheckList items={[
                "Agent communication quality","Script and workflow fit","CRM or tool access",
                "Call or ticket handling process","Reporting flow","Client and team alignment",
              ]} />
            </div>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">What we need from you</h3>
            <div className="mt-5">
              <CheckList items={[
                "Business overview","Service requirement","Target audience or customer type",
                "Script or process notes","CRM or ticketing access","Lead list, if outbound",
                "Working hours and time zone","Success criteria","Calling credits, if calls are involved",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader label="Request" title="Request Pilot Setup" subtitle="Share a few details and we'll come back with a tailored pilot proposal." />
          </div>
          <div className="lg:col-span-7">
            <LeadForm submitLabel="Request Pilot Setup" source="pilot" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeader label="FAQ" title="Pilot questions" />
          </div>
          <div className="lg:col-span-8"><FAQ items={HOME_FAQS} /></div>
        </div>
      </section>

      <CTABanner
        title="Validate the Setup Before Committing"
        body="A paid pilot keeps the engagement focused and professional from day one."
        primary={{ to: "/contact", label: "Book a Discovery Call" }}
      />
    </>
  );
}
