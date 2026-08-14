// app/(frontend)/components/Blog/BlogContent.tsx
"use client";

import Image from "next/image";

import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import BlogTopics from "./BlogTopics";
import ContactForm from "./BlogContactForm";
import { ContactForm as BlogContactForm } from "@/payload-types";
import { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import { cloneElement, isValidElement, ReactElement } from "react";
import { slugify } from "../../lib/slugify";

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,

  heading: (args) => {
    const { node } = args;

    const title =
      node.children
        ?.map((child) => ("text" in child ? child.text : ""))
        .join("") ?? "";

    const id = slugify(title);

    const DefaultHeading = defaultConverters.heading;

    if (typeof DefaultHeading !== "function") {
      return null;
    }

    const element = DefaultHeading(args);

    if (!isValidElement(element)) {
      return element;
    }

    return cloneElement(element as React.ReactElement<any>, {
      id,
    });
  },
});

interface TOCItem {
  id: string;
  title: string;
}

interface Props {
  image: string;
  title: string;
  content: SerializedEditorState;
  toc?: TOCItem[];
  formConfig: BlogContactForm;
}

export default function BlogContent({
  image,
  title,
  content,
  toc = [],
  formConfig,
}: Props) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8">
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

            {toc.length > 0 && (
              <div className="mb-8 lg:hidden">
                <BlogTopics items={toc} />
              </div>
            )}

            <div className="prose prose-neutral max-w-none">
              <RichText data={content} converters={jsxConverters} />
            </div>
          </article>

          <aside className="hidden space-y-6 lg:block lg:col-span-4">
            {toc.length > 0 && <BlogTopics items={toc} />}
            <ContactForm formConfig={formConfig} />
          </aside>

          <div className="lg:hidden">
            <ContactForm formConfig={formConfig} />
          </div>
        </div>
      </div>
    </section>
  );
}
