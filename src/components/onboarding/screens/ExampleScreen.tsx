import { StepContainer } from "../StepContainer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ExampleScreenProps {
  value: string;
  onChange: (value: string) => void;
  onSkip: () => void;
}

export function ExampleScreen({ value, onChange, onSkip }: ExampleScreenProps) {
  return (
    <StepContainer
      title="Show me an example"
      subtitle="Paste 1–2 LinkedIn posts you like. Your own post or someone else's — this helps me match your voice."
    >
      <Textarea
        placeholder="Paste a LinkedIn post here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[200px] bg-card resize-none"
      />
      
      <div className="flex justify-center pt-2">
        <Button
          variant="ghost"
          onClick={onSkip}
          className="text-muted-foreground hover:text-foreground"
        >
          Skip this step
        </Button>
      </div>
    </StepContainer>
  );
}
