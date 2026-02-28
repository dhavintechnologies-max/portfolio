import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";
import { Globe, Smartphone, Layers, Sparkles, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} />,
  Smartphone: <Smartphone size={28} />,
  Layers: <Layers size={28} />,
  Sparkles: <Sparkles size={28} />,
};

export function Services() {
  return (
    <section className="py-24 lg:py-32 bg-bg-light">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="What We Build"
            subtitle="From concept to production — we deliver end-to-end solutions that drive real business outcomes."
            theme="light"
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.slug} delay={index * 0.1}>
              <Link href={`/services/${service.slug}`} className="group block">
                <div className="h-full rounded-2xl border border-border-light p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 bg-white">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-bg-dark transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-semibold text-text-on-light mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
