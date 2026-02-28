import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-on-dark">
              Ready to Build{" "}
              <GradientText>Something Great</GradientText>?
            </h2>
            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-xl mx-auto">
              Let&apos;s talk about your project. Book a free discovery call and
              we&apos;ll help you figure out the best path forward — no
              strings attached.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Book a Discovery Call
                <ArrowRight size={18} />
              </Button>
              <Button href="mailto:hello@dhavintech.com" variant="ghost" size="lg">
                Or email us directly
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
