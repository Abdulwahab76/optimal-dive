"use client";

import { Check, CheckCircle2 } from "lucide-react";

export interface SolutionItem {
  id: number;
  number: string;
  title: string;
  description: string;
  features: string[];
}

interface SolutionsSectionProps {
  title: string;
  highlight: string;
  solutions: SolutionItem[];
}

export default function SolutionsSection({
  title,
  highlight,
  solutions,
}: SolutionsSectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#171717] md:text-5xl">
            {title}
            <br />
            <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#EEF1FF]
                bg-[#FCFDFF]
                p-7
                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-primary-1/30
                hover:shadow-2xl
              "
            >
              {/* Big Number */}

              <h3
                className="
                  text-6xl
                  font-extrabold
                  leading-none
                  tracking-tight

                  text-transparent
                  [-webkit-text-stroke:2px_#6D7BF8]

                  opacity-90
                "
              >
                {item.number}
              </h3>

              {/* Title */}

              <h4 className="mt-5 text-2xl font-bold leading-tight text-[#171717]">
                {item.title}
              </h4>

              {/* Description */}

              <p className="mt-4 text-base leading-7 text-[#6A7282]">
                {item.description}
              </p>

              {/* Features */}

              <ul className="mt-8 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[15px] font-medium text-[#6A7282]  "
                  >
                    <Check
                      size={20}
                      className="shrink-0 p-1 text-white bg-primary-1 rounded-full"
                      strokeWidth={2.5}
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-1

                  scale-x-0
                bg-linear-to-r
                  from-primary-1
                  to-primary-2

                  transition-transform
                  duration-300

                  group-hover:scale-x-100
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
