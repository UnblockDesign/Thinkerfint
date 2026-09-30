"use client"

import { useState } from "react"
import { CheckIcon, LinkIcon, MailIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const actionClass =
  "flex size-10 items-center justify-center rounded-full border bg-white text-[#354053] transition-colors hover:border-primary hover:text-primary"

export function ShareRail({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  function share(target: "linkedin" | "mail") {
    const url = window.location.href
    if (target === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank",
        "noopener,noreferrer"
      )
    } else {
      window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    }
  }

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("flex gap-3", className)}>
      <p className="text-[11px] font-bold text-slate-light uppercase">Share</p>
      <button
        type="button"
        onClick={() => share("linkedin")}
        aria-label="Share on LinkedIn"
        className={actionClass}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/linkedin.svg" alt="" className="size-4" />
      </button>
      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? "Link copied" : "Copy link"}
        className={actionClass}
      >
        {copied ? (
          <CheckIcon className="size-4 text-primary" />
        ) : (
          <LinkIcon className="size-4" />
        )}
      </button>
      <button
        type="button"
        onClick={() => share("mail")}
        aria-label="Share by email"
        className={actionClass}
      >
        <MailIcon className="size-4" />
      </button>
    </div>
  )
}
