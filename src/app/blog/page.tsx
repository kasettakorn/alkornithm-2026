import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowLeft, ArrowUpRight, Clock3, Terminal } from "lucide-react";
import { CurrentYear } from "@/components/layout/current-year";
import { SiteHeader } from "@/components/layout/navbar";
import { getPostPath, getPosts } from "@/lib/ghost-post";

export const metadata = {
    title: "Writing",
    description: "Technical notes, experiments, research, and ideas from ALKORNITHM.",
};

function formatDate(date?: string | null, month: "short" | "long" = "short") {
    if (!date) return "Recently published";
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month,
        day: "numeric",
    });
}

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <SiteHeader currentPage="blog" />
            <Suspense
                fallback={
                    <div className="mx-auto min-h-[60vh] max-w-6xl px-5 py-24 sm:px-8">
                        <p className="font-mono text-xs text-terminal-accent">~/alkornithm/blog <span className="terminal-caret">▍</span></p>
                        <p className="mt-5 text-sm text-muted-foreground">Loading journal entries...</p>
                    </div>
                }
            >
                <BlogContent />
            </Suspense>
        </main>
    );
}

async function BlogContent() {
    const posts = await getPosts();
    const [featuredPost, ...archivePosts] = posts;

    return (
        <>
            <section className="terminal-grid relative overflow-hidden border-b border-border">
                <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28">
                    <Link href="/" className="mb-12 inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors hover:text-terminal-accent">
                        <ArrowLeft size={13} /> cd ..
                    </Link>
                    <p className="section-kicker flex items-center gap-2"><Terminal size={13} /> ALKORNITHM / JOURNAL</p>
                    <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
                        <div>
                            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                                Ideas, notes &<br /><span className="text-terminal-accent">experiments.</span><span className="terminal-caret ml-1 inline-block h-[0.75em] w-[3px] translate-y-1 bg-terminal-accent" />
                            </h1>
                            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                                A collection of things I learn while building software — engineering notes, research, tutorials, and curious side quests.
                            </p>
                        </div>
                        <div className="border-l border-border pl-5 font-mono text-xs leading-7 text-muted-foreground">
                            <p><span className="text-terminal-accent">$</span> ls ./writing</p>
                            <p className="pl-4">{String(posts.length).padStart(2, "0")} published entries</p>
                            <p className="pl-4">Updated as I learn</p>
                            <p className="mt-3 text-terminal-accent">{"// MAY THE BUG BE WITH YOU."}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                        <p className="section-kicker">01 / LATEST ENTRY</p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Fresh from the journal.</h2>
                    </div>
                    <span className="hidden font-mono text-[10px] text-muted-foreground sm:block">FEATURED_STORY</span>
                </div>

                {featuredPost ? (
                    <article className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-terminal-accent/50">
                        <Link href={getPostPath(featuredPost)} className="grid lg:grid-cols-[1.1fr_0.9fr]">
                            {featuredPost.feature_image ? (
                                <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto lg:min-h-[390px]">
                                    <Image
                                        src={featuredPost.feature_image}
                                        alt={featuredPost.title ?? "Featured article"}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 55vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>
                            ) : (
                                <div className="terminal-grid flex min-h-[260px] items-center justify-center border-b border-border bg-muted/30 lg:min-h-[390px] lg:border-b-0 lg:border-r">
                                    <Terminal size={54} strokeWidth={1} className="text-terminal-accent/50" />
                                </div>
                            )}
                            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                                <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                                    <span className="text-terminal-accent">Latest post</span>
                                    <span>·</span>
                                    <time>{formatDate(featuredPost.published_at)}</time>
                                    <span>·</span>
                                    <span className="inline-flex items-center gap-1"><Clock3 size={11} /> {featuredPost.reading_time} min read</span>
                                </div>
                                <h3 className="mt-6 font-mono text-3xl font-semibold leading-tight tracking-[-0.04em] transition-colors group-hover:text-terminal-accent sm:text-4xl">
                                    {featuredPost.title}
                                </h3>
                                {featuredPost.excerpt && (
                                    <p className="mt-5 line-clamp-4 text-sm leading-7 text-muted-foreground sm:text-base">
                                        {featuredPost.excerpt}
                                    </p>
                                )}
                                {featuredPost.tags?.length ? (
                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {featuredPost.tags.map((tag) => (
                                            <span key={tag.id} className="rounded-md border border-border bg-muted/40 px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground">#{tag.name}</span>
                                        ))}
                                    </div>
                                ) : null}
                                <span className="mt-9 inline-flex items-center gap-2 font-mono text-xs text-terminal-accent">
                                    read_article <ArrowUpRight size={14} />
                                </span>
                            </div>
                        </Link>
                    </article>
                ) : (
                    <div className="rounded-xl border border-dashed border-border px-6 py-16 text-center">
                        <p className="font-mono text-xs text-terminal-accent">$ find ./writing -type f</p>
                        <h3 className="mt-4 text-xl font-semibold">The journal is warming up.</h3>
                        <p className="mt-2 text-sm text-muted-foreground">New articles and experiments will appear here soon.</p>
                    </div>
                )}
            </section>

            {archivePosts.length > 0 && (
                <section className="border-y border-border bg-muted/20">
                    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
                        <div className="mb-8 flex items-end justify-between gap-4">
                            <div>
                                <p className="section-kicker">02 / THE ARCHIVE</p>
                                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">More to explore.</h2>
                            </div>
                            <span className="font-mono text-[10px] text-muted-foreground">{String(archivePosts.length).padStart(2, "0")} POSTS</span>
                        </div>
                        <div className="divide-y divide-border border-y border-border">
                            {archivePosts.map((post, index) => (
                                <article key={post.id} className="group">
                                    <Link href={getPostPath(post)} className="grid gap-4 py-7 transition-colors sm:grid-cols-[64px_1fr_auto] sm:items-center sm:gap-7">
                                        <span className="font-mono text-xs text-terminal-accent">/{String(index + 2).padStart(2, "0")}</span>
                                        <div>
                                            <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-[10px] text-muted-foreground">
                                                <time>{formatDate(post.published_at)}</time>
                                                <span>·</span>
                                                <span>{post.reading_time} min read</span>
                                            </div>
                                            <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-terminal-accent sm:text-2xl">{post.title}</h3>
                                            {post.excerpt && <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-6 text-muted-foreground">{post.excerpt}</p>}
                                            {post.tags?.length ? <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">{post.tags.map((tag) => <span key={tag.id} className="font-mono text-[10px] text-muted-foreground">#{tag.name}</span>)}</div> : null}
                                        </div>
                                        <ArrowUpRight size={18} className="hidden text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-terminal-accent sm:block" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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
