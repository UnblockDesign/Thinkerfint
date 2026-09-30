import type { Metadata } from "next"

import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { AboutHero } from "@/components/about/about-hero"
import { ClosingCta } from "@/components/about/closing-cta"
import { Contact } from "@/components/about/contact"
import { Impact } from "@/components/about/impact"
import { Mission } from "@/components/about/mission"
import { Story } from "@/components/about/story"
import { ClientLogos } from "@/components/sections/client-logos"

export const metadata: Metadata = {
  title: "About | Thinkerfint",
  description:
    "We help financial institutions modernize lending with technology that makes complex work faster, clearer, and more accountable.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <Story />
        <Mission />
        <Impact />
        <ClientLogos title="Trusted by lenders across Thailand and Southeast Asia" />
        <Contact />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  )
}
