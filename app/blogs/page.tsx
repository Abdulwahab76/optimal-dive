import BlogList from "../components/Blogs/BlogList";
import BlogsHeader from "../components/Blogs/BlogsHeader";

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
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            From the Blog
          </h1>
          <p className="mt-3 text-gray-500">
            Insights and updates across branding, marketing, mobile, SEO, AI and
            e-commerce.
          </p>
        </div>
        <BlogList />
      </div>
    </>
  );
}
