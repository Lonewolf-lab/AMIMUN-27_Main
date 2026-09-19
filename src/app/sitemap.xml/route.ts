import { NextResponse } from "next/server";
import { getAllProjects } from "@/lib/content";

const BASE_URL = "https://www.havenconstructions.com.au";

export function GET() {
  const projects = getAllProjects();

  const staticUrls = [
    "",
    "/projects",
    "/about",
    "/expertise",
    "/for-architects",
    "/contact",
  ];

  const now = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  staticUrls.forEach((route) => {
    xml += `  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${route === "" || route === "/projects" ? "weekly" : "monthly"}</changefreq>\n    <priority>${route === "" ? "1.0" : route === "/projects" || route === "/contact" ? "0.9" : "0.8"}</priority>\n  </url>\n`;
  });

  projects.forEach((project) => {
    xml += `  <url>\n    <loc>${BASE_URL}/projects/${project.slug}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
