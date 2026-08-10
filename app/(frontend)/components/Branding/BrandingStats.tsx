const stats = [
  {
    value: "94%",
    label: "First impressions are design-related",
  },
  {
    value: "89%",
    label: "Shoppers stay loyal to brands that share their values",
  },
  {
    value: "77%",
    label: "Consumers buy based on brand name rather than product name",
  },
  {
    value: "60%",
    label: "Increase in revenue from consistent brand presentation",
  },
];

export default function BrandingStats() {
  return (
    <section className="relative overflow-hidden bg-[#03030B] text-white">
      {/* Background Glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "1800px",
          height: "500px",
          background: `
              radial-gradient(
                ellipse at center,
                rgba(109,123,248,.45) 0%,
                rgba(81,87,247,.25) 35%,
                rgba(81,87,247,.08) 65%,
                transparent 100%
              )
            `,
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-36">
        {/* Heading */}

        <div className="mx-auto   text-center">
          <h2 className="text-3xl font-semibold md:text-6xl">
            The Power of a Strong Brand
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-white">
            Branding isn't just about aesthetics; it's a measurable driver of
            business growth.
          </p>
        </div>

        {/* Stats */}

        <div className="mt-24 grid grid-cols-2 gap-y-14 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.value}
              className={`
                  text-center
                  transition-all
  
                  ${index === 1 ? "md:mt-12" : ""}
                  ${index === 2 ? "md:mt-20" : ""}
                  ${index === 3 ? "md:mt-8" : ""}
                `}
            >
              <h3 className="text-5xl font-bold leading-none md:text-6xl">
                {item.value}
              </h3>

              <p className="mx-auto mt-1 max-w-[180px] text-sm lg:text-base leading-5 text-[#D1D5DC]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Curve */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-24 w-full md:h-32"
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
