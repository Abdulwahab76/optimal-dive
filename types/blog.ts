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
  author: string;

  category: Category;

  image: {
    id: number;
    url: string;
    alt?: string;
  };

  publishedAt: string;
  createdAt: string;
  updatedAt: string;

  excerpt?: string | null;

  meta?: {
    title?: string;
    description?: string;
    image?: {
      id: number;
      url: string;
      alt?: string;
    };
    canonicalURL?: string | null;
  };

  status?: string;
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
