import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { PostingGoalsScreen } from "./screens/PostingGoalsScreen";
import { AudienceScreen } from "./screens/AudienceScreen";
import { ToneScreen } from "./screens/ToneScreen";
import { StyleScreen } from "./screens/StyleScreen";
import { AvoidancesScreen } from "./screens/AvoidancesScreen";
import { ExampleScreen } from "./screens/ExampleScreen";
import { ConfirmationScreen } from "./screens/ConfirmationScreen";
import { OnboardingData, defaultOnboardingData } from "@/types/onboarding";

const TOTAL_STEPS = 8;

export function OnboardingWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(defaultOnboardingData);

  const nextStep = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const canProceed = () => {
    switch (step) {
      case 1:
        return data.postingGoals.length > 0;
      case 2:
        return data.audience.primary.length > 0;
      case 3:
        return data.tone.length > 0;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <WelcomeScreen onStart={nextStep} />;
      case 1:
        return (
          <PostingGoalsScreen
            selected={data.postingGoals}
            onChange={(goals) => setData({ ...data, postingGoals: goals })}
          />
        );
      case 2:
        return (
          <AudienceScreen
            data={data.audience}
            onChange={(audience) => setData({ ...data, audience })}
          />
        );
      case 3:
        return (
          <ToneScreen
            selected={data.tone}
            onChange={(tone) => setData({ ...data, tone })}
          />
        );
      case 4:
        return (
          <StyleScreen
            data={data.style}
            onChange={(style) => setData({ ...data, style })}
          />
        );
      case 5:
        return (
          <AvoidancesScreen
            selected={data.avoidances}
            onChange={(avoidances) => setData({ ...data, avoidances })}
          />
        );
      case 6:
        return (
          <ExampleScreen
            value={data.examplePosts}
            onChange={(examplePosts) => setData({ ...data, examplePosts })}
            onSkip={nextStep}
          />
        );
      case 7:
        return (
          <ConfirmationScreen
            data={data}
            onGenerate={(topic) => console.log("Generate:", topic)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with progress */}
      {step > 0 && step < TOTAL_STEPS - 1 && (
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-xl mx-auto px-4 py-4">
            <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS - 1} />
          </div>
        </header>
      )}

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl">
          {renderStep()}
        </div>
      </main>

      {/* Navigation footer */}
      {step > 0 && step < TOTAL_STEPS - 1 && (
        <footer className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t border-border">
          <div className="max-w-xl mx-auto px-4 py-4 flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={prevStep}
              className="text-muted-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="min-w-[120px]"
            >
              {step === TOTAL_STEPS - 2 ? "Finish" : "Continue"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </footer>
      )}
    </div>
  );
}
