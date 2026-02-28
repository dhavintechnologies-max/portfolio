import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Custom Web Applications",
    slug: "web-applications",
    shortDescription:
      "SPAs, dashboards, and admin panels built with modern frameworks. Responsive, fast, and scalable.",
    longDescription:
      "We design and build custom web applications that solve real business problems. From complex dashboards and data-rich admin panels to customer-facing portals, we craft experiences that are fast, accessible, and built to scale. Our stack-agnostic approach means we choose the right technology for your specific needs — React, Next.js, Vue, or whatever fits best.",
    icon: "Globe",
    features: [
      "Single Page Applications (SPAs)",
      "Progressive Web Apps (PWAs)",
      "Admin dashboards & internal tools",
      "Real-time collaboration features",
      "API integrations & third-party services",
      "Performance optimization & SEO",
    ],
  },
  {
    title: "Mobile Applications",
    slug: "mobile-applications",
    shortDescription:
      "Cross-platform and native mobile apps. One codebase, all platforms, native performance.",
    longDescription:
      "We build mobile applications that feel native on every platform. Using React Native and Flutter, we deliver cross-platform apps that share code across iOS and Android while maintaining native performance and UX patterns. For projects that demand it, we also build fully native applications.",
    icon: "Smartphone",
    features: [
      "Cross-platform development (React Native / Flutter)",
      "Native iOS and Android apps",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "App Store optimization & deployment",
      "Backend API development",
    ],
  },
  {
    title: "Full-stack Product Development",
    slug: "fullstack-development",
    shortDescription:
      "From idea to deployment. We partner with you to build, launch, and iterate on your digital product.",
    longDescription:
      "We're not just developers — we're product partners. We work with founders and product teams from the initial concept through architecture, design, development, testing, and deployment. Our lean process means faster time-to-market without sacrificing code quality or user experience.",
    icon: "Layers",
    features: [
      "Product discovery & scoping",
      "System architecture design",
      "UI/UX design & prototyping",
      "End-to-end development",
      "CI/CD pipeline setup",
      "Post-launch support & iteration",
    ],
  },
  {
    title: "AI & Automation",
    slug: "ai-automation",
    shortDescription:
      "Chatbots, workflow automation, and intelligent integrations. Make your business smarter.",
    longDescription:
      "We integrate AI and automation into your existing workflows and products. From intelligent chatbots and customer support automation to document processing and predictive analytics, we help businesses work smarter. We leverage the latest AI models and APIs to build solutions that deliver real, measurable value.",
    icon: "Sparkles",
    features: [
      "AI-powered chatbots & assistants",
      "Workflow automation (Zapier, n8n, custom)",
      "Document processing & extraction",
      "Predictive analytics dashboards",
      "LLM integration (OpenAI, Claude, custom models)",
      "Intelligent search & recommendations",
    ],
  },
];
