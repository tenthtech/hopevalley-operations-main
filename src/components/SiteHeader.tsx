import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useId, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/customer-support", label: "Customer Support" },
  { to: "/sales-outreach", label: "Sales & Outreach" },
  { to: "/back-office-operations", label: "Back Office" },
  { to: "/ai-human-support", label: "AI + Human Support" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

const navLinkClass =
  "rounded-md px-3 py-2 text-sm text-soft transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const navLinkActiveClass =
  "rounded-md px-3 py-2 text-sm font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const menuId = useId();
  const isHome = location.pathname === "/";
  const reveal = scrolled || !isHome || open;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        reveal ? "border-b border-border bg-[color-mix(in_oklab,var(--background)_85%,transparent)] backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="group flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
            <Sparkles className="h-5 w-5" strokeWidth={2.5} aria-hidden />
          </span>
          <span className="text-lg font-bold tracking-tight">
            HopeValley<span className="text-primary"> Ops</span>
          </span>
        </Link>

        <div
          className={`flex items-center gap-3 transition-all duration-500 ${
            reveal ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={navLinkClass}
                activeProps={{ className: navLinkActiveClass }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/contact" className="btn-ghost text-sm">
              Book a Discovery Call
            </Link>
            <Link to="/pilot-program" className="btn-primary text-sm">
              Start a Pilot
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          id={`${menuId}-toggle`}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open && (
        <div id={menuId} className="border-t border-border bg-surface lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile primary">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-soft hover:bg-card hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40"
                activeProps={{ className: "rounded-md px-3 py-3 font-medium text-primary hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40" }}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Link to="/contact" className="btn-ghost" onClick={() => setOpen(false)}>
                Book a Discovery Call
              </Link>
              <Link to="/pilot-program" className="btn-primary" onClick={() => setOpen(false)}>
                Start a Pilot
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
