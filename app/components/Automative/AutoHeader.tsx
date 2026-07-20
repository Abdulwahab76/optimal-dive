import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const stats = [
  {
    value: "500+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "50M+",
    label: "Revenue Generated",
  },
];
const AutoHeader = () => {
  return (
    <div>
      <section className="mt-6  lg:mt-0   relative overflow-hidden bg-[#1D1D1D] text-white">
        <div
          className="absolute     top-[70%]  w-full h-40 pointer-events-none"
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
        <div className="max-w-7xl mx-auto px-4 py-32 lg:py-40 lg:h-screen flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="p-2 px-4 mx-auto lg:mx-0 rounded-full border border-primary-1 w-fit flex items-center gap-2 mb-4">
              <Image
                src="/images/gemini.png"
                width={60}
                height={60}
                alt="gemini"
                className="h-auto w-auto "
              />
              <p className="font-medium text-sm uppercase">
                Brand Identity Design
              </p>
            </div>
            <h1 className="text-3xl lg:text-6xl font-bold mb-4 leading-[1.15] text-center lg:text-left">
              Automotive Software
              <br />
              <span className="text-primary-1">Development Services</span>
            </h1>
            <p className="text-lg max-w-lg text-center lg:text-left">
              We provide expert automotive software development services for
              vehicle automation, safety, connectivity, and performance
              optimization.
            </p>
            <Link
              href="/contact"
              className="lg:mx-0 mx-auto mt-6 sm:mt-10 flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-primary-1 to-primary-2 px-5 py-3 sm:px-6 text-white"
            >
              Start Your Project
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="relative top-20 lg:block hidden">
            <Image
              src="/images/mobile-screen.png"
              alt="verified"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* Bottom Curve */}
        <div className="absolute  bottom-0 left-0 w-full overflow-hidden leading-none">
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
      {/* Stats */}

      <div className=" grid grid-cols-2 gap-y-14 md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.value}
            className={`
                  text-center
                  transition-all
  
                  ${index === 1 ? "md:mt-12" : ""}
                  ${index === 2 ? "md:mt-12" : ""}
                  ${index === 3 ? "md:mt-0" : ""}
                `}
          >
            <h3 className="text-3xl font-semibold leading-none md:text-6xl">
              {item.value}
            </h3>

            <p className="mx-auto mt-1 max-w-[180px] text-sm lg:text-base leading-5 text-black">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoHeader;
