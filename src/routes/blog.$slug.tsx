import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import {
  type BlogPost,
  getBlogPost,
  getRelatedBlogPosts,
} from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/schema";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => getBlogPost(params.slug),
  head: ({ loaderData }) => {
    const title = loaderData?.metaTitle ?? "Remote Operations Article | HopeValley BPO";
    const description =
      loaderData?.metaDescription ??
      "Detailed remote operations and BPO guidance from HopeValley BPO.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  if (!post) {
    return (
      <section className="section">
        <div className="container-x max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Blog
          </Link>
          <h1 className="mt-6 text-3xl font-bold">Article not found</h1>
          <p className="mt-4 text-soft">
            This article may have moved. Head back to the blog to browse all available posts.
          </p>
        </div>
      </section>
    );
  }

  const relatedPosts = getRelatedBlogPosts(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema(post)) }}
      />

      <article>
        <header className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
          <div
            className="absolute inset-0 -z-10 opacity-70"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="container-x max-w-[850px]">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Blog
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="label-chip">{post.category}</span>
              <span className="inline-flex items-center gap-1.5 text-sm text-soft">
                <Clock className="h-4 w-4" aria-hidden />
                {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-soft">
                <CalendarDays className="h-4 w-4" aria-hidden />
                {post.published}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">{post.title}</h1>
            <p className="mt-6 text-lg leading-8 text-soft md:text-xl">{post.excerpt}</p>
          </div>
        </header>

        <section className="section pt-0">
          <div className="container-x grid gap-10 lg:grid-cols-[250px_minmax(0,850px)] lg:items-start lg:justify-center">
            <aside className="lg:sticky lg:top-28">
              <nav
                aria-label="Table of contents"
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-sm font-semibold text-foreground">Table of Contents</p>
                <ol className="mt-4 space-y-3 text-sm text-soft">
                  {post.content.sections.map((section) => (
                    <li key={section.heading}>
                      <a className="transition-colors hover:text-primary" href={`#${slugify(section.heading)}`}>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="max-w-[850px]">
              <div className="space-y-5 text-lg leading-9 text-soft">
                {post.content.intro.map((paragraph) => (
                  <ArticleLine key={paragraph} text={paragraph} />
                ))}
              </div>

              <div className="mt-10 rounded-lg border border-primary/25 bg-primary/10 p-6">
                <h2 className="text-xl font-semibold text-foreground">Key Takeaways</h2>
                <ul className="mt-4 space-y-3 text-soft">
                  {post.content.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 space-y-14">
                {post.content.sections.map((section) => (
                  <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-28">
                    <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-5 text-lg leading-9 text-soft">
                      {section.paragraphs.map((paragraph) => (
                        <ArticleLine key={paragraph} text={paragraph} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <h2 className="text-xl font-semibold">Relevant Service Pages</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {post.content.serviceLinks.map((link) => (
                    <Link key={link.to} to={link.to as never} className="btn-ghost px-4 py-2 text-sm">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <ArticleCTA />
            </div>
          </div>
        </section>
      </article>

      <section className="section bg-surface">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="label-chip">Keep Reading</span>
            <h2 className="h2 mt-4">Related Articles</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                to="/blog/$slug"
                params={{ slug: item.slug }}
                className="glass-card group flex min-h-60 flex-col p-6 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="label-chip">{item.category}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {item.readingTime}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-tight">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-soft">{item.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                  Read Article <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ArticleCTA() {
  return (
    <section className="mt-14 rounded-lg border border-primary/25 bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] p-7 text-center">
      <h2 className="text-2xl font-semibold">Ready to Build a Smarter Remote Operations Setup?</h2>
      <p className="mx-auto mt-3 max-w-2xl text-soft">
        Start with a controlled pilot before committing to a full monthly team.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/pilot-program" className="btn-primary">
          Start a Pilot
        </Link>
        <Link to="/book-discovery" className="btn-ghost">
          Book a Discovery Call
        </Link>
      </div>
    </section>
  );
}

function ArticleLine({ text }: { text: string }) {
  if (isListLike(text)) {
    return (
      <div className="flex gap-3 text-base leading-7 text-soft">
        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
        <span>{renderInlineLinks(text)}</span>
      </div>
    );
  }

  return <p>{renderInlineLinks(text)}</p>;
}

function isListLike(text: string) {
  if (text.endsWith(":")) return false;
  if (text.length > 70) return false;
  if (/[.!?]$/.test(text)) return false;
  return true;
}

function renderInlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;

    return (
      <Link key={`${match[1]}-${match[2]}`} to={match[2] as never} className="text-primary underline-offset-4 hover:underline">
        {match[1]}
      </Link>
    );
  });
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.published === "Coming soon" ? undefined : post.published,
    author: {
      "@type": "Organization",
      name: "HopeValley BPO",
    },
    publisher: {
      "@type": "Organization",
      name: "HopeValley BPO",
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
