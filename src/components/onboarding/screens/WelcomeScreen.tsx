import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
  onSkip?: () => void;
}

export function WelcomeScreen({ onStart, onSkip }: WelcomeScreenProps) {
  return (
    <div className="animate-fade-in text-center">
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Let's set up your LinkedIn<br />writing assistant.
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Answer a few questions once. After this, just tell me what to write.
        </p>
      </div>
      
      <div className="space-y-3">
        <Button 
          onClick={onStart}
          size="lg"
          className="w-full max-w-xs text-base font-medium h-12"
        >
          Start setup
        </Button>
        
        {onSkip && (
          <button
            onClick={onSkip}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip for now
          </button>
        )}
      </div>
    </div>
  );
}
