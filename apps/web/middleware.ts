import { NextResponse } from "next/server";
import { getLanguages, getDefaultLanguages } from "./lib/localization";

const lang = getLanguages();
export function middleware(request) {
  const { pathname } = request.nextUrl;

  const locale = lang.find((locale) =>
    new RegExp(`^/${locale}(/|$)`).test(pathname)
  );

  if (locale) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL(`/${getDefaultLanguages()}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
