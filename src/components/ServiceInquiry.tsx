import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/ui-blocks";

export function ServiceInquiry({
  service,
  title = "Request a Service Inquiry",
  source,
}: {
  service: string;
  title?: string;
  source: string;
}) {
  return (
    <section className="section bg-surface">
      <div className="container-x grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            label="Service Inquiry"
            title={title}
            subtitle="Share your operation, coverage needs, and current tools so we can recommend the right pilot or monthly team setup."
          />
        </div>
        <div className="lg:col-span-7">
          <LeadForm submitLabel="Request Service Inquiry" source={source} defaultService={service} />
        </div>
      </div>
    </section>
  );
}
