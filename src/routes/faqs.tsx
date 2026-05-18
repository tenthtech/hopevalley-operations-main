import { createFileRoute } from "@tanstack/react-router";
import { CTABanner, FAQ, PageHero } from "@/components/ui-blocks";
import { HOME_FAQS } from "./index";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/faqs")({
  head: () =>
    pageSeo({
      title: "FAQs About BPO, Remote Support & Pilot Programs",
      description:
        "Answers to common questions about hopeValley BPO pilot programs, customer support outsourcing, AI-assisted support, calling credits, CRMs, and remote teams.",
      ogDescription:
        "Common questions about pilots, pricing, AI-assisted coverage, and remote operations.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="FAQs"
        title="Common Questions About Remote Operations"
        intro="Review the essentials before starting a pilot, booking a discovery call, or scaling into a monthly operation."
      />

      <section className="section pt-0">
        <div className="container-x max-w-4xl">
          <FAQ items={HOME_FAQS} />
        </div>
      </section>

      <CTABanner
        title="Ready to validate your setup?"
        body="Start with a paid pilot so both sides can test workflow, communication, and execution before scaling."
        primary={{ to: "/pilot-program", label: "Start a Pilot" }}
        secondary={{ to: "/book-discovery", label: "Book a Discovery Call" }}
      />
    </>
  );
}
