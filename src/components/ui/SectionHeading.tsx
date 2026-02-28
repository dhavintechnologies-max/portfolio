import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          theme === "dark" ? "text-text-on-dark" : "text-text-on-light"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            "text-text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
