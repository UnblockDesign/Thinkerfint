import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { Audience } from "@/components/sections/audience"
import { Capabilities } from "@/components/sections/capabilities"
import { ClientLogos } from "@/components/sections/client-logos"
import { Cta } from "@/components/sections/cta"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Lifecycle } from "@/components/sections/lifecycle"
import { Newsroom } from "@/components/sections/newsroom"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <Capabilities />
        <Audience />
        <Lifecycle />
        <Newsroom />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  )
}
