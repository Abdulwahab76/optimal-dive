import BlogList from "../components/Blog/BlogList";
import BlogsHeader from "../components/Blog/BlogsHeader";
import { getBlogPage } from "@/lib/getBlogPage";
import { generateSEOMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getBlogPage();
  return generateSEOMetadata(page.meta);
}

export default async function BlogPage() {
  const page = await getBlogPage();

  return (
    <>
      <BlogsHeader blogHero={page.blogHero} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogList />
      </div>
    </>
  );
}