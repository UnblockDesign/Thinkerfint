import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"

const stories = [
  {
    image: "/images/story-1.jpg",
    category: "Perspective",
    date: "18 Sep 2026",
    title: "Responsible AI in lending starts with visible decisions",
    href: "/newsroom/responsible-ai-in-lending",
    excerpt:
      "Five governance practices that keep automation useful, explainable, and accountable.",
  },
  {
    image: "/images/story-2.jpg",
    category: "Company news",
    date: "09 Sep 2026",
    title:
      "LogicTrust expands regional delivery partnership across Southeast Asia",
    excerpt:
      "A new implementation network brings local expertise closer to lending teams in three markets.",
  },
  {
    image: "/images/story-3.jpg",
    category: "Product news",
    date: "28 Aug 2026",
    title: "Document intelligence that keeps people in control",
    excerpt:
      "How our new review workspace reduces repetitive checks while preserving human ownership.",
  },
]

export function Newsroom() {
  return (
    <section id="newsroom" className="scroll-mt-20 bg-muted">
      <Container className="flex flex-col gap-12 py-14 lg:py-[72px]">
        <SectionHeading eyebrow="Case study Highlight" title="Newsroom" />
        <div className="grid gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <Card
              key={story.title}
              className="group relative gap-0 rounded-lg border py-0 ring-0 md:min-h-[500px]"
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-primary uppercase">
                    {story.category}
                  </span>
                  <time className="text-xs text-slate-light">{story.date}</time>
                </div>
                <h3 className="text-[22px] leading-[1.28] font-semibold text-foreground">
                  {story.title}
                </h3>
                <p className="text-sm leading-[1.58] text-slate-light">
                  {story.excerpt}
                </p>
                <Link
                  href={story.href ?? "#"}
                  className="flex items-center gap-2 text-[13px] font-semibold text-foreground after:absolute after:inset-0"
                >
                  Read story
                  <ArrowUpRightIcon className="size-3.5 text-primary" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
