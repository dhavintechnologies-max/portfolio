import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and users. Together we define the scope, timeline, and success metrics for your project.",
    icon: "Search",
  },
  {
    number: 2,
    title: "Design & Plan",
    description:
      "We create wireframes, system architecture, and a detailed technical plan. You see exactly what we're building before a single line of code is written.",
    icon: "PenTool",
  },
  {
    number: 3,
    title: "Build & Iterate",
    description:
      "We develop in agile sprints with weekly demos. You see real progress every week and can provide feedback that gets incorporated immediately.",
    icon: "Code",
  },
  {
    number: 4,
    title: "Launch & Support",
    description:
      "We handle deployment, monitoring, and post-launch optimization. We stay on as your technical partner for continued iterations and support.",
    icon: "Rocket",
  },
];
