import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { services } from "@/data/services";
import { ArrowRight, Check } from "lucide-react";

// Remove the individual page files and use dynamic routing instead
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: "Service Not Found" };
    return {
      title: service.title,
      description: service.shortDescription,
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <Badge variant="filled" className="mb-4">
                Service
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <GradientText>{service.title}</GradientText>
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Discuss Your Project
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Detail */}
      <section className="py-24 bg-bg-light">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-text-on-light mb-6">
                  Overview
                </h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-text-on-light mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check size={12} className="text-accent" />
                      </div>
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Next service + CTA */}
      <section className="py-24 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-on-dark">
                Ready to get started?
              </h2>
              <p className="mt-4 text-text-muted text-lg">
                Tell us about your project and we&apos;ll put together a plan
                tailored to your needs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/contact" size="lg">
                  Book a Discovery Call
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href={`/services/${nextService.slug}`}
                  variant="outline"
                  size="lg"
                >
                  Explore {nextService.title}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
