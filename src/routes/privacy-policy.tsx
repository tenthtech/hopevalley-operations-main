import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageSeo({
      title: "Privacy Policy",
      description:
        "Privacy Policy for hopeValley BPO, covering website inquiries, lead forms, discovery requests, and remote operations service communications.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        intro="How hopeValley BPO handles information submitted through this website."
      />
      <section className="section pt-0">
        <div className="container-x prose-legal">
          <h2>Information We Collect</h2>
          <p>
            When you submit a form, we may collect your name, work email, company name, website,
            service requirement, team size, current tools, coverage preference, message, and the
            source page of the inquiry.
          </p>
          <h2>How We Use Information</h2>
          <p>
            We use submitted information to review your requirements, respond to your inquiry,
            recommend a pilot or monthly setup, prepare discovery calls, and manage sales or
            operational follow-up.
          </p>
          <h2>Third-Party Systems</h2>
          <p>
            Contact form submissions may be sent to the hopeValley team by email and may be
            processed in CRM, automation, notification, or follow-up systems used to respond to
            your inquiry.
          </p>
          <h2>Data Sharing</h2>
          <p>
            We do not sell website inquiry data. We may share details internally with sales,
            operations, or delivery team members so they can evaluate your request and respond
            appropriately.
          </p>
          <h2>Retention</h2>
          <p>
            Inquiry data may be retained for business communication, service planning, compliance,
            and relationship management unless you request deletion where applicable.
          </p>
          <h2>Contact</h2>
          <p>For privacy questions, contact jude@hopevalley.digital or bpo@hopevalley.digital.</p>
        </div>
      </section>
    </>
  );
}
