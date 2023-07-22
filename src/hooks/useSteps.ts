import React from "react";

interface useFormStepProps {
  totalSteps: number;
}

export const useSteps = ({ totalSteps }: useFormStepProps) => {
  const [step, setStep] = React.useState<number>(0);

  const nextStep = (condition?: boolean): void => {
    if (condition !== undefined) {
      if (step < totalSteps && condition) setStep(step + 1);
    }

    if (condition === undefined) {
      if (step < totalSteps) setStep(step + 1);
    }
  };
  const prevStep = (condition?: boolean): void => {
    if (condition !== undefined) {
      if (step > 0 && condition) setStep(step - 1);
    }

    if (condition === undefined) {
      if (step > 0) setStep(step - 1);
    }
  };

  return { currentStep: step, nextStep, prevStep };
};

export type UseStepsReturn = ReturnType<typeof useSteps>