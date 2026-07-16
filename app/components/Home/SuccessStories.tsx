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
          <h2 className="text-6xl font-bold tracking-tight">
            Our Success Stories
          </h2>

          <div className="flex gap-4">
            <button className="h-12 flex items-center gap-2   rounded-full border border-black px-8 text-base font-medium">
              View More <ArrowRight size={12} />
            </button>

            <div className="flex items-center gap-2 bg-linear-to-b from-primary-1 to-primary-2 text-white px-6 py-2   rounded-full">
              <button className="text-base font-medium ">
                Start Your Project
              </button>
              <ArrowRight size={10} />
            </div>
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
