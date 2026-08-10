import Image from "next/image";

export default function BrandingShowcase() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Top */}

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="shrink-0">
            <Image
              src="/images/br-3.png"
              alt=""
              width={190}
              height={190}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl font-semibold  ">
              More Than Just a Logo
            </h2>
            <hr className="w-20 border-0 h-1 my-4 bg-primary-1 rounded-full" />
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4A5565] lg:text-base">
              Branding is the strategic process of creating a unique identity
              for your business. It encompasses everything from your visual
              identity and tone of voice to your values and customer experience.
              At Optimal Dev, we believe great branding tells a story that
              connects, converts, and creates loyalty.
            </p>
          </div>
        </div>

        {/* Bottom Images */}

        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/br-2.png"
              alt=""
              width={700}
              height={450}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/br-1.png"
              alt=""
              width={700}
              height={450}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
