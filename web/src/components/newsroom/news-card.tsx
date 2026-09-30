import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { Card } from "@/components/ui/card"
import type { Story } from "@/components/newsroom/stories"
import { cn } from "@/lib/utils"

export function NewsCard({
  story,
  className,
}: {
  story: Story
  className?: string
}) {
  return (
    <Card
      className={cn(
        "group relative gap-0 rounded-lg border py-0 ring-0 md:min-h-[470px]",
        className
      )}
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
          <time dateTime={story.published} className="text-xs text-slate-light">
            {story.date}
          </time>
        </div>
        <h3 className="text-[22px] leading-[1.28] font-semibold text-foreground">
          {story.title}
        </h3>
        <p className="text-sm leading-[1.58] text-slate-light">
          {story.excerpt}
        </p>
        <Link
          href="#"
          className="flex items-center gap-2 text-[13px] font-semibold text-foreground after:absolute after:inset-0"
        >
          Read story
          <ArrowUpRightIcon className="size-3.5 text-primary" />
        </Link>
      </div>
    </Card>
  )
}
