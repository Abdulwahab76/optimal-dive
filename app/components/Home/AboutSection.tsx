import AboutContent from "./AboutContent";
import Stats from "./Stats";

export default function AboutSection() {
  return (
    <section className=" relative overflow-hidden bg-[#1D1D1D] text-white">
      <div
        className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-[1600px] h-125 pointer-events-none"
        style={{
          background: `
      radial-gradient(
        ellipse at center,
        rgba(110, 92, 255, 0.55) 0%,
        rgba(110, 92, 255, 0.35) 30%,
        rgba(110, 92, 255, 0.18) 55%,
        rgba(110, 92, 255, 0.08) 72%,
        transparent 100%
      )
    `,
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32  ">
        <AboutContent />
        <Stats />
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-28 w-full"
        >
          <path
            fill="#ffffff"
            d="M0,40 C360,120 1080,120 1440,40 L1440,140 L0,140 Z"
          />
        </svg>
      </div>
    </section>
  );
}
