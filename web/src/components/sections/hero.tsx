import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/site/container"
import { cn } from "@/lib/utils"

const workflow = [
  { label: "01 Applications", status: "COMPLETE", active: true },
  { label: "02 Policy checks", status: "COMPLETE" },
  { label: "03 Approvals", status: "QUEUED" },
  { label: "04 Portfolio", status: "QUEUED" },
]

const stats = [
  { value: "10×", label: "faster loan origination" },
  { value: "99.9%", label: "platform uptime" },
  { value: "15+", label: "enterprise clients" },
]

export function Hero() {
  return (
    <section className="bg-ink">
      <Container className="flex flex-col gap-8 py-14 lg:py-[72px]">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex w-full flex-col gap-5 lg:max-w-[520px]">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-14 bg-cyan" />
              <p className="text-xs font-bold text-cyan uppercase">
                Digital lending for banks and lenders
              </p>
            </div>
            <h1 className="text-[40px] leading-[1.05] text-white md:text-[56px]">
              The smarter way to lend with AI
            </h1>
            <p className="text-base leading-[1.55] text-[#edeff3] md:text-lg">
              Digital lending, loan origination and data integration for banks
              and lenders, live in weeks, without replacing your core system.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="#contact"
                className={cn(
                  buttonVariants(),
                  "h-12 rounded-[4px] px-[18px] text-sm font-normal"
                )}
              >
                Book a demo
              </Link>
              <Link
                href="#products"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "h-12 rounded-[4px] px-[18px] text-sm font-normal"
                )}
              >
                Explore products
              </Link>
            </div>
          </div>

          <Card className="w-full gap-4 rounded-[14px] bg-secondary p-6 shadow-[0px_16px_40px_0px_rgba(18,21,28,0.09)] ring-0 lg:w-[566px]">
            <p className="text-[10px] text-teal">● TH WORKSPACE · OPERATIONS</p>
            <p className="text-[22px] font-bold text-foreground">
              Lending workflow
            </p>
            <ol className="flex flex-col gap-4">
              {workflow.map((step) => (
                <li
                  key={step.label}
                  className={cn(
                    "flex h-[72px] items-center justify-between rounded-[4px] border px-4",
                    step.active ? "bg-[#e6fbff]" : "bg-secondary"
                  )}
                >
                  <span className="text-sm text-foreground">{step.label}</span>
                  <span
                    className={cn(
                      "text-[9px]",
                      step.status === "COMPLETE" ? "text-teal" : "text-slate"
                    )}
                  >
                    {step.status}
                  </span>
                </li>
              ))}
            </ol>
          </Card>
        </div>

        <dl className="grid gap-4 sm:grid-cols-3 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-xl bg-ink-soft p-6"
            >
              <dt className="order-2 text-base leading-[1.45] text-[#bcc3d0]">
                {stat.label}
              </dt>
              <dd className="order-1 text-[32px] leading-[1.1] font-bold tracking-[-0.96px] text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
