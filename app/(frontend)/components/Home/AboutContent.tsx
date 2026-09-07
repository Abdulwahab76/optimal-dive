// app/(frontend)/components/Home/AboutContent.tsx
import ArrowCircle from "./ArrowCircle";
import type { HomePage } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

const fallbackBodyText: SerializedEditorState = {
  root: {
    type: "root",
    children: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "built on one simple belief: great software should solve real problems and drive lasting business growth. We combine creative thinking with deep technical expertise to turn ambitious ideas into products that generate a profitable, sustainable impact.",
            version: 1,
          } as any,
        ],
        version: 1,
        direction: "ltr",
        format: "",
        indent: 0,
      } as any,
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
  },
};

export default function AboutContent({ about }: { about: HomePage["about"] }) {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-6">
      <div className="w-full col-span-full lg:col-span-5">
        <h2 className="text-3xl lg:text-6xl font-bold">{about?.aboutHeading ?? "Who We Are"}</h2>
        <div className="mt-8 text-lg lg:text-4xl leading-tight text-white/50 [&_a]:underline [&_a]:text-primary-1">
          <span className="text-white">
            {about?.aboutHighlightText ?? "Optimal Dive is a full-cycle product development company"}
          </span>{" "}
          <RichText data={about?.aboutBodyText ?? fallbackBodyText} />
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end col-span-full lg:col-span-1">
        <ArrowCircle />
      </div>
    </div>
  );
}