import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"

const steps = [
  {
    title: "Configure",
    body: "Define products, required data, documents, policies, routes, and approval authorities.",
  },
  {
    title: "Acquire",
    body: "Receive applications from staff, partner, branch, or digital channels.",
  },
  {
    title: "Assess",
    body: "Coordinate identity, document, credit, policy, and exception review.",
  },
  {
    title: "Approve",
    body: "Route decisions through delegated authority with an auditable record.",
  },
  {
    title: "Handoff",
    body: "Prepare approved data and documents for contracting and servicing.",
  },
]

export function Lifecycle() {
  return (
    <section className="bg-background">
      <Container className="flex flex-col gap-12 py-14 lg:py-[72px]">
        <SectionHeading
          eyebrow="End-to-end lifecycle"
          title="From product setup to a controlled servicing handoff"
          description="Thinkerfint connects the work around lending decisions while allowing institutions to retain their chosen systems of record."
        />
        <ol className="grid text-sm leading-[1.6] text-foreground sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex min-h-[190px] flex-col gap-6 border-t pt-[22px] pb-6 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p>{step.title}</p>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
