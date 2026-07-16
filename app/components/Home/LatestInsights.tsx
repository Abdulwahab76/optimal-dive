"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
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
          <h2 className="text-2xl lg:text-6xl font-bold text-black">
            Latest Insights
          </h2>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-b from-primary-1 to-primary-2  px-6 py-3 text-xs lg:text-sm font-medium text-white transition hover:bg-indigo-700"
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

                <div className="absolute right-4 top-4 flex h-12 w-12 text-center font-bold text-xs items-center justify-center rounded-full bg-linear-to-b from-primary-1 to-primary-2 text-white">
                  18 <br /> june
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
                  className="mt-8 flex items-center gap-x-3 justify-end pt-5 text-sm font-medium text-black"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-b from-primary-1 to-primary-2 text-white">
                    <ChevronRight size={14} />
                  </span>
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
