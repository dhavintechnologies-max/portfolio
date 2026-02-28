import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies and portfolio of digital products built by Dhavin Technologies. Web apps, mobile apps, and AI solutions.",
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Our <GradientText>Work</GradientText>
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
                Real problems, real solutions, real results. Every project is a
                partnership built on trust and technical excellence.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Projects grid */}
      <section className="py-24 bg-bg-light">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.1}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block h-full"
                >
                  <article className="h-full rounded-2xl border border-border-light overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 bg-white">
                    {/* Image placeholder */}
                    <div
                      className={`aspect-video flex items-center justify-center ${
                        index === 0
                          ? "bg-gradient-to-br from-accent/20 to-accent/5"
                          : index === 1
                          ? "bg-gradient-to-br from-gradient-end/20 to-gradient-end/5"
                          : "bg-gradient-to-br from-emerald-500/20 to-emerald-500/5"
                      }`}
                    >
                      <span className="text-3xl font-bold text-text-muted/20 group-hover:scale-105 transition-transform">
                        {project.title.split("—")[0].trim()}
                      </span>
                    </div>

                    <div className="p-6">
                      <Badge variant="filled" className="mb-3">
                        {project.category}
                      </Badge>
                      <h2 className="text-xl font-bold text-text-on-light mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="muted">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 3 && (
                          <Badge variant="muted">
                            +{project.techStack.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
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
                Want to be our next success story?
              </h2>
              <p className="mt-4 text-text-muted text-lg">
                Let&apos;s discuss your project and see how we can help you achieve
                your goals.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Start Your Project
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
