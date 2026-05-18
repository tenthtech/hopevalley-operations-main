import { MapPin } from "lucide-react";
import { CONTACT_ADDRESS } from "@/lib/site-content";

type ContactAddressProps = {
  showMap?: boolean;
};

export function ContactAddress({ showMap = false }: ContactAddressProps) {
  return (
    <div className="space-y-4">
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          CONTACT_ADDRESS.label,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-start gap-2 text-sm text-soft transition-colors hover:text-primary"
      >
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" aria-hidden />
        <span>{CONTACT_ADDRESS.label}</span>
      </a>

      {showMap && (
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
          <iframe
            title="hopeValley BPO location map"
            src={CONTACT_ADDRESS.mapEmbed}
            className="h-64 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
}
