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
            bg-primary-1 
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

          <button
            className="
                mt-8
                rounded-full
                bg-black
                px-7
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-gray-900
              "
          >
            Start Your Project
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
