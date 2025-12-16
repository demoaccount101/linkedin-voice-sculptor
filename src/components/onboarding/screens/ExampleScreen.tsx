import { StepContainer } from "../StepContainer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

interface ExampleScreenProps {
  value: string[];
  onChange: (value: string[]) => void;
  onSkip: () => void;
}

export function ExampleScreen({ value, onChange, onSkip }: ExampleScreenProps) {
  // Ensure at least one empty slot
  const posts = value.length > 0 ? value : [''];

  const updatePost = (index: number, newValue: string) => {
    const updated = [...posts];
    updated[index] = newValue;
    onChange(updated);
  };

  const addPost = () => {
    if (posts.length < 4) {
      onChange([...posts, '']);
    }
  };

  const removePost = (index: number) => {
    if (posts.length > 1) {
      const updated = posts.filter((_, i) => i !== index);
      onChange(updated);
    }
  };

  return (
    <StepContainer
      title="Show me an example"
      subtitle="Paste 1–4 LinkedIn posts you like. Your own post or someone else's — this helps me match your voice."
    >
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="relative">
            <Textarea
              placeholder={`Paste LinkedIn post ${index + 1} here...`}
              value={post}
              onChange={(e) => updatePost(index, e.target.value)}
              className="min-h-[150px] bg-card resize-none pr-10"
            />
            {posts.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removePost(index)}
                className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}

        {posts.length < 4 && (
          <Button
            variant="outline"
            onClick={addPost}
            className="w-full border-dashed"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add another example
          </Button>
        )}
      </div>
      
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
