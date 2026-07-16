import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl lg:px-0 px-4">
        <h2 className="mb-14 text-center text-5xl font-bold">
          Services We Provide
        </h2>

        <div className="relative w-11/12 mx-auto">
          <ServiceCard
            dark
            title="Branding"
            image="/images/verified-img.png"
            description="We craft iconic brand identities that combine visual design, strategic messaging, and precise positioning. Build trust, convey your value, and become unforgettable."
          />

          <div className="-mt-14">
            <ServiceCard
              title="Websites Development"
              image="/images/setting-img.png"
              description="Custom, high-performance websites built for speed, scale, and user experience. From sleek landing pages to complex platforms—we engineer digital presence that converts."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
