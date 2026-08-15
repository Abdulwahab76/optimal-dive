// app/(frontend)/sitemap.ts
import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://optimal-dive.vercel.app";
  const isIndexingEnabled = process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true";

  // Staging pe empty sitemap — kuch bhi index nahi hoga
  if (!isIndexingEnabled) {
    return [];
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/automative`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/branding`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/contact-us`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const payload = await getPayload({ config });

  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
    limit: 1000,
    depth: 0,
    sort: "-publishedAt",
  });

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}