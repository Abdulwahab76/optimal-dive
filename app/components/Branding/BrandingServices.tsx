import {
  BadgeCheck,
  Palette,
  MessageSquare,
  BookOpen,
  RefreshCw,
  LayoutGrid,
} from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description:
      "We define your brand's purpose, positioning, and personality to create a powerful foundation for all marketing efforts.",
    icon: BadgeCheck,
  },
  {
    title: "Visual Identity Design",
    description:
      "Logos, color palettes, typography, and comprehensive brand guidelines that ensure consistency everywhere.",
    icon: Palette,
  },
  {
    title: "Brand Messaging",
    description:
      "Crafting your voice, messaging, and tone guides that speak directly to the right audience.",
    icon: MessageSquare,
  },
  {
    title: "Brand Guidelines",
    description:
      "Detailed documentation that ensures your brand stays consistent across all platforms and touchpoints.",
    icon: BookOpen,
  },
  {
    title: "Rebranding",
    description:
      "Transform existing brands to stay relevant, modern, and aligned with evolving business goals.",
    icon: RefreshCw,
  },
  {
    title: "Brand Collateral",
    description:
      "Business cards, presentations, social media templates, and marketing materials that reflect your identity.",
    icon: LayoutGrid,
  },
];

export default function BrandingServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#181818] md:text-5xl">
            Our Branding Services
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6A7282] md:text-base">
            From strategic foundations to visual execution, we provide
            end-to-end branding solutions.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                    group
                    rounded-2xl
                    border
                    border-[#EEF1FF]
                    bg-[#FCFDFF]
                    p-6
                    transition-all
                    duration-300
  
                    hover:-translate-y-1
                    hover:border-primary-1/30
                    hover:shadow-xl
                  "
              >
                <div
                  className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F5F6FF]
                      text-primary-1
                      transition-colors
                      duration-300
  
                      group-hover:bg-primary-1
                      group-hover:text-white
                    "
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#181818]">
                  {service.title}
                </h3>

                <p className="mt-3 text-lg leading-7 text-[#6A7282]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
