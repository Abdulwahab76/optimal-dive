import { TimelineStep, ProcessStep } from "./Timelinestep";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "ideate",
    title: "Ideate",
    description:
      "We analyze your vision thoroughly to ensure the roadmap aligns perfectly with your end goals.",
    icon: "/images/product-1.png",
  },
  {
    id: "design",
    title: "Design",
    description:
      "We craft MVPs that balance stunning design with core functionality.",
    icon: "/images/product-2.png",
  },
  {
    id: "develop",
    title: "Develop",
    description:
      "We build end-to-end solutions using agile processes and robust architecture.",
    icon: "/images/product-3.png",
  },
  {
    id: "test",
    title: "Test",
    description:
      "We ensure quality and reliability through extensive QA across every touchpoint.",
    icon: "/images/product-4.png",
  },
  {
    id: "launch",
    title: "Launch",
    description:
      "We execute smooth rollouts with tailored deployment plans and dedicated support.",
    icon: "/images/product-5.png",
  },
  {
    id: "support",
    title: "Support",
    description:
      "We provide ongoing enhancements to ensure your product continues to succeed.",
    icon: "/images/product-6.png",
  },
];

export function ProductProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#1C1C1C]">
      {/* Top Curve */}
      <div className="absolute top-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-28 w-full"
          style={{ transform: "scaleY(-1)" }}
        >
          <path
            fill="#fff"
            d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z"
          />
        </svg>
      </div>

      {/* Top Glow */}
      <div
        className="pointer-events-none absolute left-1/2 -top-[280px] -translate-x-1/2"
        style={{
          width: "2200px",
          height: "700px",
          background: `
            radial-gradient(
              ellipse at center,
              rgba(109,123,248,.55) 0%,
              rgba(81,87,247,.35) 28%,
              rgba(81,87,247,.18) 52%,
              rgba(81,87,247,.08) 68%,
              transparent 100%
            )
          `,
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-32">
        <h2 className="text-center text-3xl sm:text-5xl font-semibold leading-tight text-white">
          Our Product
          <br />
          Development Process
        </h2>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 md:mt-20 max-w-6xl">
          {/* Gray Line — desktop centered, mobile left-aligned to icon rail */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2">
            <div className="h-full w-px bg-[#505050]" />
          </div>

          {/* Purple accent line */}
          <div
            className="absolute top-0 left-7 md:left-1/2 md:-translate-x-1/2 w-px h-24 rounded-full"
            style={{
              background: "linear-gradient(180deg, #1A1A1A 0%, #5157F7 100%)",
            }}
          />

          {/* Steps */}
          <div className="md:space-y-16">
            {PROCESS_STEPS.map((step, index) => (
              <TimelineStep
                key={step.id}
                index={index}
                step={step}
                variant={index % 2 === 0 ? "textLeft" : "textRight"}
                isLast={index === PROCESS_STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-28 w-full"
        >
          <path
            fill="#fff"
            d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default ProductProcessSection;
