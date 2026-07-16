import type { LucideIcon } from "lucide-react";
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
}

function IconBubble({ icon: Icon }: Pick<ProcessStep, "icon">) {
  return (
    <div className="relative  ">
      <Image src={Icon} width={100} height={100} alt="icons" />
    </div>
  );
}

function StepText({
  title,
  description,
  align,
  index,
}: {
  title: string;
  description: string;
  align: "left" | "right";
  index: number;
}) {
  return (
    <div
      className={
        align === "right"
          ? "flex max-w-md flex-col items-end text-right"
          : "flex max-w-md flex-col items-start text-left"
      }
    >
      <p className="text-primary-1">0{index + 1}</p>
      <h3 className="text-2xl  font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-lg text-white leading-relaxed  ">
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
}: TimelineStepProps) {
  const isTextLeft = variant === "textLeft";

  return (
    <div
      className={`grid grid-cols-[1fr_80px_1fr] items-center ${
        isLast ? "" : "pb-10"
      }`}
    >
      {/* Left */}
      <div className="flex justify-end pr-10">
        {isTextLeft ? (
          <StepText
            title={step.title}
            description={step.description}
            align="right"
            index={index}
          />
        ) : (
          <IconBubble icon={step.icon} />
        )}
      </div>

      {/* Center (timeline space) */}
      <div className="flex justify-center">
        {/* Empty - line is rendered outside */}
      </div>

      {/* Right */}
      <div className="flex justify-start pl-10">
        {isTextLeft ? (
          <IconBubble icon={step.icon} />
        ) : (
          <StepText
            title={step.title}
            description={step.description}
            align="left"
            index={index}
          />
        )}
      </div>
    </div>
  );
}
