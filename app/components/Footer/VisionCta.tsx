import { ArrowRight } from "lucide-react";

export default function VisionCta() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="relative mx-auto h-[300px] md:h-[360px] max-w-7xl">
        {/* Shape */}
        <svg
          className="absolute inset-0 h-full w-full"
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

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center py-20">
          <h2
            className="
        max-w-[500px]
        text-center
        text-3xl
        font-semibold
        leading-tight
        text-white
        md:text-5xl
      "
          >
            Let's bring your
            <br />
            Vision to life
          </h2>

          <button
            className="
        mt-7
        flex
        items-center
        gap-2
        rounded-full
        bg-black
        px-7
        py-3
        text-sm
        font-normal
        text-white
      "
          >
            Start Your Project
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
