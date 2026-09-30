import Link from "next/link"
import { Building2Icon, RocketIcon, SparklesIcon } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"

const audiences = [
  {
    icon: Building2Icon,
    title: "Commercial Banks",
    body: "Digitize retail lending on top of your existing core. Add faster origination and governed workflows without replacing downstream systems.",
  },
  {
    icon: RocketIcon,
    title: "Leasing companies",
    body: "Support asset-linked applications, dealer or branch workflows, documentation, and contract preparation.",
  },
  {
    icon: SparklesIcon,
    title: "Non-bank lenders",
    body: "Configure focused products and operating processes while preserving control, traceability, and integration readiness.",
  },
]

export function Audience() {
  return (
    <section id="lenders" className="scroll-mt-20 bg-background">
      <Container className="flex flex-col gap-12 py-14 lg:py-[72px]">
        <SectionHeading
          eyebrow="Designed for lending institutions"
          title="Built for every lender"
          description="A Digital Lending Solution should make responsibilities clearer across the institution—not replace established controls with a black box."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className="min-h-[200px] gap-3 rounded-lg border p-6 ring-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Icon className="size-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-[22px] leading-[1.6] font-medium text-[#081b2c]">
                  {title}
                </h3>
              </div>
              <p className="flex-1 text-sm leading-[1.6] text-muted-foreground">
                {body}
              </p>
              <Link
                href="#contact"
                className="text-sm leading-5 text-primary underline hover:no-underline"
              >
                Learn More
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
