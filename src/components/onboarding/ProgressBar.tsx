interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-muted-foreground">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-foreground">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-1.5 bg-progress-track rounded-full overflow-hidden">
        <div
          className="h-full bg-progress-fill rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
