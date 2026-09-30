import type { Metadata } from "next"

import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { ClosingCta } from "@/components/about/closing-cta"
import { LatestNews } from "@/components/newsroom/latest-news"
import { PressReleases } from "@/components/newsroom/press-releases"

export const metadata: Metadata = {
  title: "Newsroom | Thinkerfint",
  description:
    "Follow product milestones, company updates, and clear perspectives on the forces changing enterprise lending.",
}

export default function NewsroomPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LatestNews />
        <PressReleases />
        <ClosingCta href="/about#contact" />
      </main>
      <SiteFooter />
    </>
  )
}
