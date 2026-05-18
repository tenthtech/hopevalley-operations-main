import { Link } from "@tanstack/react-router";
import { ContactActionDialog } from "@/components/ContactActionDialog";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-[color-mix(in_oklab,var(--background)_92%,transparent)] px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <Link to="/pilot-program" className="btn-primary min-h-11 px-3 text-sm">
          Start a Pilot
        </Link>
        <ContactActionDialog>
          <button type="button" className="btn-ghost min-h-11 px-3 text-sm">
            Contact
          </button>
        </ContactActionDialog>
      </div>
    </div>
  );
}
