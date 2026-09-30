import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"

const features = [
  {
    title: "Origination workflow",
    body: "Guide applications from intake through verification, assessment, approval, and handoff with clear ownership.",
  },
  {
    title: "Decision support",
    body: "Configure policies, checks, routing, and approval authorities while keeping human review where it belongs.",
  },
  {
    title: "Databridge integrations",
    body: "Connect core systems, identity services, data providers, and reporting destinations through governed flows.",
  },
  {
    title: "Servicing handoff",
    body: "Prepare approved contracts and account data for controlled transfer to downstream servicing systems.",
  },
  {
    title: "Reporting and oversight",
    body: "Track pipeline status, exceptions, turnaround stages, and operational workload without opaque metrics.",
  },
  {
    title: "Security and governance",
    body: "Support role-based access, audit history, change control, and traceable operational decisions.",
  },
]

export function Capabilities() {
  return (
    <section id="products" className="scroll-mt-20 bg-muted">
      <Container className="flex flex-col gap-12 py-14 lg:py-[72px]">
        <SectionHeading
          eyebrow="Product solutions"
          title="Digital lending components that work as a governed whole"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="min-h-[200px] gap-6 rounded-lg p-6 ring-0 border"
            >
              <CardTitle className="flex items-center gap-2 text-[15px] leading-[1.6] font-medium text-[#081b2c]">
                <span className="size-2.5 bg-[#081b2c]" aria-hidden />
                {f.title}
              </CardTitle>
              <CardContent className="p-0 text-[15px] leading-[1.6] font-medium text-[#081b2c]">
                {f.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
