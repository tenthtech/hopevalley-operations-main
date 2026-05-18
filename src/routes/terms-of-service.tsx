import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms-of-service")({
  head: () =>
    pageSeo({
      title: "Terms of Service",
      description:
        "Terms of Service for hopeValley BPO website inquiries, pilot programs, discovery calls, and remote operations services.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        intro="General terms for using the hopeValley BPO website and requesting services."
      />
      <section className="section pt-0">
        <div className="container-x prose-legal">
          <h2>Website Use</h2>
          <p>
            This website provides information about hopeValley BPO services, including customer
            support outsourcing, sales outreach, back-office operations, pilot programs, and
            optional AI-assisted support.
          </p>
          <h2>Inquiries and Proposals</h2>
          <p>
            Submitting a form does not create a service agreement. Service scope, pricing,
            timelines, responsibilities, and payment terms must be confirmed in a separate written
            proposal or agreement.
          </p>
          <h2>Pilot Programs</h2>
          <p>
            Pilot programs are designed to validate communication, workflow, process fit, and
            execution. They are paid engagements and are not positioned as full-scale performance
            guarantees.
          </p>
          <h2>Client Responsibilities</h2>
          <p>
            Clients are expected to provide accurate business information, workflow notes, scripts
            or process details, CRM or tool access where needed, calling credits where applicable,
            and timely feedback during pilots or service delivery.
          </p>
          <h2>Third-Party Costs</h2>
          <p>
            Calling credits, VoIP usage, AI platform usage, CRM subscriptions, ticketing tools, lead
            generation, custom integrations, and dedicated supervisor arrangements may be billed
            separately where applicable.
          </p>
          <h2>Contact</h2>
          <p>For service questions, contact jude@hopevalley.digital or bpo@hopevalley.digital.</p>
        </div>
      </section>
    </>
  );
}
