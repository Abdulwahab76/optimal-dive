// app/api/blogs/route.ts
import { NextRequest, NextResponse } from "next/server";

import { PaginatedBlogsResponse } from "@/types/blog";
import { isCategorySlug } from "@/app/lib/categories";
import { allBlogs } from "@/app/lib/blogs";

const DEFAULT_LIMIT = 6;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const categoryParam = searchParams.get("category") ?? "all";
  const category = isCategorySlug(categoryParam) ? categoryParam : "all";

  const page = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);
  const limit = Math.max(
    1,
    Number(searchParams.get("limit") ?? String(DEFAULT_LIMIT)) || DEFAULT_LIMIT
  );

  // --- Swap point -----------------------------------------------------
  // Once there's a real backend, replace this block with something like:
  //   const { rows, total } = await db.blog.findManyPaginated({ category, page, limit })
  // and keep the response shape identical so the client code below never
  // has to change.
  const filtered =
    category === "all"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category.slug === category);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / limit));
  const safePage = Math.min(page, totalPages);

  const start = (safePage - 1) * limit;
  const data = filtered.slice(start, start + limit);
  // ---------------------------------------------------------------------

  const body: PaginatedBlogsResponse = {
    data,
    pagination: {
      page: safePage,
      limit,
      totalItems,
      totalPages,
    },
  };

  return NextResponse.json(body);
}
