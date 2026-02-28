import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Users, Wrench, Zap, Brain } from "lucide-react";

const differentiators = [
  {
    icon: <Users size={28} />,
    title: "Technical Founders",
    description:
      "Both co-founders are hands-on engineers. You talk directly to the people building your product — no project managers, no communication gaps.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Stack-Agnostic",
    description:
      "We don't force one framework on every project. We pick the right tools for your specific needs — React, Flutter, Python, Node.js, or whatever fits best.",
  },
  {
    icon: <Zap size={28} />,
    title: "Lean & Competitive",
    description:
      "Small team, low overhead, maximum velocity. You get senior-level talent at competitive rates without the bloat of large agencies.",
  },
  {
    icon: <Brain size={28} />,
    title: "AI-Native",
    description:
      "AI isn't an afterthought for us — it's built into how we work and what we deliver. We leverage the latest AI tools and models to build smarter products.",
  },
];

export function WhyDhavin() {
  return (
    <section className="py-24 lg:py-32 bg-bg-alt">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Why Dhavin"
            subtitle="We're not just another dev shop. Here's what makes working with us different."
            theme="light"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-border-light bg-white p-6 text-center">
                <div className="mx-auto mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-on-light mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
