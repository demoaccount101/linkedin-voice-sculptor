import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface SelectionCardProps {
  title: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function SelectionCard({ title, description, selected, onClick, icon }: SelectionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full p-4 rounded-lg border-2 text-left transition-all duration-200",
        "hover:border-primary/50 hover:bg-card-hover",
        selected
          ? "border-primary bg-card-selected-bg"
          : "border-border bg-card"
      )}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className={cn(
            "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
            selected ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
          )}>
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            "font-medium text-base",
            selected ? "text-foreground" : "text-foreground"
          )}>
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {selected && (
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center animate-scale-in">
            <Check className="w-3 h-3 text-primary-foreground" />
          </div>
        )}
      </div>
    </button>
  );
}
