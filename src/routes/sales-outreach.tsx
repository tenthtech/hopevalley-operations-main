import { createFileRoute } from "@tanstack/react-router";
import { CheckList, CTABanner, PageHero, SectionHeader } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/sales-outreach")({
  head: () =>
    pageSeo({
      title: "Outbound Sales, Cold Calling & Appointment Setting",
      description:
        "Scale outbound sales with EU-managed remote agents for cold calling, lead qualification, appointment setting, follow-ups, and CRM updates. Pilot and monthly pricing in euros.",
      ogDescription: "Trained remote agents, clear scripts, CRM updates, and campaign reporting.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="Sales & Outreach"
        title="Outbound Sales Support Without Building an Internal Calling Team"
        intro="We help businesses create consistent outbound activity through trained remote agents, clear scripts, CRM updates, and campaign reporting."
      />

      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="mt-5">
              <CheckList items={[
                "Cold calling","Appointment setting","Lead qualification","Follow-up calls",
                "Demo booking","CRM pipeline updates","Re-engagement campaigns",
              ]} />
            </div>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">Best for</h3>
            <div className="mt-5">
              <CheckList items={[
                "B2B SaaS companies","Real estate teams","Marketing agencies",
                "Recruitment companies","Local service businesses","Consulting firms",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader label="Campaign Setup" title="What we typically need to start" />
            <p className="mt-5 text-soft">
              If a client does not have a script, we can help prepare a basic call flow for the pilot stage.
            </p>
          </div>
          <div className="lg:col-span-7 glass-card p-8">
            <CheckList items={[
              "Lead list","Target market","Script or call flow","CRM access","Offer details","Success criteria",
            ]} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to launch outbound activity?"
        body="Start with a paid pilot and validate communication, scripts, and pipeline fit."
        primary={{ to: "/pilot-program", label: "Start an Outreach Pilot" }}
        secondary={{ to: "/contact", label: "Book a Discovery Call" }}
      />
    </>
  );
}
