import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useId, useState } from "react";
import { ArrowRight, ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import { ContactActionDialog } from "@/components/ContactActionDialog";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICE_NAV = [
  { to: "/customer-support", label: "Customer Support" },
  { to: "/sales-outreach", label: "Sales & Outreach" },
  { to: "/ai-human-support", label: "AI + Human Support" },
  { to: "/back-office-operations", label: "Back Office Operations" },
] as const;

const navLinkClass =
  "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-soft transition-colors hover:bg-white/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const navLinkActiveClass =
  "whitespace-nowrap rounded-full bg-primary/10 px-3 py-2 text-sm font-semibold text-primary shadow-[inset_0_0_0_1px_rgba(27,198,90,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const menuId = useId();
  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome || open;

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-500 md:px-5 md:pt-5">
      <div
        className={`mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between gap-3 rounded-2xl border px-3 shadow-[0_18px_55px_-30px_rgba(0,0,0,0.85)] transition-all duration-500 md:h-[4.5rem] md:px-4 ${
          solid
            ? "border-white/12 bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] backdrop-blur-2xl"
            : "border-white/10 bg-[rgba(0,10,20,0.38)] backdrop-blur-xl"
        }`}
      >
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5 rounded-xl px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] ring-1 ring-white/20">
            <img
              src="/logo-mark.png"
              alt=""
              className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            />
          </span>
          <span className="grid leading-none">
            <span className="whitespace-nowrap text-base font-bold tracking-tight sm:text-lg">
              hopeValley<span className="text-primary max-[420px]:hidden"> BPO</span>
            </span>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Managed remote operations
            </span>
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center min-[1180px]:flex">
          <nav
            className="flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.035] p-1"
            aria-label="Primary"
          >
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
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-soft transition-colors hover:bg-white/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Expertise
                <ChevronDown
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  aria-hidden
                />
              </button>
              <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_95%,black)] p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  {SERVICE_NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center justify-between gap-4 rounded-xl px-3 py-3 text-sm text-soft transition-colors hover:bg-white/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      activeProps={{
                        className:
                          "flex items-center justify-between gap-4 rounded-xl bg-primary/10 px-3 py-3 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      }}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <ContactActionDialog>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-foreground transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="Choose contact app"
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
            </button>
          </ContactActionDialog>
          <Link to="/pilot-program" className="btn-primary h-11 whitespace-nowrap px-5 text-sm">
            Start a Pilot
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          id={`${menuId}-toggle`}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] min-[1180px]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open && (
        <div
          id={menuId}
          className="mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_95%,black)] shadow-2xl shadow-black/40 backdrop-blur-xl min-[1180px]:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="grid gap-1 p-3" aria-label="Mobile primary">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-3 py-3 text-soft hover:bg-white/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40"
                activeProps={{
                  className:
                    "rounded-xl bg-primary/10 px-3 py-3 font-medium text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40",
                }}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-white/10 pt-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Services
              </p>
              {SERVICE_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-soft hover:bg-white/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40"
                  activeProps={{
                    className:
                      "flex items-center justify-between rounded-xl bg-primary/10 px-3 py-3 font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              ))}
            </div>
            <div className="grid gap-2 border-t border-white/10 pt-3">
              <ContactActionDialog>
                <button type="button" className="btn-ghost w-full">
                  Choose Contact App
                </button>
              </ContactActionDialog>
              <Link
                to="/pilot-program"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Start a Pilot
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
