import BlogList from "../components/Blog/BlogList";
import BlogsHeader from "../components/Blog/BlogsHeader";

export const metadata = {
  title: "Blog",
  description:
    "Articles on branding, marketing, mobile, SEO, AI and e-commerce.",
};

export default function BlogPage() {
  return (
    <>
      <BlogsHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogList />
      </div>
    </>
  );
}
