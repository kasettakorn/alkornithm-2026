import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { GithubLogo as GithubBrand } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CurrentYear } from "@/components/layout/current-year";
import { getPostBySlug } from "@/lib/ghost-post";
import sanitizeHtml from "sanitize-html";

const ghostHtmlOptions = {
  allowedTags: [
    ...sanitizeHtml.defaults.allowedTags,
    "figure",
    "figcaption",
    "iframe",
    "video",
    "source",
    "audio",
    "track",
  ],
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    "*": ["class"],
    iframe: ["src", "title", "allow", "allowfullscreen", "frameborder", "width", "height"],
    video: ["src", "controls", "width", "height", "poster"],
    source: ["src", "type"],
    audio: ["src", "controls"],
    track: ["src", "kind", "label", "srclang", "default"],
  },
  allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com", "player.vimeo.com"],
};

type Props = { params: Promise<{ slug: string }> };

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-mono text-lg font-bold tracking-tight">ALKORNITHM<span className="text-terminal-accent">.</span></Link>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-terminal-accent hover:text-terminal-accent"><GithubBrand size={16} /></a>
          </div>
        </div>
        <nav aria-label="Main navigation" className="flex items-center gap-5 overflow-x-auto pb-1 font-mono text-[11px] text-muted-foreground md:pb-0">
          <Link href="/#about" className="shrink-0 transition-colors hover:text-terminal-accent"><span className="mr-1 text-terminal-accent/70">01.</span>About</Link>
          <Link href="/#projects" className="shrink-0 transition-colors hover:text-terminal-accent"><span className="mr-1 text-terminal-accent/70">02.</span>Work</Link>
          <Link href="/#experience" className="shrink-0 transition-colors hover:text-terminal-accent"><span className="mr-1 text-terminal-accent/70">03.</span>Experience</Link>
          <Link href="/blog" aria-current="page" className="shrink-0 text-terminal-accent"><span className="mr-1">04.</span>Writing</Link>
          <Link href="/#contact" className="shrink-0 transition-colors hover:text-terminal-accent"><span className="mr-1 text-terminal-accent/70">05.</span>Contact</Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-xs transition-colors hover:border-terminal-accent hover:text-terminal-accent"><GithubBrand size={14} /> GitHub <ArrowUpRight size={13} /></a>
        </div>
      </div>
    </header>
  );
}

export default function BlogPostPage({ params }: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Suspense fallback={<div className="mx-auto min-h-[60vh] max-w-3xl px-5 py-20 sm:px-8"><p className="font-mono text-xs text-terminal-accent">Loading article...</p></div>}>
        <BlogPostContent params={params} />
      </Suspense>
    </main>
  );
}

async function BlogPostContent({ params }: Props) {
  const { slug } = await params;
  let post;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-4xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors hover:text-terminal-accent"><ArrowLeft size={13} /> cd /blog</Link>

        <header className="mx-auto mb-12 mt-12 max-w-3xl">
          <p className="section-kicker">ALKORNITHM / JOURNAL / ARTICLE</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            <time>{post.published_at ? new Date(post.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Recently published"}</time>
            <span>·</span>
            <span className="inline-flex items-center gap-1"><Clock3 size={11} /> {post.reading_time} min read</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl">{post.title}<span className="text-terminal-accent">.</span></h1>
          {post.excerpt && <p className="mt-7 text-lg leading-8 text-muted-foreground sm:text-xl">{post.excerpt}</p>}
          {post.tags?.length ? <div className="mt-7 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag.id} className="rounded-md border border-border bg-muted/40 px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground">#{tag.name}</span>)}</div> : null}
        </header>

        {post.feature_image && (
          <div className="relative mb-14 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
            <img src={post.feature_image} alt={post.title ?? "Article cover"} className="h-full w-full object-cover" />
          </div>
        )}

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 border-l-2 border-terminal-accent pl-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">BEGIN ARTICLE</div>
          {/* Sanitize external Ghost content before injecting it into the page. */}
          <div
            className="ghost-content"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.html ?? "", ghostHtmlOptions) }}
          />
          <div className="mt-16 border-t border-border pt-8">
            <p className="font-mono text-[10px] text-terminal-accent">END OF ARTICLE <span className="text-muted-foreground">// THANKS FOR READING</span></p>
            <Link href="/blog" className="mt-5 inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 font-mono text-xs transition-colors hover:border-terminal-accent hover:text-terminal-accent">back_to_journal <ArrowLeft size={13} /></Link>
          </div>
        </div>
      </article>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 font-mono text-[10px] text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-bold tracking-tight text-foreground">ALKORNITHM<span className="text-terminal-accent">.</span></Link>
          <span>May the bug be with you.</span>
          <span>© <CurrentYear /> ALKORNITHM · Built with curiosity.</span>
        </div>
      </footer>
    </>
  );
}
