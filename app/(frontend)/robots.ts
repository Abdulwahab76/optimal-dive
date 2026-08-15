// app/(frontend)/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://optimal-dive.vercel.app";
  const isIndexingEnabled = process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true";

  if (!isIndexingEnabled) {
    // Staging — block everything from being crawled/indexed
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  // Production — real domain, allow crawling
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}