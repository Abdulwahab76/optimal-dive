import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
const projects = [
  {
    title: "Vyro",
    category: "Website",
    image: "/images/success-1.png",
    large: true,
  },
  {
    title: "Bloom",
    category: "Mobile App",
    image: "/images/success-2.png",
  },
  {
    title: "Orvion",
    category: "Crm Design",
    image: "/images/success-3.png",
  },
];
export default function SuccessStories() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1380px] mx-auto px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl lg:text-6xl font-bold tracking-tight">
            Our Success Stories
          </h2>

          <div className="flex flex-nowrap items-center gap-2 sm:gap-4">
            <button className="flex h-10 shrink-0 items-center gap-2 rounded-full border border-black px-3 sm:px-4 lg:px-8 text-sm sm:text-base font-medium whitespace-nowrap">
              View More <ArrowRight size={12} />
            </button>
            <Link href="/contact-us">
              <button className="flex cursor-pointer shrink-0 items-center gap-2 rounded-full bg-linear-to-b from-primary-1 to-primary-2 px-4 sm:px-6 py-2.5 text-sm sm:text-base font-medium text-white whitespace-nowrap">
                Start Your Project
                <ArrowRight size={10} />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.65fr_0.83fr_0.83fr]">
          <ProjectCard {...projects[0]} />

          <ProjectCard {...projects[1]} />

          <ProjectCard {...projects[2]} />
        </div>
      </div>
    </section>
  );
}
