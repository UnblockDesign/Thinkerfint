"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"

import { Container } from "@/components/site/container"
import { NewsCard } from "@/components/newsroom/news-card"
import { stories, topics, type Topic } from "@/components/newsroom/stories"
import { cn } from "@/lib/utils"

export function LatestNews() {
  const [topic, setTopic] = useState<Topic>("All topics")
  const [sort, setSort] = useState<"newest" | "oldest">("newest")

  const visible = stories
    .filter((story) => topic === "All topics" || story.topic === topic)
    .toSorted((a, b) =>
      sort === "newest"
        ? b.published.localeCompare(a.published)
        : a.published.localeCompare(b.published)
    )

  return (
    <section className="bg-muted">
      <Container className="flex flex-col gap-9 pt-14 pb-16 lg:pt-[72px] lg:pb-20">
        <div className="flex flex-col items-center gap-3.5 text-center">
          <p className="text-xs font-bold text-primary uppercase">
            Latest news
          </p>
          <h1 className="text-[34px] leading-[1.12] text-foreground md:text-[46px]">
            What we are building, learning, and seeing
          </h1>
          <p className="text-base leading-[1.6] text-slate-light md:text-lg">
            Follow product milestones, company updates, and clear perspectives
            on the forces changing enterprise lending.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div
            role="group"
            aria-label="Filter by topic"
            className="flex flex-wrap gap-2.5"
          >
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={topic === t}
                onClick={() => setTopic(t)}
                className={cn(
                  "h-[38px] rounded-full border px-4 text-[13px] font-semibold transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                  topic === t
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-white text-[#40566a] hover:border-primary/40"
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <label className="relative flex h-9 w-fit shrink-0 items-center gap-2 rounded-lg border bg-white px-4 text-[13px] font-semibold text-[#40566a] focus-within:ring-3 focus-within:ring-ring/50">
            Sort by:
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
              className="cursor-pointer appearance-none bg-transparent pr-6 text-foreground outline-none"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 size-4 text-foreground" />
          </label>
        </div>

        {visible.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {visible.map((story) => (
              <NewsCard key={story.title} story={story} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-slate-light">
            No stories in this topic yet.
          </p>
        )}
      </Container>
    </section>
  )
}
