// app/(frontend)/components/Home/SuccessStories.tsx
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import type { HomePage } from "@/payload-types";
import { mediaUrl } from "@/lib/media";

const defaultProjects = [
  { projectTitle: "Vyro", projectCategory: "Website", projectImage: null, projectLarge: true },
  { projectTitle: "Bloom", projectCategory: "Mobile App", projectImage: null, projectLarge: false },
  { projectTitle: "Orvion", projectCategory: "Crm Design", projectImage: null, projectLarge: false },
];

const defaultImages = ["/images/success-1.png", "/images/success-2.png", "/images/success-3.png"];

export default function SuccessStories({
  successStories,
}: {
  successStories?: HomePage["successStories"];
}) {
  const projects = successStories?.projects?.length
    ? successStories.projects
    : defaultProjects;

  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1380px] mx-auto px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl lg:text-6xl font-bold tracking-tight">
            {successStories?.successHeading ?? "Our Success Stories"}
          </h2>

          <div className="flex flex-nowrap items-center gap-2 sm:gap-4">
            <button className="flex h-10 shrink-0 items-center gap-2 rounded-full border border-black px-3 sm:px-4 lg:px-8 text-sm sm:text-base font-medium whitespace-nowrap">
              {successStories?.successViewMoreLabel ?? "View More"} <ArrowRight size={12} />
            </button>
            <Link href={successStories?.successCtaLink ?? "/contact-us"}>
              <button className="flex cursor-pointer shrink-0 items-center gap-2 rounded-full bg-linear-to-b from-primary-1 to-primary-2 px-4 sm:px-6 py-2.5 text-sm sm:text-base font-medium text-white whitespace-nowrap">
                {successStories?.successCtaLabel ?? "Start Your Project"}
                <ArrowRight size={10} />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.65fr_0.83fr_0.83fr]">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.projectTitle + i}
              title={p.projectTitle}
              category={p.projectCategory}
              image={mediaUrl(p.projectImage, defaultImages[i] ?? defaultImages[0])}
              large={p.projectLarge ?? false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}