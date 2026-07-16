import { ArrowRight } from "lucide-react";

export default function VisionCta() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div
        className="
            relative
            mx-auto
            flex
            min-h-[220px]
            max-w-5xl
            items-center
            justify-center
            overflow-hidden
              bg-gradient-to-r
      from-primary-1
      to-primary-2
            px-6
            text-center
            text-white
            sm:min-h-[260px]
          "
        style={{
          borderRadius: "50% / 18%",
        }}
      >
        <div className="relative z-10">
          <h2
            className="
                mx-auto
                max-w-[500px]
                text-3xl
                font-semibold
                leading-tight
                sm:text-4xl
                md:text-5xl
              "
          >
            Let's bring your
            <br />
            Vision to life
          </h2>
          <div className=" flex items-center gap-3 justify-center">
            <button
              className="
                mt-8
                rounded-full
                bg-black
                px-7
               mx-auto flex items-center gap-3
                py-3
                text-sm
                font-medium
                justify-center
                text-white
                transition
                hover:bg-gray-900
              "
            >
              Start Your Project
              <ArrowRight size={10} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
