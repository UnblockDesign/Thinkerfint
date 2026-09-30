import type { Metadata } from "next"

import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import {
  DatabridgeArchitecture,
  DatabridgeCta,
  DatabridgeDifferentiation,
  databridgeFaqs,
  DatabridgeHero,
  DatabridgeProblem,
  DatabridgeProof,
  DatabridgeSources,
  DatabridgeUseCases,
} from "@/components/products/databridge"
import { ProductFaq } from "@/components/products/product-faq"
import {
  faqJsonLd,
  JsonLd,
  softwareJsonLd,
} from "@/components/products/shared"

const description =
  "Connect credit bureaus, e-KYC, open banking and alternative data through a single integration, instead of building and maintaining one connection at a time."

export const metadata: Metadata = {
  title: "Databridge: One API for Every Lending Data Source | Thinkerfint",
  description,
}

export default function DatabridgePage() {
  return (
    <>
      <JsonLd data={softwareJsonLd("Thinkerfint Databridge", description)} />
      <JsonLd data={faqJsonLd(databridgeFaqs)} />
      <SiteHeader />
      <main className="flex-1">
        <DatabridgeHero />
        <DatabridgeProblem />
        <DatabridgeSources />
        <DatabridgeArchitecture />
        <DatabridgeUseCases />
        <DatabridgeProof />
        <DatabridgeDifferentiation />
        <ProductFaq
          eyebrow="Frequently asked questions"
          title="What teams ask before connecting"
          description="The practical questions lending, risk, and technology teams ask before a demo."
          items={databridgeFaqs}
          className="bg-[#f7f8fc]"
          containerClassName="gap-[88px] lg:px-20"
        />
        <DatabridgeCta />
      </main>
      <SiteFooter />
    </>
  )
}
