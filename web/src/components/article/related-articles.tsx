import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react"

import { Container } from "@/components/site/container"

const related = [
  {
    image: "/images/story-3.jpg",
    category: "Product news",
    date: "28 Aug 2026",
    title: "Document intelligence that keeps people in control",
    excerpt:
      "How a review workspace can reduce repetitive checks while preserving human ownership.",
  },
  {
    image: "/images/story-sme-lenders.jpg",
    category: "Market insight",
    date: "14 Aug 2026",
    title: "What growing SME lenders need from their next operating model",
    excerpt:
      "Three capabilities that help institutions scale volume without losing judgment or service quality.",
  },
  {
    image: "/images/story-resilience.jpg",
    category: "Trust & security",
    date: "30 Jul 2026",
    title: "Inside our approach to resilience by design",
    excerpt:
      "The operating principles behind secure integrations, reliable workflows, and 99.9% availability.",
  },
]

export function RelatedArticles() {
  return (
    <section className="bg-muted">
      <Container className="flex flex-col gap-8 pt-14 pb-16 lg:pt-[72px] lg:pb-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex max-w-[760px] flex-col gap-2.5">
            <p className="text-xs font-bold text-primary uppercase">
              Continue reading
            </p>
            <h2 className="text-[30px] leading-[1.2] font-medium text-foreground md:text-[38px]">
              More perspectives on trusted lending
            </h2>
          </div>
          <Link
            href="/newsroom"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all articles
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {related.map((story) => (
            <li
              key={story.title}
              className="group relative flex flex-col overflow-hidden rounded-lg border bg-white md:min-h-[438px]"
            >
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[11px] p-[22px]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-primary uppercase">
                    {story.category}
                  </span>
                  <time className="text-xs text-slate-light">{story.date}</time>
                </div>
                <h3 className="text-xl leading-[1.32] font-semibold text-foreground">
                  {story.title}
                </h3>
                <p className="text-sm leading-[1.55] text-slate-light">
                  {story.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-auto flex items-center gap-2 text-[13px] font-semibold text-foreground after:absolute after:inset-0"
                >
                  Read story
                  <ArrowUpRightIcon className="size-3.5 text-primary" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
