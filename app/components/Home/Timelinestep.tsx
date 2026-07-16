import type { LucideIcon } from "lucide-react";

export type StepVariant = "textLeft" | "textRight";

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
interface TimelineStepProps {
  step: ProcessStep;
  variant: StepVariant;
  isLast: boolean;
}

function IconBubble({ icon: Icon }: Pick<ProcessStep, "icon">) {
  return (
    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-lg shadow-indigo-950/50 ring-1 ring-white/10">
      <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
    </div>
  );
}

function StepText({
  title,
  description,
  align,
}: {
  title: string;
  description: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={
        align === "right"
          ? "flex max-w-[220px] flex-col items-end text-right"
          : "flex max-w-[220px] flex-col items-start text-left"
      }
    >
      <h3 className="text-[15px] font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-gray-400">
        {description}
      </p>
    </div>
  );
}

export function TimelineStep({ step, variant, isLast }: TimelineStepProps) {
  const isTextLeft = variant === "textLeft";

  return (
    <div
      className={`relative grid grid-cols-[1fr_2.5rem_1fr] items-center ${
        isLast ? "" : "pb-10"
      }`}
    >
      {/* left slot */}
      <div className="flex justify-end pr-6">
        {isTextLeft ? (
          <StepText
            title={step.title}
            description={step.description}
            align="right"
          />
        ) : (
          <IconBubble icon={step.icon} />
        )}
      </div>

      {/* center spine marker */}
      <div className="relative flex h-full items-center justify-center">
        <span className="z-10 h-2.5 w-2.5 rotate-45 rounded-[2px] bg-indigo-400 ring-4 ring-[#0b0c14]" />
      </div>

      {/* right slot */}
      <div className="flex justify-start pl-6">
        {isTextLeft ? (
          <IconBubble icon={step.icon} />
        ) : (
          <StepText
            title={step.title}
            description={step.description}
            align="left"
          />
        )}
      </div>
    </div>
  );
}
