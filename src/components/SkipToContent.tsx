export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-[200%] rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg outline-none ring-offset-2 ring-offset-background transition-transform focus:translate-y-0 focus:ring-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}
