import { Category, CategorySlug } from "@/types/blog";

export const categories: Category[] = [
  { slug: "all", label: "All" },
  { slug: "branding", label: "Branding" },
  { slug: "digital-marketing", label: "Digital Marketing" },
  { slug: "mobile-app", label: "Mobile app" },
  { slug: "seo", label: "SEO" },
  { slug: "ai-solution", label: "AI Solution" },
  { slug: "e-commerce", label: "E-commerce" },
];

export const isCategorySlug = (value: string): value is CategorySlug =>
  categories.some((c) => c.slug === value);
