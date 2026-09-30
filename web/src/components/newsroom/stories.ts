export const topics = [
  "All topics",
  "Company news",
  "Product",
  "Perspectives",
  "Trust & security",
] as const

export type Topic = (typeof topics)[number]

export type Story = {
  image: string
  category: string
  topic: Exclude<Topic, "All topics">
  /** ISO date, used for sorting */
  published: string
  date: string
  title: string
  excerpt: string
  /** Article page; omitted until the story has one */
  href?: string
}

export const stories: Story[] = [
  {
    image: "/images/story-1.jpg",
    category: "Perspective",
    topic: "Perspectives",
    published: "2026-09-18",
    date: "18 Sep 2026",
    title: "Responsible AI in lending starts with visible decisions",
    href: "/newsroom/responsible-ai-in-lending",
    excerpt:
      "Five governance practices that keep automation useful, explainable, and accountable.",
  },
  {
    image: "/images/story-2.jpg",
    category: "Company news",
    topic: "Company news",
    published: "2026-09-09",
    date: "09 Sep 2026",
    title:
      "LogicTrust expands regional delivery partnership across Southeast Asia",
    excerpt:
      "A new implementation network brings local expertise closer to lending teams in three markets.",
  },
  {
    image: "/images/story-3.jpg",
    category: "Product news",
    topic: "Product",
    published: "2026-08-28",
    date: "28 Aug 2026",
    title: "Document intelligence that keeps people in control",
    excerpt:
      "How our new review workspace reduces repetitive checks while preserving human ownership.",
  },
  {
    image: "/images/story-4.jpg",
    category: "Market insight",
    topic: "Perspectives",
    published: "2026-08-14",
    date: "14 Aug 2026",
    title: "What growing SME lenders need from their next operating model",
    excerpt:
      "Three capabilities that help institutions scale volume without losing judgment or service quality.",
  },
  {
    image: "/images/story-5.jpg",
    category: "Trust & security",
    topic: "Trust & security",
    published: "2026-07-30",
    date: "30 Jul 2026",
    title: "Inside our approach to resilience by design",
    excerpt:
      "The operating principles behind secure integrations, reliable workflows, and 99.9% availability.",
  },
  {
    image: "/images/story-6.jpg",
    category: "Inside LogicTrust",
    topic: "Company news",
    published: "2026-07-17",
    date: "17 Jul 2026",
    title: "Meet the implementation team making change practical",
    excerpt:
      "The specialists translating lending ambition into dependable day-to-day operations.",
  },
]

export const pressReleases = [
  {
    date: "24 Sep 2026",
    location: "Bangkok, Thailand",
    title:
      "LogicTrust launches explainable decision workflows for enterprise lenders",
  },
  {
    date: "09 Sep 2026",
    location: "Bangkok, Thailand",
    title:
      "LogicTrust expands regional implementation network across Southeast Asia",
  },
  {
    date: "30 Jul 2026",
    location: "Singapore",
    title:
      "LogicTrust completes independent review of platform resilience and security controls",
  },
  {
    date: "12 Jun 2026",
    location: "Bangkok, Thailand",
    title:
      "LogicTrust appoints Head of Regional Growth as enterprise client base expands",
  },
]
