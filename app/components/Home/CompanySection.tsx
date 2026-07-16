import Image from "next/image";

const firstRow = ["sony", "amazon", "deloitte", "walmart", "starbucks"];

const secondRow = ["allianz", "unitedhealthcare", "shell", "visa", "att"];

export default function ClientsSection() {
  return (
    <section className="bg-white py-20">
      <div className="w-full px-5">
        <h3 className="mb-10 text-center text-xl font-medium text-primary-1">
          Clients We've Served
        </h3>

        {/* First Row */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {firstRow.map((logo) => (
            <ClientCard key={logo} logo={logo} />
          ))}
        </div>

        {/* Second Row */}
        <div className="mt-5 flex flex-wrap justify-center lg:ml-36 lg:justify-end gap-6">
          {secondRow.map((logo) => (
            <ClientCard key={logo} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCard({ logo }: { logo: string }) {
  return (
    <div
      className="h-50 w-62 rounded-2xl bg-white border border-[#ECECEC] "
      style={{
        boxShadow: `
          inset 0 0 10px rgba(0,0,0,0.035),
          0 8px 24px rgba(0,0,0,0.025)
        `,
      }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-2xl">
        <Image
          src={`/images/${logo}.png`}
          alt={logo}
          width={120}
          height={40}
          className="w-30 h-auto object-contain opacity-60"
        />
      </div>
    </div>
  );
}
