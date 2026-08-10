import { TimelineStep } from "../Home/Timelinestep";
import type { BrandingPage } from "@/payload-types";
import { mediaUrl } from "@/lib/media";

const defaultSteps = [
  { bpTitle: "Ideate", bpIcon: null, bpDescription: "We analyze your vision thoroughly to ensure the roadmap aligns perfectly with your end goals." },
  { bpTitle: "Design", bpIcon: null, bpDescription: "We craft MVPs that balance stunning design with core functionality." },
  { bpTitle: "Develop", bpIcon: null, bpDescription: "We build end-to-end solutions using agile processes and robust architecture." },
  { bpTitle: "Test", bpIcon: null, bpDescription: "We ensure quality and reliability through extensive QA across every touchpoint." },
  { bpTitle: "Launch", bpIcon: null, bpDescription: "We execute smooth rollouts with tailored deployment plans and dedicated support." },
  { bpTitle: "Support", bpIcon: null, bpDescription: "We provide ongoing enhancements to ensure your product continues to succeed." },
];

const defaultIcons = [
  "/images/product-1.png", "/images/product-2.png", "/images/product-3.png",
  "/images/product-4.png", "/images/product-5.png", "/images/product-6.png",
];

export function BrandingProcess({
  brandProcess, brandStats,
}: {
  brandProcess?: BrandingPage["brandProcess"];
  brandStats?: BrandingPage["brandStats"];
}) {
  const steps = brandProcess?.processStepsList?.length ? brandProcess.processStepsList : defaultSteps;

  return (
    <section className="relative overflow-hidden bg-[#F4F4FF]">
      <div className="absolute top-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-28 w-full" style={{ transform: "scaleY(-1)" }}>
          <path fill="#fff" d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z" />
        </svg>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 pb-32">
        <h2 className="text-center text-3xl sm:text-6xl font-semibold leading-tight text-black">
          {brandProcess?.processHeading ?? "Our Branding Process"}
        </h2>
        <p className="text-[#4A5565] text-center text-lg">
          {brandProcess?.processSubheading ?? "A proven methodology to bring your brand to life."}
        </p>

        <div className="relative mx-auto mt-16 md:mt-20 max-w-6xl">
          <div className="absolute left-7 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2">
            <div
              className="absolute -top-10 left-1/2 h-28 w-3 -translate-x-1/2 rounded-full blur-xl"
              style={{ background: "linear-gradient(to bottom, rgba(109,123,248,.9), rgba(81,87,247,.15), transparent)" }}
            />
            <div
              className="h-full w-px"
              style={{ background: "linear-gradient(to bottom, #6D7BF8 0%, #5157F7 12%, #4A4A68 25%, #505050 55%, #505050 100%)" }}
            />
          </div>

          <div className="md:space-y-16">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.bpTitle + index}
                index={index}
                step={{
                  id: step.bpTitle,
                  title: step.bpTitle,
                  description: step.bpDescription,
                  icon: mediaUrl(step.bpIcon, defaultIcons[index] ?? defaultIcons[0]),
                }}
                variant={index % 2 === 0 ? "textLeft" : "textRight"}
                isLast={index === steps.length - 1}
                isDarkText={true}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <BrandingStats brandStats={brandStats} />
      </div>

      <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-28 w-full">
          <path fill="#fff" d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z" />
        </svg>
      </div>
    </section>
  );
}

function BrandingStats({ brandStats }: { brandStats?: BrandingPage["brandStats"] }) {
  const defaultStats = [
    { bStatValue: "94%", bStatLabel: "First impressions are design-related" },
    { bStatValue: "89%", bStatLabel: "Shoppers stay loyal to brands that share their values" },
    { bStatValue: "77%", bStatLabel: "Consumers buy based on brand name rather than product name" },
    { bStatValue: "60%", bStatLabel: "Increase in revenue from consistent brand presentation" },
  ];
  const stats = brandStats?.statsItems?.length ? brandStats.statsItems : defaultStats;

  return (
    <section className="relative overflow-hidden bg-[#03030B] text-white">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "1800px",
          height: "500px",
          background: `radial-gradient(ellipse at center, rgba(109,123,248,.45) 0%, rgba(81,87,247,.25) 35%, rgba(81,87,247,.08) 65%, transparent 100%)`,
          filter: "blur(100px)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-36">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-semibold md:text-6xl">
            {brandStats?.statsHeading ?? "The Power of a Strong Brand"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-white">
            {brandStats?.statsDescription ?? "Branding isn't just about aesthetics; it's a measurable driver of business growth."}
          </p>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-y-14 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.bStatValue + index}
              className={`text-center transition-all ${index === 1 ? "md:mt-12" : ""} ${index === 2 ? "md:mt-20" : ""} ${index === 3 ? "md:mt-8" : ""}`}
            >
              <h3 className="text-5xl font-bold leading-none md:text-6xl">{item.bStatValue}</h3>
              <p className="mx-auto mt-1 max-w-[180px] text-sm lg:text-base leading-5 text-[#D1D5DC]">{item.bStatLabel}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-24 w-full md:h-32">
          <path fill="#fff" d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z" />
        </svg>
      </div>
    </section>
  );
}

export default BrandingProcess;