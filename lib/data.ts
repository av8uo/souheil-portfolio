// All site content lives here so it can be updated without touching layout code.

export const UPWORK_URL = "https://www.upwork.com/freelancers/souheila2";

export const services = [
  {
    title: "AI Agents & Assistants",
    text: "Agents with tool calling, multi-step workflows, memory and guardrails. Assistants that answer only from your own data (RAG).",
    tags: ["Claude API", "OpenAI", "RAG", "pgvector"],
  },
  {
    title: "iOS & Android Apps",
    text: "One codebase, both stores. Polished, fast apps from first screen to App Store and Google Play release.",
    tags: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Web Apps & SaaS",
    text: "Dashboards, admin panels, customer portals and full SaaS products with subscriptions and user roles.",
    tags: ["Next.js", "React", "Stripe"],
  },
  {
    title: "Backend & Databases",
    text: "Secure PostgreSQL schemas, row-level security, authentication, server functions, realtime data and file storage.",
    tags: ["Supabase", "Firebase", "REST APIs"],
  },
  {
    title: "UI / UX Design",
    text: "User flows, design systems and pixel-perfect screens. You approve every screen before it is built. Figma-to-app implementation.",
    tags: ["Figma", "Design systems", "Accessibility"],
  },
  {
    title: "Maintenance with AI Monitoring",
    text: "Crash and error tracking with AI agents that analyse issues and alert me instantly, so bugs are fixed before users notice.",
    tags: ["Sentry", "Crashlytics", "Code review"],
  },
  {
    title: "Payments & Growth",
    text: "Subscriptions, paywalls, in-app purchases, push notifications, analytics and ad attribution.",
    tags: ["RevenueCat", "Superwall", "OneSignal", "Meta & TikTok SDK"],
  },
  {
    title: "Multilingual & Arabic RTL",
    text: "Apps and websites in English, French and Arabic, with right-to-left layouts done properly by a native speaker.",
    tags: ["i18n", "RTL", "EN · FR · AR"],
  },
];

export const projects = [
  {
    title: "Social community app with an AI agent",
    client: "UK-based social media & AI startup",
    text: "Social community MVP with profiles, posts, comments and engagement, plus an AI conversational agent built into messaging. UI/UX through to production.",
    stack: ["React Native", "Expo", "Supabase", "LLM APIs"],
  },
  {
    title: "Restaurant ordering & delivery app",
    client: "Canadian restaurant franchise",
    text: "iOS ordering app with live driver tracking, push notifications for order status and a secure checkout with payment integration.",
    stack: ["React Native", "Geolocation", "Payments", "Push"],
  },
  {
    title: "Cross-platform mobile MVP",
    client: "NGS Solution",
    text: "iOS and Android MVP with secure authentication, payments, push notifications and AI features, prepared for store release.",
    stack: ["Expo", "TypeScript", "Supabase", "AI agents"],
  },
];

export const stack = [
  { group: "Mobile", items: ["React Native", "Expo", "Expo Router", "TypeScript", "EAS Build", "OTA updates"] },
  { group: "Web", items: ["Next.js", "React", "Tailwind CSS", "Vercel"] },
  { group: "Backend", items: ["Supabase", "PostgreSQL", "Edge Functions", "Firebase", "REST APIs"] },
  { group: "AI", items: ["Claude API", "OpenAI API", "AI agents", "Tool calling", "RAG", "Vector search"] },
  { group: "Payments & growth", items: ["Stripe", "RevenueCat", "Superwall", "OneSignal", "PostHog"] },
  { group: "Quality & release", items: ["Sentry", "GitHub", "TestFlight", "App Store Connect", "Google Play Console"] },
];

export const process = [
  { step: "Discovery", text: "I study your goals, users and business rules, and send you the questions that matter before anything is built." },
  { step: "Architecture & plan", text: "Stack, data model, milestones and realistic estimates. No surprises later." },
  { step: "Design approval", text: "You see and approve every screen, including loading, empty, error and offline states." },
  { step: "Build", text: "One feature at a time, on clean branches, with progress you can test on your own phone." },
  { step: "Security & testing", text: "Row-level security, server-side validation, and testing on real iPhone and Android devices." },
  { step: "Launch & handover", text: "Store release, documentation, and 100% ownership of your code and accounts." },
];

export const certifications = [
  { name: "Building with the Claude API", provider: "Anthropic", date: "October 2026" },
  { name: "Claude Code in Action", provider: "Anthropic", date: "October 2026" },
];

export const education = {
  school: "1337 Coding School",
  program: "Software Engineering & Applied Artificial Intelligence",
  years: "2021 – 2025",
};

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "French", level: "Native" },
  { name: "Arabic", level: "Fluent" },
];
