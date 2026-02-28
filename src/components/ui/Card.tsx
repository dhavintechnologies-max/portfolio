import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  hover?: boolean;
  className?: string;
}

export function Card({ children, variant = "light", hover = true, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variant === "dark"
          ? "bg-bg-card-dark border border-border-dark"
          : "bg-white border border-border-light",
        hover && "hover:-translate-y-1 hover:shadow-xl",
        hover && variant === "dark" && "hover:border-accent/30 hover:shadow-accent/5",
        hover && variant === "light" && "hover:shadow-gray-200/50",
        className
      )}
    >
      {children}
    </div>
  );
}
