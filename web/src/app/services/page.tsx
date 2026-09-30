import type { Metadata } from "next"

import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { ProductCta } from "@/components/products/loan-origination"
import { ProductFaq } from "@/components/products/product-faq"
import {
  PostLaunchSupport,
  ServiceOfferings,
  ServicesHero,
  servicesFaqs,
} from "@/components/services/services"

export const metadata: Metadata = {
  title: "Services | Thinkerfint",
  description:
    "From first integration to day-to-day support, our team works alongside yours through the entire lifecycle.",
}

// Destination still to be decided; matches the header's Consult Our Expert button
const contactHref = "#contact"

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ServicesHero ctaHref={contactHref} />
        <ServiceOfferings />
        <PostLaunchSupport />
        <ProductFaq
          eyebrow="Planning notes"
          title="Frequently asked questions"
          description="Draft answers for implementation conversations. Final ownership, scope, support, and timing must be confirmed."
          items={servicesFaqs}
        />
        <ProductCta
          title="Ready to talk about your implementation?"
          description="Bring your integration questions, current stack, and rollout priorities."
          href={contactHref}
          className="lg:min-h-[360px]"
        />
      </main>
      <SiteFooter />
    </>
  )
}
