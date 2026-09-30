import Image from "next/image"
import { LightbulbIcon, QuoteIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function ArticleLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-[1.58] font-medium text-foreground md:text-[22px]">
      {children}
    </p>
  )
}

export function ArticleParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-[1.72] text-[#354053] md:text-[17px]">
      {children}
    </p>
  )
}

export function ArticleSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="flex scroll-mt-24 flex-col gap-4 pt-6">
      <h2 className="text-2xl leading-[1.3] font-semibold text-foreground md:text-[28px]">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function PullQuote({
  children,
  cite,
}: {
  children: React.ReactNode
  cite: string
}) {
  return (
    <figure className="flex flex-col gap-[18px] rounded-r-lg border-l-4 border-primary bg-[#f0ebff] px-6 py-[30px] md:px-[34px]">
      <QuoteIcon className="size-[25px] fill-primary text-primary" />
      <blockquote className="text-xl leading-[1.42] font-medium text-[#411999] md:text-[26px]">
        {children}
      </blockquote>
      <figcaption className="text-[13px] font-semibold text-[#354053]">
        {cite}
      </figcaption>
    </figure>
  )
}

export function Principles({
  items,
}: {
  items: { title: string; description: string }[]
}) {
  return (
    <ol className="grid gap-3 md:grid-cols-3">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="flex min-h-[178px] flex-col gap-3 rounded-lg border bg-background p-5"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="size-[7px] rounded-full bg-cyan" />
          </div>
          <h3 className="text-lg leading-[1.35] font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="text-sm leading-[1.58] text-slate-light">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  )
}

export function KeyInsight({ children }: { children: React.ReactNode }) {
  return (
    <aside className="flex items-start gap-[18px] rounded-lg bg-ink p-[22px]">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary">
        <LightbulbIcon className="size-[19px] text-white" />
      </span>
      <div className="flex flex-col gap-[7px]">
        <p className="text-xs font-bold text-cyan uppercase">Key insight</p>
        <p className="text-[17px] leading-[1.5] font-medium text-white">
          {children}
        </p>
      </div>
    </aside>
  )
}

export function Takeaways({
  id,
  title,
  items,
}: {
  id: string
  title: string
  items: { question: string; answer: string }[]
}) {
  return (
    <section
      id={id}
      className="flex scroll-mt-24 flex-col gap-2 rounded-xl bg-muted p-6 md:p-7"
    >
      <p className="text-xs font-bold text-primary uppercase">
        Practical takeaways
      </p>
      <h2 className="mb-2 text-[22px] leading-[1.35] font-semibold text-foreground md:text-[26px]">
        {title}
      </h2>
      <ol>
        {items.map((item, i) => (
          <li
            key={item.question}
            className="flex items-start gap-[18px] border-t py-[18px]"
          >
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
              {i + 1}
            </span>
            <div className="flex flex-col gap-[5px]">
              <p className="text-[17px] font-semibold text-foreground">
                {item.question}
              </p>
              <p className="text-sm leading-[1.55] text-slate-light">
                {item.answer}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function AuthorBio({
  name,
  image,
  children,
}: {
  name: string
  image: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-5 border-t pt-7">
      <Image
        src={image}
        alt=""
        width={72}
        height={72}
        className="size-[72px] shrink-0 rounded-full"
      />
      <div className="flex flex-col gap-[7px]">
        <p className="text-xs font-bold text-primary uppercase">
          About the author
        </p>
        <p className="text-[19px] font-semibold text-foreground">{name}</p>
        <p className="text-sm leading-[1.6] text-slate-light">{children}</p>
      </div>
    </div>
  )
}

export function ArticleMeta({
  author,
  role,
  image,
  date,
  readingTime,
  className,
}: {
  author: string
  role: string
  image: string
  date: string
  readingTime: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt=""
          width={40}
          height={40}
          className="size-10 rounded-full"
        />
        <div className="flex flex-col gap-0.5 text-left">
          <p className="text-sm font-semibold text-foreground">{author}</p>
          <p className="text-xs text-slate-light">{role}</p>
        </div>
      </div>
      <span className="hidden h-7 w-px bg-border sm:block" />
      <p className="flex items-center gap-4 text-[13px] text-slate-light">
        <time>{date}</time>
        <span className="size-[3px] rounded-full bg-slate-light" />
        <span>{readingTime}</span>
      </p>
    </div>
  )
}
