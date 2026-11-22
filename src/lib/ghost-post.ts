
import { ghost } from "@/lib/ghost";

export async function getPosts() {
    return ghost.posts.browse({
        limit: 20,
        include: ["tags", "authors"],
        order: "published_at DESC",
    });
}

const postIdRoutePattern = /^id-([a-f0-9]{24})$/i;

export function getPostPath(post: { id: string }) {
    return `/blog/id-${post.id}`;
}

export function getPostIdFromRoute(routeKey: string) {
    return postIdRoutePattern.exec(routeKey)?.[1];
}

export async function getPostByRouteKey(routeKey: string) {
    const id = getPostIdFromRoute(routeKey);
    return ghost.posts.read(
        id ? { id } : { slug: routeKey },
        { include: ["tags", "authors"] }
    );
}
