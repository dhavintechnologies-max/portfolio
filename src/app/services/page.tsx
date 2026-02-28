import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { Globe, Smartphone, Layers, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web applications, mobile apps, full-stack product development, and AI & automation solutions. Explore what Dhavin Technologies can build for you.",
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={32} />,
  Smartphone: <Smartphone size={32} />,
  Layers: <Layers size={32} />,
  Sparkles: <Sparkles size={32} />,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Solutions That{" "}
                <GradientText>Drive Results</GradientText>
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
                We offer end-to-end software development services — from initial
                concept to production deployment. Every solution is tailored to
                your specific business needs.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-bg-light">
        <Container>
          <div className="space-y-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 items-center rounded-2xl border border-border-light p-8 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 bg-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-bg-dark transition-colors">
                      {iconMap[service.icon]}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-text-on-light mb-2">
                        {service.title}
                      </h2>
                      <p className="text-text-muted leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="text-xs bg-bg-alt text-text-muted px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <ArrowRight
                        size={20}
                        className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
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
                Not sure what you need?
              </h2>
              <p className="mt-4 text-text-muted text-lg">
                Book a free discovery call and we&apos;ll help you figure out the best
                approach for your project.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Book a Discovery Call
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
