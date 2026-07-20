"use client";

import Image from "next/image";
import { CalendarDays, CircleUserRound, Clock3, User2 } from "lucide-react";

interface BlogHeaderProps {
  post: {
    title: string;
    image: string;
    author: string;
    category: {
      slug: string;
      label: string;
    };
    createdAt: string;
    readTime?: string;
  };
}

export default function SingleBlogHeader({ post }: BlogHeaderProps) {
  const date = new Date(post.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="relative overflow-hidden  bg-[#1D1D1D]">
      {/* Glow */}

      <div
        className="absolute     top-[70%]  w-full h-40 pointer-events-none"
        style={{
          background: `
      radial-gradient(
        ellipse at center,
        rgba(110, 92, 255, 0.55) 0%,
        rgba(110, 92, 255, 0.35) 30%,
        rgba(110, 92, 255, 0.18) 55%,
        rgba(110, 92, 255, 0.08) 72%,
        transparent 100%
      )
    `,
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-32 pb-28">
        {/* Category */}

        <div className="p-2 px-4 mx-auto sm:mx-0 rounded-full border border-primary-1 w-fit flex items-center gap-2 mb-4">
          <Image
            src="/images/gemini.png"
            width={60}
            height={60}
            alt="gemini"
            className="h-auto w-auto "
          />
          <p className="font-medium text-sm uppercase text-white">
            {post.category.label}
          </p>
        </div>
        {/* Title */}

        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl sm:text-left text-center">
          {post.title}
        </h1>

        {/* Meta */}

        <div className="mt-8 flex flex-wrap justify-center sm:justify-start items-center gap-x-8 gap-y-3 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <CircleUserRound size={22} className="text-primary-1" />
            <span>{post.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={22} className="text-primary-1" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={22} className="text-primary-1" />
            <span>{post.readTime ?? "8 min read"}</span>
          </div>
        </div>

        {/* Featured Image */}

        {/* <div className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:w-[68%]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div> */}
      </div>

      {/* Bottom Curve */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-16 w-full md:h-28"
        >
          <path
            fill="#ffffff"
            d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z"
          />
        </svg>
      </div>
    </header>
  );
}
