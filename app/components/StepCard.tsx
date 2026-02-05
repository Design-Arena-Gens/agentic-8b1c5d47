import type { ReactNode } from "react";

export type Step = {
  title: string;
  description: string;
  command?: string;
  extra?: ReactNode;
};

const StepCard = ({ step, index }: { step: Step; index: number }) => (
  <div className="step-item">
    <strong>
      Step {index + 1}: {step.title}
    </strong>
    <p>{step.description}</p>
    {step.command ? <pre className="code-block">{step.command}</pre> : null}
    {step.extra}
  </div>
);

export default StepCard;
