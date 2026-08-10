import Image from "next/image";

interface Props {
  title: string;
  category: string;
  image: string;
  large?: boolean;
}

export default function ProjectCard({ title, category, image, large }: Props) {
  return (
    <article>
      <div
        className={`relative overflow-hidden rounded-[28px]
        ${large ? "h-140" : "h-140"}`}
      >
        <Image
          src={image}
          fill
          alt={title}
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-5 px-4">
        <p className="text-sm font-medium text-primary-1">{category}</p>

        <h3 className="text-4xl leading-none font-medium text-[#4A5565]">
          {title}
        </h3>
      </div>
    </article>
  );
}
