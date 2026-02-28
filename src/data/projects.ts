import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "FinFlow — Smart Financial Dashboard",
    slug: "finflow",
    client: "FinFlow Inc.",
    description:
      "A real-time financial analytics dashboard that helps CFOs track cash flow, forecasts, and team budgets in one unified view.",
    challenge:
      "The client's finance team was juggling multiple spreadsheets and legacy tools, leading to delayed reporting and data inconsistencies across departments.",
    solution:
      "We built a unified real-time dashboard with automated data pipelines from their existing tools (QuickBooks, Stripe, payroll systems). Role-based access controls and custom report builders gave each team exactly what they needed.",
    results: [
      "60% faster monthly reporting",
      "Real-time cash flow visibility",
      "$45K annual savings in manual processes",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "D3.js"],
    thumbnail: "/images/portfolio/project-1-thumb.webp",
    heroImage: "/images/portfolio/project-1-hero.webp",
    category: "Web Application",
  },
  {
    title: "MediConnect — Patient Care Platform",
    slug: "mediconnect",
    client: "MediConnect Health",
    description:
      "A cross-platform mobile app connecting patients with healthcare providers through telemedicine, appointment booking, and health records.",
    challenge:
      "Healthcare providers needed a HIPAA-compliant platform that worked seamlessly across iOS and Android while integrating with existing electronic health records (EHR) systems.",
    solution:
      "We developed a Flutter-based mobile app with end-to-end encryption, real-time video consultations, and a custom API layer that securely integrates with major EHR systems. The admin portal gives clinics complete control over scheduling and patient management.",
    results: [
      "10,000+ downloads in first quarter",
      "4.8 star App Store rating",
      "35% reduction in no-show appointments",
    ],
    techStack: ["Flutter", "Firebase", "Node.js", "WebRTC", "PostgreSQL"],
    thumbnail: "/images/portfolio/project-2-thumb.webp",
    heroImage: "/images/portfolio/project-2-hero.webp",
    category: "Mobile Application",
  },
  {
    title: "InsightBot — AI Customer Support",
    slug: "insightbot",
    client: "RetailMax",
    description:
      "An AI-powered customer support chatbot that handles 70% of support queries autonomously, escalating complex issues to human agents with full context.",
    challenge:
      "The client's support team was overwhelmed with repetitive queries, leading to long wait times and poor customer satisfaction scores.",
    solution:
      "We built a custom AI chatbot powered by LLMs, trained on the client's knowledge base and product catalog. The system includes sentiment analysis for priority routing, multi-language support, and a seamless handoff to human agents with conversation context preserved.",
    results: [
      "70% of queries resolved without human intervention",
      "Average response time reduced from 4 hours to 30 seconds",
      "Customer satisfaction score improved by 40%",
    ],
    techStack: ["Python", "OpenAI API", "React", "Redis", "Docker"],
    thumbnail: "/images/portfolio/project-3-thumb.webp",
    heroImage: "/images/portfolio/project-3-hero.webp",
    category: "AI & Automation",
  },
];
