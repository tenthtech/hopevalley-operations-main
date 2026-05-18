import { createFileRoute } from "@tanstack/react-router";
import { CheckList, CTABanner, PageHero, SectionHeader } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "About hopeValley BPO",
      description:
        "Learn about hopeValley BPO, an EU-managed remote operations and BPO provider for support, sales outreach, back-office workflows, and AI-assisted coverage.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="About"
        title="EU-Managed Remote Operations for Growing Businesses"
        intro="hopeValley BPO helps companies scale support, sales outreach, back-office workflows, and extended coverage through structured remote teams."
      />
      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              label="Positioning"
              title="Premium, structured, and operationally mature"
            />
          </div>
          <div className="glass-card p-8 lg:col-span-7">
            <CheckList
              items={[
                "EU-managed coordination for clarity and accountability",
                "Remote teams aligned with client workflows and reporting",
                "Pilot-first onboarding before monthly scaling",
                "Optional AI-assisted coverage without over-replacing human support",
                "Pricing and positioning designed for European clients",
              ]}
            />
          </div>
        </div>
      </section>
      <CTABanner
        title="Build a remote operation around your workflow"
        body="Start with a controlled pilot and scale once the setup is validated."
        primary={{ to: "/pilot-program", label: "Start a Pilot" }}
        secondary={{ to: "/book-discovery", label: "Book a Discovery Call" }}
      />
    </>
  );
}
