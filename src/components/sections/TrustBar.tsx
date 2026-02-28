"use client";

import { Container } from "@/components/layout/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TechLogoMarquee } from "@/components/ui/TechLogoMarquee";
import { techStack } from "@/data/tech-stack";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 2, suffix: "", label: "Technical Founders" },
  { value: 100, suffix: "%", label: "Code Quality Focus" },
  { value: 4, suffix: "+", label: "Years Experience" },
];

export function TrustBar() {
  return (
    <section className="bg-bg-card-dark py-16 border-y border-border-dark">
      <Container>
        {/* Tech logos marquee */}
        <p className="text-center text-sm text-text-muted mb-8 uppercase tracking-wider font-medium">
          Technologies We Work With
        </p>
        <TechLogoMarquee className="mb-12">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-2 text-text-muted/60 hover:text-text-muted transition-colors whitespace-nowrap text-sm font-medium"
            >
              <span className="w-6 h-6 rounded bg-border-dark flex items-center justify-center text-[10px]">
                {tech.name.charAt(0)}
              </span>
              {tech.name}
            </span>
          ))}
        </TechLogoMarquee>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-text-on-dark">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
