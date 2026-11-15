
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { getPosts } from "../../lib/ghost-post";

export const metadata = {
    title: "Blog",
    description: "Articles, tutorials, and notes from ALKORNITHM.",
};

export default function BlogPage() {
    return (
        <Suspense
            fallback={
                <main className="mx-auto min-h-screen max-w-6xl px-6 py-20 lg:px-8">
                    <p className="text-muted-foreground">Loading articles...</p>
                </main>
            }
        >
            <BlogContent />
        </Suspense>
    );
}

async function BlogContent() {
    const posts = await getPosts();

    return (
        <main className="mx-auto min-h-screen max-w-6xl px-6 py-20 lg:px-8">
            <div className="mb-16">
                <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                    ALKORNITHM / JOURNAL
                </p>

                <h1 className="mt-5 text-5xl font-semibold tracking-tight">
                    Blog<span className="text-muted-foreground">.</span>
                </h1>

                <p className="mt-5 max-w-xl text-muted-foreground">
                    Thoughts, tutorials, experiments, and things
                    I learn along the way.
                </p>
            </div>

            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
                {posts.map((post) => (
                    <article key={post.id} className="group">
                        <Link href={`/blog/${post.slug}`}>
                            {post.feature_image && (
                                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
                                    <Image
                                        src={post.feature_image}
                                        alt={post.title ?? ''}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}

                            <div className="mt-5 flex gap-3 font-mono text-xs text-muted-foreground">
                                <time>
                                    {post.published_at
                                        ? new Date(post.published_at).toLocaleDateString(
                                            "en-US",
                                            {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            }
                                        )
                                        : ""}
                                </time>
                                <span>·</span>
                                <span>{post.reading_time} min read</span>
                            </div>

                            <h2 className="mt-3 text-2xl font-medium tracking-tight group-hover:text-muted-foreground">
                                {post.title}
                            </h2>

                            <p className="mt-3 leading-7 text-muted-foreground">
                                {post.excerpt}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags?.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}
