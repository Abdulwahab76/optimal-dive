"use client";

// components/blog/BlogList.tsx
import { useEffect, useState } from "react";
import { Blog, CategorySlug, PaginatedBlogsResponse } from "@/types/blog";
import CategoryFilter from "./CategoryFilter";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";
import Pagination from "./Pagination";
import { ChevronRight, Search } from "lucide-react";

const PAGE_SIZE = 6;

export default function BlogList() {
  const [category, setCategory] = useState<CategorySlug>("all");
  const [page, setPage] = useState(1);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({
          category,
          page: String(page),
          limit: String(PAGE_SIZE),
        });

        if (titleSearch.trim()) {
          params.set("title", titleSearch.trim());
        }

        const res = await fetch(`/api/blogs?${params.toString()}`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Failed to load blogs");

        const json: PaginatedBlogsResponse = await res.json();
        setBlogs(json.data);
        setTotalPages(json.pagination.totalPages);

        if (json.pagination.page !== page) setPage(json.pagination.page);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Something went wrong loading blogs. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
    return () => controller.abort();
  }, [category, page, titleSearch]);

  const handleCategoryChange = (next: CategorySlug) => {
    setCategory(next);
    setPage(1); // always reset to page 1 on a new filter
  };
  const handleSearch = (e: React.FormEvent<HTMLButtonElement>) => {
    setPage(1);
    setTitleSearch(searchInput);
  };
 
  return (
    <div className="space-y-10 mt-5">
      <div className="flex h-10 w-full max-w-lg overflow-hidden rounded-full border mx-auto border-primary-1 bg-white">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search Blog..."
          className="min-w-0 flex-1 bg-[#F8F8FF] px-3 sm:px-5 text-sm outline-none placeholder:text-[#9E9E9E]"
        />

        <button
          onClick={handleSearch}
          className="m-1 cursor-pointer flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-primary-1 to-primary-2 px-3 sm:px-6 text-xs sm:text-sm font-medium text-white"
        >
          <Search size={14} />
        </button>
      </div>

      <CategoryFilter
        activeCategory={category}
        onChange={handleCategoryChange}
      />

      {error ? (
        <div className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center text-sm text-red-600">
          {error}
        </div>
      ) : (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))
            : blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
        </div>
      )}

      {!isLoading && !error && blogs.length === 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center text-gray-500">
          No posts in this category yet.
        </div>
      )}

      {!error && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      )}
    </div>
  );
}
