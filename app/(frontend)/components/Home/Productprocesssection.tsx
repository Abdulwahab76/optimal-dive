// app/(frontend)/components/Home/Productprocesssection.tsx
import { TimelineStep } from "./Timelinestep";
import type { HomePage } from "@/payload-types";
import { mediaUrl } from "@/lib/media";

const defaultSteps = [
  { stepTitle: "Ideate", stepIcon: null, stepDescription: "We analyze your vision thoroughly to ensure the roadmap aligns perfectly with your end goals." },
  { stepTitle: "Design", stepIcon: null, stepDescription: "We craft MVPs that balance stunning design with core functionality." },
  { stepTitle: "Develop", stepIcon: null, stepDescription: "We build end-to-end solutions using agile processes and robust architecture." },
  { stepTitle: "Test", stepIcon: null, stepDescription: "We ensure quality and reliability through extensive QA across every touchpoint." },
  { stepTitle: "Launch", stepIcon: null, stepDescription: "We execute smooth rollouts with tailored deployment plans and dedicated support." },
  { stepTitle: "Support", stepIcon: null, stepDescription: "We provide ongoing enhancements to ensure your product continues to succeed." },
];

const defaultIcons = [
  "/images/product-1.png", "/images/product-2.png", "/images/product-3.png",
  "/images/product-4.png", "/images/product-5.png", "/images/product-6.png",
];

export function ProductProcessSection({ process }: { process?: HomePage["process"] }) {
  const steps = process?.processSteps?.length ? process.processSteps : defaultSteps;

  return (
    <section className="relative overflow-hidden bg-[#1C1C1C]">
      <div className="absolute top-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-28 w-full" style={{ transform: "scaleY(-1)" }}>
          <path fill="#fff" d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z" />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute left-1/2 -top-[280px] -translate-x-1/2"
        style={{
          width: "2200px",
          height: "700px",
          background: `radial-gradient(ellipse at center, rgba(109,123,248,.55) 0%, rgba(81,87,247,.35) 28%, rgba(81,87,247,.18) 52%, rgba(81,87,247,.08) 68%, transparent 100%)`,
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-32">
        <h2 className="text-center text-3xl sm:text-5xl font-semibold leading-tight text-white">
          {process?.processHeading ?? "Our Product Development Process"}
        </h2>

        <div className="relative mx-auto mt-16 md:mt-20 max-w-6xl">
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2">
            <div className="h-full w-px bg-[#505050]" />
          </div>
          <div
            className="absolute top-0 left-7 md:left-1/2 md:-translate-x-1/2 w-px h-24 rounded-full"
            style={{ background: "linear-gradient(180deg, #1A1A1A 0%, #5157F7 100%)" }}
          />

          <div className="md:space-y-16">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.stepTitle + index}
                index={index}
                step={{
                  id: step.stepTitle,
                  title: step.stepTitle,
                  description: step.stepDescription,
                  icon: mediaUrl(step.stepIcon, defaultIcons[index] ?? defaultIcons[0]),
                }}
                variant={index % 2 === 0 ? "textLeft" : "textRight"}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-28 w-full">
          <path fill="#fff" d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z" />
        </svg>
      </div>
    </section>
  );
}

export default ProductProcessSection;