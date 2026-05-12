import { Mail } from "lucide-react";
import { CONTACT_EMAILS } from "@/lib/site-content";

type ContactEmailLinksProps = {
  className?: string;
  itemClassName?: string;
};

export function ContactEmailLinks({
  className = "space-y-3 text-sm",
  itemClassName = "inline-flex items-center gap-2 text-soft hover:text-primary break-all transition-colors",
}: ContactEmailLinksProps) {
  return (
    <ul className={className}>
      {CONTACT_EMAILS.map((email) => (
        <li key={email}>
          <a href={`mailto:${email}`} className={itemClassName}>
            <Mail className="h-4 w-4 shrink-0 text-primary/80" aria-hidden />
            <span>{email}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
