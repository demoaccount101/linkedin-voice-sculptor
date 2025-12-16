import { StepContainer } from "../StepContainer";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const avoidanceOptions = [
  { id: "no-emojis", label: "No emojis" },
  { id: "no-hashtags", label: "No hashtags" },
  { id: "no-clickbait", label: "No clickbait hooks" },
  { id: "no-slang", label: "No slang" },
  { id: "no-guru", label: 'No "guru" language' },
  { id: "other", label: "Other" },
];

interface AvoidancesScreenProps {
  selected: string[];
  onChange: (avoidances: string[]) => void;
}

export function AvoidancesScreen({ selected, onChange }: AvoidancesScreenProps) {
  const [otherText, setOtherText] = useState("");

  const toggleAvoidance = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter(a => a !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <StepContainer
      title="What should I never do?"
      microcopy="This helps me avoid things you dislike."
    >
      <div className="bg-card rounded-lg p-5 border border-border space-y-4">
        {avoidanceOptions.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <Checkbox
              checked={selected.includes(option.id)}
              onCheckedChange={() => toggleAvoidance(option.id)}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <span className="text-base text-foreground group-hover:text-foreground/80 transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {selected.includes("other") && (
        <div className="mt-4 animate-fade-in">
          <Label className="text-sm text-muted-foreground mb-2 block">
            What else should I avoid?
          </Label>
          <Input
            placeholder="Tell me more..."
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            className="bg-card"
          />
        </div>
      )}
    </StepContainer>
  );
}
