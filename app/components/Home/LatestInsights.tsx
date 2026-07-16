"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type Blog = {
  id: number;
  title: string;
  image: string;
  author: string;
  category: string;
  slug: string;
};

export default function LatestInsights() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-bold text-gray-900">Latest Insights</h2>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <ArrowRight size={16} />
                </div>
              </div>

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between text-xs">
                  <span className="text-gray-500">By {blog.author}</span>

                  <span className="font-medium text-indigo-600">
                    {blog.category}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-xl font-semibold leading-7 text-gray-900">
                  {blog.title}
                </h3>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-8 flex items-center justify-between border-t pt-5 text-sm font-medium text-gray-900"
                >
                  Read More
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
