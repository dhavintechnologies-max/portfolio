"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission — replace with Formspree/Resend integration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-border-light bg-bg-alt p-12 text-center">
        <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <CheckCircle size={24} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold text-text-on-light mb-2">
          Message sent!
        </h3>
        <p className="text-text-muted">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-on-light mb-1.5"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-text-on-light placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-on-light mb-1.5"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-text-on-light placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-text-on-light mb-1.5"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-text-on-light placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="Your company"
          />
        </div>
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-text-on-light mb-1.5"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-text-on-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          >
            <option value="">Select a service</option>
            <option value="web">Custom Web Application</option>
            <option value="mobile">Mobile Application</option>
            <option value="fullstack">Full-stack Product Development</option>
            <option value="ai">AI & Automation</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-on-light mb-1.5"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-text-on-light placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
          placeholder="Tell us about your project — goals, timeline, budget, or anything else you'd like us to know."
        />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send size={16} />
      </Button>
    </form>
  );
}
