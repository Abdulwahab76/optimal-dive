// components/blog/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Blog } from "@/types/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />

        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-b from-primary-1 to-primary-2 text-center text-xs font-bold text-white">
          {blog.date.day} <br /> {blog.date.month}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between text-xs">
          <span className="text-gray-500">By {blog.author}</span>

          <span className="font-medium text-indigo-600">
            {blog.category.label}
          </span>
        </div>

        <h3 className="line-clamp-2 text-xl font-semibold leading-7 text-gray-900">
          {blog.title}
        </h3>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-8 flex items-center justify-end gap-x-3 pt-5 text-sm font-medium text-black"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-b from-primary-1 to-primary-2 text-white">
            <ChevronRight size={14} />
          </span>
          Read More
        </Link>
      </div>
    </article>
  );
}
