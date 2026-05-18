import { MessageCircle, PhoneCall } from "lucide-react";
import { CONTACT_PHONE } from "@/lib/site-content";

type ContactPhoneLinksProps = {
  className?: string;
  itemClassName?: string;
  showWhatsapp?: boolean;
};

export function ContactPhoneLinks({
  className = "space-y-3 text-sm",
  itemClassName = "inline-flex items-center gap-2 text-soft hover:text-primary break-all transition-colors",
  showWhatsapp = true,
}: ContactPhoneLinksProps) {
  return (
    <ul className={className}>
      <li>
        <a href={`tel:${CONTACT_PHONE.tel}`} className={itemClassName}>
          <PhoneCall className="h-4 w-4 shrink-0 text-primary/80" aria-hidden />
          <span>{CONTACT_PHONE.label}</span>
        </a>
      </li>
      {showWhatsapp && (
        <li>
          <a
            href={CONTACT_PHONE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClassName}
          >
            <MessageCircle className="h-4 w-4 shrink-0 text-primary/80" aria-hidden />
            <span>WhatsApp</span>
          </a>
        </li>
      )}
    </ul>
  );
}
