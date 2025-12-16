import { StepContainer } from "../StepContainer";
import { SelectionCard } from "../SelectionCard";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const audienceTypes = [
  { id: "founders", title: "Founders" },
  { id: "product-managers", title: "Product managers" },
  { id: "designers", title: "Designers" },
  { id: "engineers", title: "Engineers" },
  { id: "students", title: "Students" },
  { id: "other", title: "Other" },
];

const industries = [
  { value: "tech", label: "Tech / SaaS" },
  { value: "fintech", label: "Fintech" },
  { value: "ai", label: "AI" },
  { value: "web3", label: "Web3" },
  { value: "other", label: "Other" },
];

const seniorityLevels = [
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid-level" },
  { value: "senior", label: "Senior" },
  { value: "mixed", label: "Mixed" },
];

interface AudienceScreenProps {
  data: {
    primary: string[];
    industry: string;
    seniority: string;
  };
  onChange: (data: { primary: string[]; industry: string; seniority: string }) => void;
}

export function AudienceScreen({ data, onChange }: AudienceScreenProps) {
  const toggleAudience = (id: string) => {
    const newPrimary = data.primary.includes(id)
      ? data.primary.filter(a => a !== id)
      : [...data.primary, id];
    onChange({ ...data, primary: newPrimary });
  };

  return (
    <StepContainer
      title="Who are you talking to?"
      subtitle="Imagine one person scrolling LinkedIn — who are they?"
    >
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-foreground mb-3 block">
            Primary audience
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {audienceTypes.map((type) => (
              <SelectionCard
                key={type.id}
                title={type.title}
                selected={data.primary.includes(type.id)}
                onClick={() => toggleAudience(type.id)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium text-foreground mb-2 block">
              Industry (optional)
            </Label>
            <Select value={data.industry} onValueChange={(v) => onChange({ ...data, industry: v })}>
              <SelectTrigger className="bg-card">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) => (
                  <SelectItem key={ind.value} value={ind.value}>
                    {ind.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium text-foreground mb-2 block">
              Seniority
            </Label>
            <Select value={data.seniority} onValueChange={(v) => onChange({ ...data, seniority: v })}>
              <SelectTrigger className="bg-card">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                {seniorityLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </StepContainer>
  );
}
