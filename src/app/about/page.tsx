import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { team } from "@/data/team";
import { ArrowRight, Linkedin, Users, Wrench, Zap, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Dhavin Technologies. Two technical co-founders building reliable software solutions for businesses worldwide.",
};

const values = [
  {
    icon: <Users size={24} />,
    title: "Transparency First",
    description:
      "No black boxes. You have full visibility into what we're building, how we're building it, and where things stand at every point.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Craftsmanship",
    description:
      "We take pride in clean code, thoughtful architecture, and solutions that stand the test of time. Quality is never an afterthought.",
  },
  {
    icon: <Zap size={24} />,
    title: "Speed Without Shortcuts",
    description:
      "Our lean structure means faster decisions and faster delivery — but never at the cost of reliability or maintainability.",
  },
  {
    icon: <Brain size={24} />,
    title: "Continuous Learning",
    description:
      "Technology evolves fast. We stay ahead by constantly exploring new tools, frameworks, and approaches to deliver better solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Built by{" "}
                <GradientText>Engineers</GradientText>,{" "}
                for Visionaries
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
                Dhavin Technologies was founded on a simple belief: the best
                software comes from teams where the people building the product
                truly understand the problem.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-bg-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-text-on-light mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                <p>
                  We&apos;re Dhananjay and Vinit — two engineers who&apos;ve spent years
                  building software for startups and enterprises. We started
                  Dhavin Technologies because we saw a gap: too many agencies
                  prioritize process over product, adding layers of management
                  that slow things down and dilute the vision.
                </p>
                <p>
                  At Dhavin, you work directly with the people writing the code.
                  No account managers translating your requirements. No junior
                  developers learning on your dime. Just experienced engineers
                  who understand your business goals and translate them into
                  production-ready software.
                </p>
                <p>
                  We&apos;re stack-agnostic by design — we believe the right tool
                  depends on the job, not on what the agency happens to know.
                  And we&apos;re AI-native, integrating intelligent automation into
                  both our workflow and our deliverables.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-24 bg-bg-alt">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-text-on-light mb-12 text-center">
              Meet the Founders
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.15}>
                <div className="rounded-2xl border border-border-light bg-white p-8 text-center">
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-gradient-end/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-on-light">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg-light">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-text-on-light mb-12 text-center">
              What We Believe In
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-border-light bg-white p-6">
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-on-light mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-on-dark">
                Let&apos;s work together
              </h2>
              <p className="mt-4 text-text-muted text-lg">
                We&apos;d love to hear about your project. Reach out and let&apos;s see
                how we can help.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Get in Touch
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
