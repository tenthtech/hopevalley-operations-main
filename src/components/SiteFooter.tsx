import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { ContactAddress } from "@/components/ContactAddress";
import { ContactEmailLinks } from "@/components/ContactEmailLinks";
import { ContactPhoneLinks } from "@/components/ContactPhoneLinks";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/hopevalley.fi",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.linkedin.com/company/hope-valleydigital/posts/?feedView=all",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/hopevalleydigital/",
    label: "Instagram",
    icon: Instagram,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-[var(--gradient-primary)]">
              <img
                src="/logo-mark.png"
                alt=""
                className="h-7 w-7 object-contain"
                aria-hidden="true"
              />
            </span>
            <span className="text-lg font-bold">
              hopeValley <span className="text-primary">BPO</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            EU-managed remote sales, support, BPO, and hybrid AI-assisted operations for growing
            businesses.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`hopeValley BPO on ${label}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-soft transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Company"
          items={[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/pricing", label: "Pricing" },
            { to: "/pilot-program", label: "Pilot Program" },
            { to: "/faqs", label: "FAQs" },
            { to: "/blog", label: "Blog" },
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
          <div className="space-y-5">
            <ContactEmailLinks />
            <ContactPhoneLinks showWhatsapp={false} />
            <ContactAddress />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} hopeValley BPO. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-foreground">
              Terms of Service
            </Link>
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
