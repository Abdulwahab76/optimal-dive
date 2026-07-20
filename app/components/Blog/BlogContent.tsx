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
          {/* LEFT */}

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
            {/* Article Content */}
            <div
              className="prose prose-neutral max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>

          {/* RIGHT */}

          <aside className="space-y-6 lg:col-span-4">
            {/* Topics */}
            <BlogTopics items={toc} />

            {/* Contact */}

            <ContactForm />
          </aside>
        </div>
      </div>
    </section>
  );
}
