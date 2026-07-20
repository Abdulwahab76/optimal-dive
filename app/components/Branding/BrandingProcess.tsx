import Stats from "../Home/Stats";
import { ProcessStep, TimelineStep } from "../Home/Timelinestep";
import BrandingStats from "./BrandingStats";

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

export function BrandingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4FF]">
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

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-32">
        <h2 className="text-center text-3xl sm:text-6xl font-semibold leading-tight text-black">
          Our Branding Process
        </h2>
        <p className="text-[#4A5565] text-center text-lg">
          A proven methodology to bring your brand to life.
        </p>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 md:mt-20 max-w-6xl">
          <div className="absolute left-7 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2">
            {/* Glow */}
            <div
              className="absolute -top-10 left-1/2 h-28 w-3 -translate-x-1/2 rounded-full blur-xl"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(109,123,248,.9), rgba(81,87,247,.15), transparent)",
              }}
            />

            {/* Line */}
            <div
              className="h-full w-px"
              style={{
                background:
                  "linear-gradient(to bottom, #6D7BF8 0%, #5157F7 12%, #4A4A68 25%, #505050 55%, #505050 100%)",
              }}
            />
          </div>

          {/* Steps */}
          <div className="md:space-y-16">
            {PROCESS_STEPS.map((step, index) => (
              <TimelineStep
                key={step.id}
                index={index}
                step={step}
                variant={index % 2 === 0 ? "textLeft" : "textRight"}
                isLast={index === PROCESS_STEPS.length - 1}
                isDarkText={true}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <BrandingStats />
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

export default BrandingProcess;
