import type { Metadata } from "next"

import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import {
  LosCta,
  LosDifferentiation,
  LosFeatures,
  losFaqs,
  LosHero,
  LosProblem,
  LosProofStrip,
  LosSegments,
  LosTestimonials,
} from "@/components/products/loan-origination"
import { ProductFaq } from "@/components/products/product-faq"
import {
  faqJsonLd,
  JsonLd,
  softwareJsonLd,
} from "@/components/products/shared"

const description =
  "Cut loan approval time from 3 days to under 1 day with automated workflows, without re-engineering your existing systems."

export const metadata: Metadata = {
  title: "Loan Origination System for Banks & Lenders | Thinkerfint",
  description,
}

export default function LoanOriginationPage() {
  return (
    <>
      <JsonLd data={softwareJsonLd("Thinkerfint Loan Origination System", description)} />
      <JsonLd data={faqJsonLd(losFaqs)} />
      <SiteHeader />
      <main className="flex-1">
        <LosHero />
        <LosProofStrip />
        <LosProblem />
        <LosFeatures />
        <LosSegments />
        <LosTestimonials />
        <LosDifferentiation />
        <ProductFaq
          eyebrow="Evaluation guide"
          title="Frequently asked questions"
          description="The practical questions lending, risk, and technology teams ask before a demo."
          items={losFaqs}
        />
        <LosCta />
      </main>
      <SiteFooter />
    </>
  )
}
