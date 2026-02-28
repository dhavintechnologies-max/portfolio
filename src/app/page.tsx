import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyDhavin } from "@/components/sections/WhyDhavin";
import { Portfolio } from "@/components/sections/Portfolio";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyDhavin />
      <Portfolio />
      <HowWeWork />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  );
}
