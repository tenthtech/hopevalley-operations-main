import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, SectionHeader } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/book-discovery")({
  head: () =>
    pageSeo({
      title: "Book a Discovery Call",
      description:
        "Request a 30-minute discovery call with hopeValley BPO to discuss remote support, sales outreach, back-office workflows, or AI-assisted coverage.",
      ogDescription: "Request a 30-minute discovery call with hopeValley BPO.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="Discovery Call"
        title="Book a Discovery Call"
        intro="Request a 30-minute discovery call to review your operation, current workflow, coverage needs, and the right pilot or monthly team setup."
      />

      <section className="section pt-0">
        <div className="container-x grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="glass-card p-6">
              <CalendarClock className="h-8 w-8 text-primary" aria-hidden />
              <SectionHeader
                label="Calendar"
                title="30-minute discovery call"
                subtitle="Share your details and preferred coverage model. We will confirm the best available slot and next steps."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <LeadForm submitLabel="Request Discovery Call" source="book-discovery" />
          </div>
        </div>
      </section>
    </>
  );
}
