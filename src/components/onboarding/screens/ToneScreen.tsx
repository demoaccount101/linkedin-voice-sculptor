import { StepContainer } from "../StepContainer";
import { SelectionCard } from "../SelectionCard";

const toneOptions = [
  {
    id: "thoughtful",
    title: "Thoughtful & calm",
    description: "Reflective, insightful, no hype",
  },
  {
    id: "bold",
    title: "Bold & opinionated",
    description: "Strong takes, confident voice",
  },
  {
    id: "friendly",
    title: "Friendly & conversational",
    description: "Feels like a human talking",
  },
  {
    id: "story",
    title: "Story-driven",
    description: "Lessons, moments, experiences",
  },
  {
    id: "analytical",
    title: "Analytical & structured",
    description: "Frameworks, clarity, logic",
  },
];

interface ToneScreenProps {
  selected: string[];
  onChange: (tones: string[]) => void;
}

export function ToneScreen({ selected, onChange }: ToneScreenProps) {
  const toggleTone = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter(t => t !== id));
    } else if (selected.length < 2) {
      onChange([...selected, id]);
    } else {
      // Replace the first selection
      onChange([selected[1], id]);
    }
  };

  return (
    <StepContainer
      title="What should your writing feel like?"
      subtitle="Pick what sounds most like you. (max 2)"
      microcopy="Pick what sounds most like you."
    >
      <div className="grid grid-cols-2 gap-3">
        {toneOptions.map((tone) => (
          <SelectionCard
            key={tone.id}
            title={tone.title}
            description={tone.description}
            selected={selected.includes(tone.id)}
            onClick={() => toggleTone(tone.id)}
          />
        ))}
      </div>
    </StepContainer>
  );
}
