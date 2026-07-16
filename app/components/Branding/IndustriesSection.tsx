import {
  Car,
  Landmark,
  Building2,
  Utensils,
  GraduationCap,
  HeartPulse,
} from "lucide-react";

const industries = [
  {
    title: "Automotive",
    icon: Car,
    description:
      "Enhance vehicle management, driver experience, and connected mobility with secure software solutions.",
  },
  {
    title: "Finance",
    icon: Landmark,
    active: true,
    description:
      "Build reliable digital banking, fintech platforms, and payment systems with security at their core.",
  },
  {
    title: "Real Estate",
    icon: Building2,
    description:
      "CRM, property management, online portals, and modern real-estate solutions.",
  },
  {
    title: "Food",
    icon: Utensils,
    description:
      "Restaurant systems, online ordering, inventory management, and delivery platforms.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "E-learning platforms, LMS solutions, student portals, and digital education experiences.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    description:
      "Healthcare applications, EMR systems, appointment booking, and patient management.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-[#1F1F1F]">
      {/* Top Curve */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-20 w-full md:h-28"
        >
          <path
            fill="#ffffff"
            d="M0,0 L1440,0 L1440,38 C1080,105 360,105 0,38 Z"
          />
        </svg>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-20 w-full md:h-28"
        >
          <path
            fill="#ffffff"
            d="M0,100 C360,35 1080,35 1440,100 L1440,140 L0,140 Z"
          />
        </svg>
      </div>

      {/* Purple Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            h-[420px] w-[900px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(92,79,255,.32) 0%, rgba(92,79,255,.15) 45%, transparent 80%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-36">
        {/* Heading */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-start">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Industries We Serve
          </h2>

          <p className="max-w-md text-sm leading-7 text-white/70">
            We provide tailored solutions that address the unique demands across
            various industries, delivering transformative experiences to drive
            significant impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title}>
                <div
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    item.active
                      ? "bg-gradient-to-b from-[#6D7BF8] to-[#5157F7]"
                      : "bg-white/5"
                  }`}
                >
                  <Icon size={20} className="text-white" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
