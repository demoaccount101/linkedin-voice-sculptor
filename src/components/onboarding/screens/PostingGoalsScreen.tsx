import { StepContainer } from "../StepContainer";
import { SelectionCard } from "../SelectionCard";
import { Target, Users, TrendingUp, Briefcase, User, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const goals = [
  { id: "authority", title: "Build authority", icon: <Target className="w-5 h-5" /> },
  { id: "clients", title: "Get clients / leads", icon: <Briefcase className="w-5 h-5" /> },
  { id: "audience", title: "Grow an audience", icon: <TrendingUp className="w-5 h-5" /> },
  { id: "hiring", title: "Hiring / recruiting", icon: <Users className="w-5 h-5" /> },
  { id: "brand", title: "Personal brand", icon: <User className="w-5 h-5" /> },
  { id: "other", title: "Other", icon: <MoreHorizontal className="w-5 h-5" /> },
];

interface PostingGoalsScreenProps {
  selected: string[];
  onChange: (goals: string[]) => void;
}

export function PostingGoalsScreen({ selected, onChange }: PostingGoalsScreenProps) {
  const [otherText, setOtherText] = useState("");

  const toggleGoal = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter(g => g !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <StepContainer
      title="Why do you post on LinkedIn?"
      microcopy="This helps me shape your posts' purpose."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {goals.map((goal) => (
          <SelectionCard
            key={goal.id}
            title={goal.title}
            icon={goal.icon}
            selected={selected.includes(goal.id)}
            onClick={() => toggleGoal(goal.id)}
          />
        ))}
      </div>
      
      {selected.includes("other") && (
        <div className="mt-4 animate-fade-in">
          <Input
            placeholder="Tell us more..."
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            className="bg-card"
          />
        </div>
      )}
    </StepContainer>
  );
}
