import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { CurrentYear } from "@/components/layout/current-year";
import { SiteHeader } from "@/components/layout/navbar";
import { getPostByRouteKey, getPostIdFromRoute, getPostPath } from "@/lib/ghost-post";
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

export default function BlogPostPage({ params }: Props) {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <SiteHeader currentPage="blog" />
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
        post = await getPostByRouteKey(slug);
    } catch {
        notFound();
    }
    if (!post) notFound();
    if (!getPostIdFromRoute(slug)) permanentRedirect(getPostPath(post));

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
                        <Image
                            src={post.feature_image}
                            alt={post.title ?? "Article cover"}
                            fill
                            sizes="(max-width: 896px) 100vw, 896px"
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="mx-auto max-w-3xl">
                    <div className="mb-8 border-l-2 border-terminal-accent pl-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">BEGIN ARTICLE</div>
                    {/* Sanitize external Ghost content before injecting it into the page. */}
                    <div
                        className="ghost-content font-mono antialiased"
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.html ?? "", ghostHtmlOptions) }}
                    />
                    <div className="mt-16 border-t border-border pt-8">
                        <p className="font-mono text-[10px] text-terminal-accent">END OF ARTICLE <span className="text-muted-foreground">{"// THANKS FOR READING"}</span></p>
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
