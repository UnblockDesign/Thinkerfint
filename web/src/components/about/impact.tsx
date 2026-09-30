import { Container } from "@/components/site/container"

const metrics = [
  {
    value: "10×",
    label: "faster loan origination",
    detail: "from application to approval",
  },
  {
    value: "99.9%",
    label: "platform uptime",
    detail: "enterprise-grade reliability",
  },
  {
    value: "15+",
    label: "enterprise clients",
    detail: "banks and non-bank lenders",
  },
  { value: "3", label: "regional markets", detail: "and growing across SEA" },
]

export function Impact() {
  return (
    <section className="bg-ink">
      <Container className="flex flex-col gap-10 py-14 lg:py-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-[720px] flex-col gap-3.5">
            <p className="text-xs font-semibold text-cyan uppercase">
              Our impact
            </p>
            <h2 className="text-[32px] leading-[1.15] text-white md:text-[42px]">
              Measured in momentum and confidence
            </h2>
            <p className="text-base leading-[1.6] text-[#dde2ea] md:text-lg">
              We help lenders move faster while keeping the control their
              customers, teams, and regulators expect.
            </p>
          </div>
          <p className="text-[13px] leading-[1.55] text-[#bcc3d0] md:w-[280px] md:text-right">
            Thailand · Southeast Asia
            <br />
            Enterprise lending technology
          </p>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-[9px] rounded-lg bg-ink-soft p-6"
            >
              <dd className="order-1 text-[36px] leading-[1.1] font-bold text-white">
                {metric.value}
              </dd>
              <dt className="order-2 text-[15px] font-semibold text-white">
                {metric.label}
              </dt>
              <dd className="order-3 text-xs text-[#bcc3d0]">
                {metric.detail}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
