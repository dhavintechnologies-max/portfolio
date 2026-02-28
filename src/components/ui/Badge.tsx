import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "filled" | "outline" | "muted";
  className?: string;
}

export function Badge({ children, variant = "muted", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "filled" && "bg-accent/20 text-accent",
        variant === "outline" && "border border-accent/40 text-accent",
        variant === "muted" && "bg-bg-card-dark text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
