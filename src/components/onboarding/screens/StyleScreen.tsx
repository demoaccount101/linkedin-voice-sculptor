import { StepContainer } from "../StepContainer";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface StyleScreenProps {
  data: {
    length: string;
    emojis: string;
    cta: string;
  };
  onChange: (data: { length: string; emojis: string; cta: string }) => void;
}

export function StyleScreen({ data, onChange }: StyleScreenProps) {
  return (
    <StepContainer
      title="How should posts be written?"
      microcopy="There's no right answer — just your style."
    >
      <div className="space-y-8">
        <div className="bg-card rounded-lg p-5 border border-border">
          <Label className="text-base font-medium text-foreground mb-4 block">
            Post Length
          </Label>
          <RadioGroup
            value={data.length}
            onValueChange={(v) => onChange({ ...data, length: v })}
            className="flex flex-wrap gap-3"
          >
            {[
              { value: "short", label: "Short & punchy" },
              { value: "medium", label: "Medium" },
              { value: "long", label: "Long-form" },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 cursor-pointer transition-all ${
                  data.length === opt.value
                    ? "border-primary bg-card-selected-bg"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value={opt.value} className="sr-only" />
                <span className={`text-sm font-medium ${
                  data.length === opt.value ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {opt.label}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="bg-card rounded-lg p-5 border border-border">
          <Label className="text-base font-medium text-foreground mb-4 block">
            Emojis
          </Label>
          <RadioGroup
            value={data.emojis}
            onValueChange={(v) => onChange({ ...data, emojis: v })}
            className="flex flex-wrap gap-3"
          >
            {[
              { value: "none", label: "No emojis" },
              { value: "minimal", label: "Minimal" },
              { value: "expressive", label: "Expressive" },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 cursor-pointer transition-all ${
                  data.emojis === opt.value
                    ? "border-primary bg-card-selected-bg"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value={opt.value} className="sr-only" />
                <span className={`text-sm font-medium ${
                  data.emojis === opt.value ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {opt.label}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="bg-card rounded-lg p-5 border border-border">
          <Label className="text-base font-medium text-foreground mb-4 block">
            Call-to-Action
          </Label>
          <RadioGroup
            value={data.cta}
            onValueChange={(v) => onChange({ ...data, cta: v })}
            className="flex flex-wrap gap-3"
          >
            {[
              { value: "often", label: "Often" },
              { value: "sometimes", label: "Sometimes" },
              { value: "never", label: "Never" },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 cursor-pointer transition-all ${
                  data.cta === opt.value
                    ? "border-primary bg-card-selected-bg"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <RadioGroupItem value={opt.value} className="sr-only" />
                <span className={`text-sm font-medium ${
                  data.cta === opt.value ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {opt.label}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>
      </div>
    </StepContainer>
  );
}
