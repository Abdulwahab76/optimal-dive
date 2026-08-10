import Image from "next/image";

export type StepVariant = "textLeft" | "textRight";

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface TimelineStepProps {
  step: ProcessStep;
  variant: StepVariant;
  isLast: boolean;
  index: number;
  isDarkText?: boolean;
}

function IconBubble({
  icon: Icon,
  size = 100,
  isDarkText = false,
}: Pick<ProcessStep, "icon"> & { size?: number; isDarkText?: boolean }) {
  return (
    <div className="relative">
      <Image src={Icon} width={size} height={size} alt="icons" />
    </div>
  );
}

function StepText({
  title,
  description,
  align,
  index,
  isDarkText = false,
}: {
  title: string;
  description: string;
  align: "left" | "right" | "start";
  index: number;
  isDarkText?: boolean;
}) {
  const alignClass =
    align === "right"
      ? "items-end text-right"
      : align === "left"
      ? "items-start text-left"
      : "items-start text-left";

  return (
    <div className={`flex max-w-md flex-col ${alignClass}`}>
      <p className="text-primary-1">0{index + 1}</p>
      <h3
        className={`text-4xl font-semibold ${
          isDarkText ? "text-black" : "text-white"
        } `}
      >
        {title}
      </h3>
      <p
        className={`mt-1.5 text-lg leading-relaxed  ${
          isDarkText ? "text-[#6A7282]" : "text-white"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export function TimelineStep({
  step,
  variant,
  isLast,
  index,
  isDarkText = false,
}: TimelineStepProps) {
  const isTextLeft = variant === "textLeft";

  return (
    <>
      {/* ── Desktop: unchanged alternating grid ── */}
      <div
        className={`hidden md:grid grid-cols-[1fr_80px_1fr] items-center ${
          isLast ? "" : "pb-10"
        }`}
      >
        <div className="flex justify-end pr-10">
          {isTextLeft ? (
            <StepText
              isDarkText={isDarkText}
              title={step.title}
              description={step.description}
              align="right"
              index={index}
            />
          ) : (
            <IconBubble icon={step.icon} />
          )}
        </div>

        <div className="flex justify-center" />

        <div className="flex justify-start pl-10">
          {isTextLeft ? (
            <IconBubble icon={step.icon} />
          ) : (
            <StepText
              title={step.title}
              description={step.description}
              align="left"
              index={index}
              isDarkText={isDarkText}
            />
          )}
        </div>
      </div>

      {/* ── Mobile: single-column, left-aligned rail ── */}
      <div className={`flex md:hidden gap-4 ${isLast ? "" : "pb-12"}`}>
        <div
          className={`relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ${
            isDarkText ? "bg-gray-100" : "bg-[#1C1C1C]"
          } ring-2 ring-primary-1/40`}
        >
          <IconBubble icon={step.icon} size={36} />
        </div>

        <StepText
          title={step.title}
          description={step.description}
          align="start"
          index={index}
          isDarkText={isDarkText}
        />
      </div>
    </>
  );
}
