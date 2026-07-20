import { notFound } from "next/navigation";

import SingleBlogHeader from "@/app/components/Blog/BlogHeader";
import { allBlogs } from "@/app/lib/blogs";
import BlogContent from "@/app/components/Blog/BlogContent";
import { blogContent } from "@/app/lib/blog-content";
import LatestInsights from "@/app/components/Home/LatestInsights";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = allBlogs.find((blog) => blog.slug === slug);

  if (!post) notFound();

  const content = blogContent[slug];
  console.log(content, "content");

  if (!content) notFound();
  if (!post) {
    notFound();
  }

  return (
    <div>
      <SingleBlogHeader post={post} />

      <BlogContent
        image={post.image}
        title={post.title}
        toc={content.toc}
        content={String(content.content)}
      />
      <LatestInsights />
    </div>
  );
}
