import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero, SectionLabel } from "@/components/ui-blocks";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "BPO, Remote Support & AI Operations Blog | HopeValley BPO" },
      {
        name: "description",
        content:
          "Read practical insights on customer support outsourcing, BPO pricing, outbound sales, back-office operations, 24/7 support, and hybrid AI + human support models.",
      },
      { property: "og:title", content: "BPO, Remote Support & AI Operations Blog | HopeValley BPO" },
      {
        property: "og:description",
        content:
          "Read practical insights on customer support outsourcing, BPO pricing, outbound sales, back-office operations, 24/7 support, and hybrid AI + human support models.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { location } = useRouterState();

  if (location.pathname !== "/blog") {
    return <Outlet />;
  }

  return (
    <>
      <PageHero
        label="Blog"
        title="Remote Operations Insights"
        intro="Practical guidance for BPO, remote support, outbound sales, back-office workflows, and hybrid AI + human operations."
      />
      <section className="section pt-0">
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="glass-card group flex min-h-72 flex-col p-6 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <div className="flex flex-wrap items-center gap-3">
                <SectionLabel>{post.category}</SectionLabel>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {post.readingTime}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-tight">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-soft">{post.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                Read Article <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
