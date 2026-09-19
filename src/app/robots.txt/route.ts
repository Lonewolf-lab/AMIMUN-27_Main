import { NextResponse } from "next/server";

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.havenconstructions.com.au/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
