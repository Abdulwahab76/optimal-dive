"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VisionCta({ visionCTA }: any) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = visionCTA.buttonLink;

    if (link.includes("#")) {
      e.preventDefault();
      const hash = link.split("#")[1];
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${hash}`);
      } else {
        router.push(link);
      }
    }
  };

  return (
    <section className="px-0 py-0 sm:px-8 sm:py-16">
      <div className="relative mx-auto h-auto w-full sm:h-[300px] sm:max-w-7xl md:h-[360px]">
        {/* Shape - sirf desktop par (sm aur upar) */}
        <svg
          className="absolute inset-0 hidden h-full w-full sm:block"
          viewBox="0 0 1376 413"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="688"
              y1="0"
              x2="688"
              y2="413"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-primary-1)" />
              <stop offset="1" stopColor="var(--color-primary-2)" />
            </linearGradient>
          </defs>

          <path
            d="
              M0 44.6025
              C0 44.6025 423.034 -0.367265 695.241 0.00226499
              C961.808 0.364138 1376 44.6025 1376 44.6025
              V369.035
              C1376 369.035 964.308 413 695.241 413
              C426.174 413 0 369.035 0 369.035
              V44.6025Z
            "
            fill="url(#paint0_linear)"
          />
        </svg>

        {/* Mobile-only full-width gradient box (edges tak) */}
        <div className="absolute inset-0 block bg-gradient-to-b from-[var(--color-primary-1)] to-[var(--color-primary-2)] sm:hidden" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 py-20 sm:py-20">
          <h2 className="max-w-[500px] text-center text-4xl font-semibold leading-tight text-white md:text-5xl">
            {visionCTA.heading}
          </h2>

          <a
            href={visionCTA.buttonLink}
            onClick={handleClick}
            className="mt-7 flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-normal text-white"
          >
            {visionCTA.buttonLabel}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}