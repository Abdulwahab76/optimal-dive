import type { Metadata } from "next";

export function generateSEOMetadata(meta: any): Metadata {
  if (!meta) return {};

  const ogImage =
    typeof meta.social?.ogImage === "object"
      ? meta.social.ogImage?.url
      : undefined;

  const twitterImage =
    typeof meta.social?.twitterImage === "object"
      ? meta.social.twitterImage?.url
      : undefined;

  return {
    title: meta.title ?? undefined,

    description: meta.description ?? undefined,

    keywords: meta.keywords
      ? meta.keywords
          .split(",")
          .map((item: string) => item.trim())
      : undefined,

    alternates: {
      canonical: meta.canonicalURL ?? undefined,
    },

    robots: {
      index: !meta.robots?.noIndex,
      follow: !meta.robots?.noFollow,
    },

    openGraph: {
      title: meta.social?.ogTitle ?? meta.title,
      description:
        meta.social?.ogDescription ?? meta.description,
      images: ogImage ? [ogImage] : [],
    },

    twitter: {
      card:
        meta.social?.twitterCard ??
        "summary_large_image",

      title:
        meta.social?.twitterTitle ??
        meta.title,

      description:
        meta.social?.twitterDescription ??
        meta.description,

      images: twitterImage
        ? [twitterImage]
        : [],
    },
  };
}