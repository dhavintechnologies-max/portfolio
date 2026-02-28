"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 lg:py-32 bg-bg-alt">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what the people we've worked with have to say."
            theme="light"
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="relative min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <Quote className="mx-auto mb-6 text-accent/30" size={48} />
                  <blockquote className="text-xl lg:text-2xl font-medium text-text-on-light leading-relaxed mb-8">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-text-on-light">
                      {testimonials[current].author}
                    </p>
                    <p className="text-sm text-text-muted">
                      {testimonials[current].role},{" "}
                      {testimonials[current].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-border-light text-text-muted hover:text-text-on-light hover:border-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current
                        ? "bg-accent w-6"
                        : "bg-border-light hover:bg-text-muted"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full border border-border-light text-text-muted hover:text-text-on-light hover:border-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
