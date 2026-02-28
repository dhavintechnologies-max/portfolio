"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-dark">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-end/10 rounded-full blur-[120px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Now accepting new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              Your Technical Partners for{" "}
              <GradientText>Digital Products</GradientText>{" "}
              That Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-text-muted leading-relaxed max-w-xl"
            >
              We build custom web apps, mobile applications, and AI-powered
              solutions. Two technical founders, zero communication gaps,
              maximum velocity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="/contact" size="lg">
                Book a Discovery Call
                <ArrowRight size={18} />
              </Button>
              <Button href="/work" variant="outline" size="lg">
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Right — Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-[460px] h-[460px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-border-dark animate-[spin_30s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent" />
              </div>

              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-border-dark/60 animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-end" />
              </div>

              {/* Inner ring */}
              <div className="absolute inset-16 rounded-full border border-border-dark/40 animate-[spin_25s_linear_infinite]">
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-hover" />
              </div>

              {/* Center orb */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-accent/20 to-gradient-end/20 backdrop-blur-xl flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-gradient-end opacity-60 blur-sm" />
              </div>

              {/* Floating elements */}
              <div className="absolute top-12 right-8 px-3 py-1.5 rounded-lg bg-bg-card-dark border border-border-dark text-xs text-text-muted animate-float">
                React
              </div>
              <div className="absolute bottom-20 left-4 px-3 py-1.5 rounded-lg bg-bg-card-dark border border-border-dark text-xs text-text-muted animate-float [animation-delay:2s]">
                AI/ML
              </div>
              <div className="absolute top-1/2 right-0 px-3 py-1.5 rounded-lg bg-bg-card-dark border border-border-dark text-xs text-text-muted animate-float [animation-delay:4s]">
                Flutter
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
