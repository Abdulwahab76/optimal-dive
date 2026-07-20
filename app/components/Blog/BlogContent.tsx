"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import BlogTopics from "./BlogTopics";

interface TOCItem {
  id: string;
  title: string;
}

interface Props {
  image: string;
  title: string;
  content: string;
  toc: TOCItem[];
}

export default function BlogContent({ image, title, content, toc }: Props) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8">
            {/* Featured Image */}
            <div className="relative -mt-40 mb-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile Topics */}
            <div className="mb-8 lg:hidden">
              <BlogTopics items={toc} />
            </div>

            {/* Article */}
            <div
              className="prose prose-neutral max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>

          <aside className="hidden space-y-6 lg:block lg:col-span-4">
            <BlogTopics items={toc} />
            <ContactForm />
          </aside>

          {/* Mobile Contact Form */}
          <div className="lg:hidden">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
