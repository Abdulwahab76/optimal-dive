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

export default function Stats() {
  return (
    <div className="mt-24 grid grid-cols-2 gap-12 text-center lg:grid-cols-4">
      {stats.map((item, index) => (
        <div
          key={item.value}
          className={`
          ${index === 1 || index === 2 ? "lg:mt-8" : ""}
        `}
        >
          <h3 className="text-3xl lg:text-6xl font-bold">{item.value}</h3>

          <p className="mt-3 text-sm tracking-wider">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
