import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const { pathname, origin } = request.nextUrl;
    const languageSegment = pathname.split("/")[1];

    if (["fr", "en"].includes(languageSegment)) {
        const path = pathname.replace(`/${languageSegment}`, "");
        return NextResponse.redirect(`${origin}${path}`);
    }

    return NextResponse.next();
}