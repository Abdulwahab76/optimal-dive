// types/blog.ts

export type CategorySlug =
  | "all"
  | "branding"
  | "digital-marketing"
  | "mobile-app"
  | "seo"
  | "ai-solution"
  | "e-commerce";

export interface Category {
  slug: CategorySlug;
  label: string;
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  image: string;
  author: string;
  category: Category; // display label + slug, so cards don't need a lookup
  date: {
    day: string; // "18"
    month: string; // "june"
  };
  excerpt?: string;
  createdAt: string; // ISO date, used for sorting later when this is real data
}

// Shape returned by GET /api/blogs — mirrors a typical paginated REST response
// so swapping the mock data source for a DB/CMS later doesn't change any
// component's props.
export interface PaginatedBlogsResponse {
  data: Blog[];
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  };
}
