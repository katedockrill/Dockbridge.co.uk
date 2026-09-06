import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the homepage and Next.js internal assets through
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // Redirect everything else back to the maintenance page
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!api).*)"],
};