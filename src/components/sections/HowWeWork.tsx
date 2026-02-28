import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { processSteps } from "@/data/process-steps";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={24} />,
  PenTool: <PenTool size={24} />,
  Code: <Code size={24} />,
  Rocket: <Rocket size={24} />,
};

export function HowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-bg-dark">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="How We Work"
            subtitle="A proven process that keeps projects on track, on budget, and transparent from day one."
            theme="dark"
          />
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border-dark" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.15}>
                <div className="relative text-center">
                  {/* Step number with icon */}
                  <div className="mx-auto mb-6 relative">
                    <div className="w-24 h-24 mx-auto rounded-full border-2 border-accent/30 bg-bg-card-dark flex items-center justify-center relative z-10">
                      <div className="text-accent">
                        {iconMap[step.icon]}
                      </div>
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-bg-dark text-sm font-bold flex items-center justify-center z-20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-text-on-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
