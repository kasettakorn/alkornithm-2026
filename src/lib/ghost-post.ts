
import { ghost } from "@/lib/ghost";

export async function getPosts() {
    return ghost.posts.browse({
        limit: 20,
        include: ["tags", "authors"],
        order: "published_at DESC",
    });
}

export async function getPostBySlug(slug: string) {
    return ghost.posts.read(
        { slug },
        { include: ["tags", "authors"] }
    );
}
