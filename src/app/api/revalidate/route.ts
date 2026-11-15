
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret");

    if (
        !process.env.GHOST_WEBHOOK_SECRET ||
        secret !== process.env.GHOST_WEBHOOK_SECRET
    ) {
        return NextResponse.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }

    revalidateTag("ghost-posts", "max");
    revalidatePath("/blog");

    return NextResponse.json({
        revalidated: true,
        timestamp: new Date().toISOString(),
    });
}
