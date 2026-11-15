
import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
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
    allowedIframeHostnames: [
        "www.youtube.com",
        "www.youtube-nocookie.com",
        "player.vimeo.com",
    ],
};

type Props = {
    params: Promise<{ slug: string }>;
};

export default function BlogPostPage({ params }: Props) {
    return (
        <Suspense
            fallback={
                <main className="mx-auto min-h-screen max-w-3xl px-6 py-20">
                    <p className="text-muted-foreground">Loading article...</p>
                </main>
            }
        >
            <BlogPostContent params={params} />
        </Suspense>
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
        <main className="mx-auto max-w-3xl px-6 py-20">
            <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground"
            >
                ← Back to blog
            </Link>

            <header className="mb-12 mt-10">
                <div className="mb-4 flex gap-4 text-sm text-muted-foreground">
                    <time>
                        {post.published_at
                            ? new Date(post.published_at).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )
                            : ""}
                    </time>

                    <span>{post.reading_time} min read</span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    {post.title}
                </h1>

                {post.excerpt && (
                    <p className="mt-6 text-lg text-muted-foreground">
                        {post.excerpt}
                    </p>
                )}
            </header>

            {post.feature_image && (
                <img
                    src={post.feature_image}
                    alt={post.title}
                    className="mb-12 aspect-video w-full rounded-xl object-cover"
                />
            )}

            {/* Sanitize external Ghost content before injecting it into the page. */}
            <article
                className="ghost-content"
                dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(post.html ?? "", ghostHtmlOptions),
                }}
            />
        </main>
    );
}
