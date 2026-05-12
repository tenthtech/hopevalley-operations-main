import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { ContactEmailLinks } from "@/components/ContactEmailLinks";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
              <Sparkles className="h-5 w-5" strokeWidth={2.5} aria-hidden />
            </span>
            <span className="text-lg font-bold">
              HopeValley <span className="text-primary">Ops</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            EU-managed remote sales, support, BPO, and optional AI-assisted operations for growing businesses.
          </p>
        </div>

        <FooterCol
          title="Company"
          items={[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/pricing", label: "Pricing" },
            { to: "/pilot-program", label: "Pilot Program" },
            { to: "/contact", label: "Contact" },
          ]}
        />

        <FooterCol
          title="Services"
          items={[
            { to: "/customer-support", label: "Customer Support" },
            { to: "/sales-outreach", label: "Sales & Outreach" },
            { to: "/back-office-operations", label: "Back Office Operations" },
            { to: "/ai-human-support", label: "AI + Human Support" },
          ]}
        />

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">Contact</p>
          <ContactEmailLinks />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} HopeValley Operations. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-foreground">{title}</p>
      <ul className="space-y-3 text-sm text-soft">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="transition-colors hover:text-primary">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
