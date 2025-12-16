import { ReactNode } from "react";

interface StepContainerProps {
  title: string;
  subtitle?: string;
  microcopy?: string;
  children: ReactNode;
}

export function StepContainer({ title, subtitle, microcopy, children }: StepContainerProps) {
  return (
    <div className="animate-slide-up">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base text-muted-foreground max-w-md mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="space-y-4">
        {children}
      </div>
      
      {microcopy && (
        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          {microcopy}
        </p>
      )}
    </div>
  );
}
