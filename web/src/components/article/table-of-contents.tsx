"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export function TableOfContents({
  items,
}: {
  items: { id: string; label: string }[]
}) {
  const [activeId, setActiveId] = useState(items[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      // Treat a section as active once its heading reaches the upper third of the viewport
      { rootMargin: "-80px 0px -66% 0px" }
    )
    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [items])

  return (
    <nav
      aria-label="In this article"
      className="flex flex-col gap-3.5 rounded-lg border bg-background p-[22px]"
    >
      <p className="text-[11px] font-bold text-slate-light uppercase">
        In this article
      </p>
      <ul className="flex flex-col gap-3.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "location" : undefined}
              className={cn(
                "text-sm leading-[1.5] text-[#354053] hover:text-primary",
                activeId === item.id && "font-semibold text-primary"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
