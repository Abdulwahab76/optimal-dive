import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import {
  Phone,
  Send,
  MapPin,
  Video,
  PhoneCall,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Optimal Dive",
  description:
    "Get in touch with Optimal Dive. Discuss your technology needs and discover innovative digital solutions to grow your business.",
  keywords: [
    "technology solutions",
    "software development",
    "digital solutions",
    "tech agency",
    "contact Optimal Dive",
  ],
  openGraph: {
    title: "Contact Us | Optimal Dive",
    description:
      "Connect with Optimal Dive for innovative technology solutions and digital services.",
    url: "/contact-us",
    siteName: "Optimal Dive",
    type: "website",
  },
};
export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    description:
      "Contact our healthcare marketing team for consultation and growth strategies.",
    url: "/contact-us",
  };

  const contactCards = [
    {
      title: "Call Any Time",
      value: "+1 (307) 291-4467",
      icon: Phone,
    },
    {
      title: "Say Hello",
      value: "info@optimaldive.com",
      icon: Send,
    },
    {
      title: "Address",
      value: "New York, United States",
      icon: MapPin,
    },
  ];

  const processSteps = [
    {
      title: "Discovery Meeting",
      description:
        "We schedule a video call to learn about your practice, understand your goals, and identify the challenges that are holding your growth back.",
      icon: Video,
    },
    {
      title: "Strategy Presentation",
      description:
        "If we are the right fit, we build a custom marketing plan for your practice and walk you through it on a follow up call.",
      icon: PhoneCall,
    },
    {
      title: "Launch and Grow",
      description:
        "Once the plan is approved, execution begins. Your dedicated team gets to work and you start seeing real, measurable growth.",
      icon: TrendingUp,
    },
  ];

  return (
    <main className="flex-1 bg-slate-50">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative mt-6 overflow-hidden bg-[#1D1D1D] text-white lg:mt-0">
        {/* Glow */}
        <div
          className="absolute top-[70%] h-40 w-full pointer-events-none"
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

        <div
          className="
      relative
      z-10
      mx-auto
      max-w-7xl
      px-5
      py-24
      text-center
      md:py-32
    "
        >
          <p className="text-lg font-semibold text-[#8B7CFF]">Contact Us</p>

          <h1
            className="
        mx-auto
        mt-4
        max-w-4xl
        text-4xl
        font-bold
        leading-tight
        md:text-6xl
      "
          >
            Let's Build Something
            <span className="block bg-gradient-to-r from-[#8B7CFF] to-[#3EAEC2] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p
            className="
        mx-auto
        mt-6
        max-w-2xl
        text-base
        leading-7
        text-gray-300
        md:text-lg
      "
          >
            Have a project in mind? Tell us about your goals and our team will
            help turn your ideas into powerful digital solutions.
          </p>
        </div>
      </section>
      <section className="     bg-white py-20">
        <div
          className="
      mx-auto
      grid
      max-w-7xl
      gap-8
      px-5
      md:grid-cols-2
      md:px-6
    "
        >
          {/* Left Image */}
          <div
            className="
        relative
        min-h-[450px]
        overflow-hidden
        rounded-3xl
        bg-gray-50
      "
          >
            <Image
              src="/images/last.webp"
              alt="Contact us"
              fill
              className="object-cover opacity-70"
            />

            {/* Overlay */}
            <div
              className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/30
          to-transparent
        "
            />

            <div
              className="
          absolute
          bottom-8
          left-8
          right-8
        "
            >
              <p className="text-primary-1 font-semibold">
                Contact Optimal Dive
              </p>

              <h2
                className="
            mt-3
            text-3xl
            font-bold
            text-white
            md:text-5xl
          "
              >
                Let's build your next
                <span className="block bg-gradient-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent">
                  digital solution
                </span>
              </h2>

              <p className="mt-4 max-w-md text-gray-300">
                Share your idea with our team and let's create something
                powerful together.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>
      <section className="bg-white py-16">
        <div
          className="
          mx-auto
          grid
          max-w-7xl
          gap-5
          px-5
        
          sm:grid-cols-2
          lg:grid-cols-3
        "
        >
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                flex
                items-center
                gap-5
                
                rounded-2xl
                border
                border-white/10
                   bg-[#F8FAFF]
                p-5
                transition-all
                duration-300
                hover:border-primary-1/50
                hover:shadow-[0_10px_40px_rgba(109,123,248,0.15)]
              "
              >
                <div
                  className="
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-primary-1
                  to-primary-2
                "
                >
                  <Icon size={28} strokeWidth={2} className="text-white" />
                </div>

                <div>
                  <p
                    className="
                    text-sm
                    font-semibold
                    text-primary-1
                  "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                    mt-1
                    text-sm
                    font-bold
                    text-black
                    md:text-base
                  "
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-semibold text-primary-1">Our Process</p>

            <h2
              className="
            mt-3
            text-3xl
            font-bold
            text-[#181818]
            md:text-5xl
            
          "
            >
              How We Work Together
            </h2>
          </div>

          <div
            className="
          grid
          gap-6
           gap-y-12
          mt-4
          md:grid-cols-3
        "
          >
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="
                  relative
                  rounded-3xl
                  border
                  border-gray-100
                  bg-[#F8FAFF]
                  px-6
                  pb-8
                  pt-14
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
                >
                  {/* Icon */}
                  <div
                    className="
                    absolute
                    -top-8
                    left-1/2
                    flex
                    h-16
                    w-16
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-primary-1
                    to-primary-2
                    shadow-lg
                  "
                  >
                    <Icon size={30} className="text-white" strokeWidth={2} />
                  </div>

                  <h3
                    className="
                    text-2xl
                    font-semibold
                    text-[#181818]
                  "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-sm
                    leading-6
                    text-gray-600
                  "
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
