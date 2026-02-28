"use client";

import { cn } from "@/lib/utils";

interface TechLogoMarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}

const speedMap = {
  slow: "40s",
  normal: "30s",
  fast: "20s",
};

export function TechLogoMarquee({
  children,
  className,
  reverse = false,
  speed = "normal",
}: TechLogoMarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-12 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{
          animationDuration: speedMap[speed],
        }}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
}
