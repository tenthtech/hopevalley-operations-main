import { createFileRoute } from "@tanstack/react-router";
import { CTABanner, PageHero, SectionLabel } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    pageSeo({
      title: "Case Studies",
      description:
        "Planned hopeValley BPO case study hub for customer support, sales outreach, back-office operations, and AI-assisted support projects.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Client Results Coming Soon"
        intro="This page is reserved for future proof points once pilot and monthly operations produce approved client stories."
      />
      <section className="section pt-0">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {["Customer Support", "Sales Outreach", "Back Office"].map((item) => (
            <article key={item} className="glass-card p-6">
              <SectionLabel>Placeholder</SectionLabel>
              <h2 className="mt-5 text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-relaxed text-soft">
                Future case studies can show the starting challenge, pilot setup, operating model,
                and measured outcome.
              </p>
            </article>
          ))}
        </div>
      </section>
      <CTABanner
        title="Create your first validated operation"
        body="A controlled pilot gives both teams the structure needed to produce reliable outcomes."
        primary={{ to: "/pilot-program", label: "Start a Pilot" }}
      />
    </>
  );
}
