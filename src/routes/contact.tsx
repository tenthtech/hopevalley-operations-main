import { createFileRoute } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { PageHero } from "@/components/ui-blocks";
import { ContactAddress } from "@/components/ContactAddress";
import { LeadForm } from "@/components/LeadForm";
import { ContactEmailLinks } from "@/components/ContactEmailLinks";
import { ContactPhoneLinks } from "@/components/ContactPhoneLinks";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact",
      description:
        "Contact hopeValley BPO to discuss customer support outsourcing, outbound sales teams, back-office support, or optional hybrid AI + human coverage. Pricing discussed in euros.",
      ogDescription:
        "Tell us what you need to scale and we will recommend the right pilot or team setup.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Tell Us What You Need to Scale"
        intro="Share your current operational challenge and we'll recommend the right pilot or team setup."
      />

      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6">
              <h2 className="font-semibold">Email us</h2>
              <div className="mt-4">
                <ContactEmailLinks />
              </div>
            </div>
            <div className="glass-card p-6">
              <h2 className="font-semibold">Call or WhatsApp</h2>
              <div className="mt-4">
                <ContactPhoneLinks />
              </div>
            </div>
            <div className="glass-card p-6">
              <h2 className="font-semibold">Visit us</h2>
              <div className="mt-4">
                <ContactAddress showMap />
              </div>
            </div>
            <div className="glass-card p-6">
              <h2 className="font-semibold">EU-Managed Operations</h2>
              <p className="mt-3 text-sm text-soft">
                Structured coordination, transparent communication, and reliable execution.
              </p>
              <a
                href="https://hopevalley.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-primary"
              >
                <Globe className="h-4 w-4 shrink-0" aria-hidden />
                hopevalley.digital
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm submitLabel="Request Consultation" source="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
