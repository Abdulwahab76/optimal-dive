"use client";

import { Check } from "lucide-react";
import type { AutomotivePage } from "@/payload-types";

const defaultSolutions = [
  {
    autoSolutionNumber: "01",
    autoSolutionTitle: "Autonomous Driving Systems",
    autoSolutionDescription:
      "Autonomous Driving Systems enhance safety and efficiency by enabling self-navigation using AI, sensors, and real-time data for precision.",
    autoSolutionFeatures: [
      { featureText: "Smart Navigation" },
      { featureText: "Adaptive Cruise Control" },
      { featureText: "Automatic Parking" },
      { featureText: "Night Vision Assistance" },
      { featureText: "Real-time Object Detection" },
      { featureText: "Traffic Signal Recognition" },
    ],
  },
  {
    autoSolutionNumber: "02",
    autoSolutionTitle: "Predictive Maintenance",
    autoSolutionDescription:
      "Predictive Maintenance uses AI to detect issues before breakdowns, ensuring smooth and safe vehicle operation.",
    autoSolutionFeatures: [
      { featureText: "AI-driven Diagnostics" },
      { featureText: "Automated Alerts" },
      { featureText: "Early Issue Detection" },
      { featureText: "Data-driven Maintenance" },
      { featureText: "Performance Monitoring" },
      { featureText: "Improved Vehicle Longevity" },
    ],
  },
  {
    autoSolutionNumber: "03",
    autoSolutionTitle: "AI-powered Safety Features",
    autoSolutionDescription:
      "AI-powered safety features improve autonomous driving by detecting hazards and preventing collisions using real-time sensor data.",
    autoSolutionFeatures: [
      { featureText: "Collision Prevention" },
      { featureText: "Emergency Braking" },
      { featureText: "Blind Spot Detection" },
      { featureText: "Weather Condition Alerts" },
      { featureText: "Cross Traffic Alerts" },
      { featureText: "Lane Keeping Assistance" },
    ],
  },
];

export default function SolutionsSection({
  autoSolutions,
}: {
  autoSolutions?: AutomotivePage["autoSolutions"];
}) {
  const items = autoSolutions?.autoSolutionsItems?.length
    ? autoSolutions.autoSolutionsItems
    : defaultSolutions;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#171717] md:text-5xl">
            {autoSolutions?.autoSolutionsTitle ?? "Software Solutions for"}
            <br />
            <span className="bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
              {autoSolutions?.autoSolutionsHighlight ?? "Automotive Industry"}
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={item.autoSolutionTitle + i}
              className="group relative overflow-hidden rounded-3xl border border-[#EEF1FF] bg-[#FCFDFF] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary-1/30 hover:shadow-2xl"
            >
              <h3 className="text-6xl font-extrabold leading-none tracking-tight text-transparent [-webkit-text-stroke:2px_#6D7BF8] opacity-90">
                {item.autoSolutionNumber}
              </h3>
              <h4 className="mt-5 text-2xl font-bold leading-tight text-[#171717]">
                {item.autoSolutionTitle}
              </h4>
              <p className="mt-4 text-base leading-7 text-[#6A7282]">
                {item.autoSolutionDescription}
              </p>
              <ul className="mt-8 space-y-3">
                {(item.autoSolutionFeatures ?? []).map((f, fi) => (
                  <li
                    key={f.featureText + fi}
                    className="flex items-center gap-3 text-[15px] font-medium text-[#6A7282]"
                  >
                    <Check
                      size={20}
                      className="shrink-0 p-1 text-white bg-primary-1 rounded-full"
                      strokeWidth={2.5}
                    />
                    <span>{f.featureText}</span>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 scale-x-0 bg-linear-to-r from-primary-1 to-primary-2 transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
