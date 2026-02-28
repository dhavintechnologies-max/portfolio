import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="py-24 lg:py-32 bg-bg-light">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Featured Work"
            subtitle="Real problems, real solutions, real results. Here's a look at what we've built."
            theme="light"
          />
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.15}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl border border-border-light p-6 lg:p-8 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 bg-white">
                  {/* Image placeholder */}
                  <div
                    className={`aspect-video rounded-xl bg-gradient-to-br ${
                      index === 0
                        ? "from-accent/20 to-accent/5"
                        : index === 1
                        ? "from-gradient-end/20 to-gradient-end/5"
                        : "from-emerald-500/20 to-emerald-500/5"
                    } flex items-center justify-center ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <span className="text-4xl font-bold text-text-muted/20">
                      {project.title.split("—")[0].trim()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Badge variant="filled" className="mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-text-on-light mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Results */}
                    <ul className="space-y-1 mb-4">
                      {project.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-center gap-2 text-sm text-text-muted"
                        >
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {result}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="muted">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                      View case study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Button href="/work" variant="outline">
              View All Projects
              <ArrowRight size={16} />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
