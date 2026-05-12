import { createFileRoute } from "@tanstack/react-router";
import { CheckList, CTABanner, PageHero } from "@/components/ui-blocks";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/back-office-operations")({
  head: () =>
    pageSeo({
      title: "Back Office Outsourcing & CRM Support",
      description:
        "Remote back-office outsourcing for CRM updates, data entry, admin tasks, lead management, and operational workflow support. EU-managed delivery; pricing in euros.",
      ogDescription: "Reliable remote support for repetitive operational work.",
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        label="Back Office"
        title="Back Office Support That Keeps Your Business Moving"
        intro="Not every task needs an in-house hire. We help businesses manage repetitive operational work through reliable remote support resources."
      />

      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="mt-5">
              <CheckList items={[
                "CRM updates","Data entry","Lead management","Admin assistance",
                "Document handling","Order processing support","Reporting assistance","Workflow coordination",
              ]} />
            </div>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold">Best for</h3>
            <div className="mt-5">
              <CheckList items={[
                "Recruitment agencies","SaaS teams","Sales teams",
                "E-commerce businesses","Real estate companies","Agencies and consultancies",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Free your team from repetitive operations"
        body="Hand off CRM updates, admin work, and document processing to a reliable remote resource."
        primary={{ to: "/contact", label: "Discuss Back Office Support" }}
        secondary={{ to: "/pilot-program", label: "Start a Pilot" }}
      />
    </>
  );
}
