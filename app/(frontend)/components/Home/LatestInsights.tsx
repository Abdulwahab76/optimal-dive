// app/(frontend)/components/Home/LatestInsights.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { HomePage } from "@/payload-types";

type Category = { slug: string; label: string };
type BlogDate = { day: string; month: string };

export type Blog = {
  id: string;
  slug: string;
  title: string;
  image: string;
  author: string;
  category: Category;
  date: BlogDate;
  excerpt: string;
  createdAt: string;
};

export default function LatestInsights({ latestInsights }: { latestInsights?: HomePage["latestInsights"] }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs?limit=3");
      const data = await res.json();
      setBlogs(data.data);
    };
    fetchBlogs();
  }, []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl lg:text-5xl font-bold text-black">
            {latestInsights?.insightsHeading ?? "Latest Insights"}
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-b from-primary-1 to-primary-2 px-6 py-3 text-xs lg:text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            {latestInsights?.insightsCtaLabel ?? "View All"}
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.id} className="overflow-hidden rounded-2xl bg-[#F5F6FFB2] transition hover:-translate-y-1 hover:shadow-lg">
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative h-52">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover p-4 rounded-3xl" />
                  <div className="absolute right-4 top-4 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-gradient-to-b from-primary-1 to-primary-2 text-center text-xs font-bold text-white">
                    <span>{blog.date.day}</span>
                    <span className="capitalize">{blog.date.month}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between text-xs">
                    <span className="text-[#121212] text-sm font-medium">By {blog.author}</span>
                    <span className="font-medium text-indigo-600">{blog.category.label}</span>
                  </div>
                  <h3 className="text-xl font-medium leading-7 text-gray-900">
                    {blog.title.length > 50 ? `${blog.title.slice(0, 50)}...` : blog.title}
                  </h3>
                  <div className="flex items-center justify-end gap-x-3 pt-5 text-sm font-medium text-black">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-primary-1 to-primary-2 text-white">
                      <ChevronRight size={24} strokeWidth={4} />
                    </span>
                    Read More
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}