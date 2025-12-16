import { StepContainer } from "../StepContainer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Check, Sparkles, Loader2 } from "lucide-react";
import { OnboardingData } from "@/types/onboarding";

interface ConfirmationScreenProps {
  data: OnboardingData;
  onGenerate: (topic: string) => void;
}

export function ConfirmationScreen({ data, onGenerate }: ConfirmationScreenProps) {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPost, setGeneratedPost] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    
    // Simulate generation (in real app, this would call an API)
    setTimeout(() => {
      setGeneratedPost(`Here's a thoughtful take on ${topic}:\n\nI've been thinking about this a lot lately...\n\nThe truth is, most people overcomplicate it.\n\nHere's what actually works:\n\n→ Start with the end in mind\n→ Focus on one thing at a time\n→ Measure what matters\n\nThe best part? You can start today.\n\nWhat's your experience with ${topic}?`);
      setIsGenerating(false);
    }, 2000);
  };

  const getSummaryItems = () => {
    const items = [];
    if (data.tone.length > 0) {
      items.push(`Tone: ${data.tone.join(", ")}`);
    }
    if (data.audience.primary.length > 0) {
      items.push(`Audience: ${data.audience.primary.join(", ")}`);
    }
    if (data.style.length) {
      items.push(`Length: ${data.style.length}`);
    }
    return items;
  };

  if (generatedPost) {
    return (
      <div className="animate-slide-up">
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <Check className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Here's your post
          </h1>
        </div>

        <div className="bg-card rounded-lg p-5 border border-border mb-6">
          <pre className="whitespace-pre-wrap text-foreground font-sans text-base leading-relaxed">
            {generatedPost}
          </pre>
        </div>

        <div className="bg-accent/50 rounded-lg p-5 border border-border">
          <p className="text-sm font-medium text-foreground mb-3">
            Does this sound like you?
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={feedback === "perfect" ? "default" : "outline"}
              size="sm"
              onClick={() => setFeedback("perfect")}
            >
              Yes, this is perfect
            </Button>
            <Button
              variant={feedback === "bold" ? "default" : "outline"}
              size="sm"
              onClick={() => setFeedback("bold")}
            >
              Make it more bold
            </Button>
            <Button
              variant={feedback === "calm" ? "default" : "outline"}
              size="sm"
              onClick={() => setFeedback("calm")}
            >
              Make it more calm
            </Button>
            <Button
              variant={feedback === "conversational" ? "default" : "outline"}
              size="sm"
              onClick={() => setFeedback("conversational")}
            >
              More conversational
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => {
              setGeneratedPost("");
              setTopic("");
              setFeedback(null);
            }}
          >
            Generate another post
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
          All set. Let's write your first post.
        </h1>
        <p className="text-base text-muted-foreground">
          Just tell me the topic — I'll handle the rest.
        </p>
      </div>

      {getSummaryItems().length > 0 && (
        <div className="bg-secondary/50 rounded-lg p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-2">Your preferences:</p>
          <div className="flex flex-wrap gap-2">
            {getSummaryItems().map((item, i) => (
              <span key={i} className="text-xs bg-card px-2 py-1 rounded border border-border text-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <Textarea
          placeholder="Generate a LinkedIn post about..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="min-h-[100px] bg-card resize-none"
        />
        
        <Button
          onClick={handleGenerate}
          disabled={!topic.trim() || isGenerating}
          className="w-full h-12 text-base font-medium"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate post
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
