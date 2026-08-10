import ArrowCircle from "./ArrowCircle";

export default function AboutContent() {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-6">
      <div className="  w-full col-span-full lg:col-span-5">
        <h2 className="text-3xl lg:text-6xl font-bold">Who We Are</h2>

        <p className="mt-8 text-lg lg:text-4xl leading-tight text-white/50">
          <span className="text-white">
            Optimal Dive is a full-cycle product development company
          </span>{" "}
          built on one simple belief: great software should solve real problems
          and drive lasting business growth. We combine creative thinking with
          deep technical expertise to turn ambitious ideas into products that
          generate a profitable, sustainable impact.
        </p>
      </div>

      <div className="flex items-center justify-center lg:justify-end col-span-full  lg:col-span-1">
        <ArrowCircle />
      </div>
    </div>
  );
}
