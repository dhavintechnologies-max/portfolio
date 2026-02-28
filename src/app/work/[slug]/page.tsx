import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: project.title,
      description: project.description,
    };
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <Link
                href="/work"
                className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft size={14} />
                Back to all projects
              </Link>
              <Badge variant="filled" className="mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <GradientText>{project.title}</GradientText>
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Project image placeholder */}
      <section className="bg-bg-light py-12">
        <Container>
          <ScrollReveal>
            <div
              className={`aspect-[21/9] rounded-2xl flex items-center justify-center ${
                currentIndex === 0
                  ? "bg-gradient-to-br from-accent/20 to-accent/5"
                  : currentIndex === 1
                  ? "bg-gradient-to-br from-gradient-end/20 to-gradient-end/5"
                  : "bg-gradient-to-br from-emerald-500/20 to-emerald-500/5"
              }`}
            >
              <span className="text-5xl font-bold text-text-muted/20">
                {project.title.split("—")[0].trim()}
              </span>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-bg-light">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-text-on-light mb-6">
                  The Challenge
                </h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-text-on-light mb-6">
                  Our Solution
                </h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="py-24 bg-bg-alt">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-text-on-light mb-12 text-center">
              Results
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {project.results.map((result, index) => (
              <ScrollReveal key={result} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-white border border-border-light">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 mx-auto mb-3">
                    <Check size={18} className="text-accent" />
                  </div>
                  <p className="font-medium text-text-on-light">{result}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Next project + CTA */}
      <section className="py-24 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-on-dark">
                Like what you see?
              </h2>
              <p className="mt-4 text-text-muted text-lg">
                Let&apos;s build something great together.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/contact" size="lg">
                  Start Your Project
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href={`/work/${nextProject.slug}`}
                  variant="outline"
                  size="lg"
                >
                  Next: {nextProject.title.split("—")[0].trim()}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
