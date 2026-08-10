import { Blog, CategorySlug } from "@/types/blog";
import { categories } from "./categories";

const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

const authors = ["Optimal Dive", "Sara Khan", "James Cole", "Priya Nair"];

const images = [
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80", // dev/setup
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // mobile design
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", // ai/abstract
];

const titles: Record<CategorySlug, string[]> = {
  all: [],
  branding: [
    "Building a Brand Identity That Actually Sticks",
    "Logo Design Trends Worth Stealing in 2026",
    "How Color Psychology Shapes Brand Trust",
    "From Wordmark to World: Scaling a Brand System",
  ],
  "digital-marketing": [
    "Designing for Impact: Motion & Interaction",
    "Email Campaigns That Beat the Spam Folder",
    "Attribution Modeling for Small Marketing Teams",
    "Short-Form Video: The New Marketing Baseline",
  ],
  "mobile-app": [
    "Top 10 Game Engines for Indie Developers in 2026",
    "Native vs Cross-Platform: A 2026 Decision Guide",
    "Onboarding Flows That Don't Lose Users",
    "Offline-First Architecture for Mobile Apps",
  ],
  seo: [
    "Technical SEO Checklist for Product Launches",
    "How Search Intent Changed After AI Overviews",
    "Core Web Vitals: What Still Moves Rankings",
    "Internal Linking Strategies That Compound",
  ],
  "ai-solution": [
    "AI Integration in Enterprise Systems",
    "Retrieval-Augmented Generation, Explained Simply",
    "Where AI Agents Break in Production",
    "Choosing Between Fine-Tuning and Prompting",
  ],
  "e-commerce": [
    "Checkout Friction: Every Extra Field Costs You",
    "Personalization Without Being Creepy",
    "Inventory Sync Across Multiple Storefronts",
    "Building Trust Signals Into Product Pages",
  ],
};

const contentCategories = categories.filter((c) => c.slug !== "all");

function buildMockBlogs(): Blog[] {
  const blogs: Blog[] = [];
  let counter = 1;

  // A couple of passes so every category has enough entries to paginate.
  for (let pass = 0; pass < 2; pass++) {
    for (const category of contentCategories) {
      for (const title of titles[category.slug]) {
        const id = String(counter);
        blogs.push({
          id,
          slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${id}`,
          title,
          image: images[counter % images.length],
          author: authors[counter % authors.length],
          category,
          date: { day: String(10 + (counter % 18)), month: "june" },
          excerpt:
            "A closer look at the practical side of this topic, with lessons pulled from real projects.",
          createdAt: new Date(2026, 5, 10 + (counter % 18)).toISOString(),
        });
        counter++;
      }
    }
  }

  return blogs;
}

// In-memory "database". Replace this with a real query (Prisma, Sanity,
// Contentful, etc.) inside app/api/blogs/route.ts when the backend is ready —
// nothing else in the app needs to change since it only talks to that route.
export const allBlogs: Blog[] = buildMockBlogs();
