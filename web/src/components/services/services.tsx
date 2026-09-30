import Link from "next/link"
import {
  ClipboardCheckIcon,
  GraduationCapIcon,
  LifeBuoyIcon,
  MessagesSquareIcon,
  PlugZapIcon,
  Settings2Icon,
  SlidersHorizontalIcon,
  UsersIcon,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { Eyebrow } from "@/components/products/shared"
import { cn } from "@/lib/utils"

/** Services sections use an 80px gutter, like Databridge. */
const gutter = "lg:px-20"

const steps = [
  {
    title: "Onboarding",
    body: "Kickoff, mapping, and first integration setup.",
    marker: "bg-[#4bd5d8] text-[#0d1422]",
  },
  {
    title: "Launch",
    body: "Testing, training, and go-live support.",
    marker: "bg-[#5b37f2] text-white",
  },
  {
    title: "Support",
    body: "Ongoing monitoring and day-to-day care.",
    marker: "bg-[#f5a623] text-[#0d1422]",
  },
]

export function ServicesHero({ ctaHref }: { ctaHref: string }) {
  return (
    <section className="bg-[#0d1422]">
      <Container
        className={cn(
          "flex flex-col items-center gap-12 py-16 lg:min-h-[548px] lg:flex-row lg:gap-14 lg:py-24",
          gutter
        )}
      >
        <div className="flex flex-1 flex-col items-start gap-6">
          <Eyebrow tone="cyan">Implementation services</Eyebrow>
          <h1 className="text-[40px] leading-[1.04] font-medium text-white md:text-[58px]">
            Services
          </h1>
          <p className="text-base leading-[1.55] text-[#d7deea] md:text-[19px]">
            From first integration to day-to-day support, our team works
            alongside yours through the entire lifecycle.
          </p>
          <Link
            href={ctaHref}
            className="inline-flex h-12 items-center justify-center rounded-lg bg-[#5b37f2] px-[22px] text-sm font-bold text-white transition-colors hover:bg-[#4a28dc]"
          >
            Talk to our team
          </Link>
        </div>

        <div className="flex w-full flex-col gap-5 rounded-[20px] border border-[#1e2a3f] bg-[#111a2b] p-6 lg:w-[420px] lg:shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-white">
                Lifecycle steps
              </p>
              <p className="text-[13px] text-[#9fb0c8]">3-step delivery model</p>
            </div>
            <span className="rounded-full border border-[#4bd5d8]/30 bg-[#4bd5d8]/10 px-2.5 py-1.5 text-[11px] font-bold whitespace-nowrap text-[#4bd5d8] uppercase">
              Guided rollout
            </span>
          </div>
          <ol className="flex flex-col">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex items-center gap-4 border-[#1e2a3f] py-5 first:pt-0 last:pb-0 not-first:border-t"
              >
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-2xl text-xs font-bold",
                    step.marker
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-[15px] font-semibold text-white">
                    {step.title}
                  </p>
                  <p className="text-[13px] leading-[1.45] text-[#d7deea]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

function DraftBadge() {
  return (
    <span className="inline-flex min-h-6 w-fit items-center rounded-full bg-[#eeeafe] px-2 text-[10px] leading-[1.35] font-bold text-[#4724d8] uppercase">
      [NEEDS CONFIRMATION]
    </span>
  )
}

const offerings = [
  {
    title: "Implementation & Onboarding",
    icon: ClipboardCheckIcon,
    body: "We guide setup for the products you choose and configure them around documented client policies and workflows. The scope is agreed before work begins. [NEEDS CONFIRMATION]",
  },
  {
    title: "Integration Support",
    icon: PlugZapIcon,
    body: "We work with your technical team to connect Databridge and other modules to core banking, approved data sources, and internal systems. Integration boundaries are documented during scoping. [NEEDS CONFIRMATION]",
  },
  {
    title: "Training & Enablement",
    icon: GraduationCapIcon,
    body: "Working sessions are prepared for risk, operations, and IT teams. The aim is to help your teams run and adjust the agreed setup after go-live. [NEEDS CONFIRMATION]",
  },
  {
    title: "Managed Support",
    icon: LifeBuoyIcon,
    body: "An ongoing support channel and response expectations are discussed for the period after launch. Any service levels remain subject to the final agreement. [NEEDS CONFIRMATION]",
  },
  {
    title: "Customization & Configuration",
    icon: SlidersHorizontalIcon,
    body: "We assess adaptations to workflows, scorecards, or setup for specific lending programs. Availability and scope depend on the agreed implementation. [NEEDS CONFIRMATION]",
  },
]

export function ServiceOfferings() {
  return (
    <section className="bg-[#f7f9fc]">
      <Container className={cn("flex flex-col gap-12 py-16 lg:py-24", gutter)}>
        <div className="flex max-w-[720px] flex-col gap-4">
          <p className="text-xs font-bold text-[#5b37f2] uppercase">
            Service model
          </p>
          <h2 className="text-[34px] leading-[1.1] font-medium text-[#111827] md:text-[46px]">
            What we offer
          </h2>
          <p className="leading-[1.6] text-[#5c657b]">
            Practical support for implementation leads, IT teams, and operating
            teams—from initial setup through the agreed post-launch model.
            [NEEDS CONFIRMATION]
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="flex min-h-[292px] flex-col gap-5 rounded-xl border border-[#dce3ee] bg-white p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-[#eeeafe]">
                <offering.icon className="size-[22px] text-[#5b37f2]" />
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-[21px] leading-[1.25] font-bold text-[#17203b]">
                  {offering.title}
                </h3>
                <DraftBadge />
                <p className="leading-[1.55] text-[#5c657b]">{offering.body}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-4 rounded-xl bg-[#eef3fa] p-8 font-bold">
            <p className="text-xs text-[#5b37f2] uppercase">
              Built around the agreed scope
            </p>
            <p className="text-2xl leading-[1.35] text-[#17203b]">
              Start with the operating model, systems, and teams you already
              have. [NEEDS CONFIRMATION]
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

const supportPoints = [
  {
    title: "A named team stays after launch",
    icon: UsersIcon,
    body: "The post-launch working team and responsibilities are identified for the agreed support period. [NEEDS CONFIRMATION]",
  },
  {
    title: "Expectations are agreed upfront",
    icon: MessagesSquareIcon,
    body: "Support channels and response expectations are documented before go-live, without implying an unconfirmed SLA. [NEEDS CONFIRMATION]",
  },
  {
    title: "Context carries forward",
    icon: Settings2Icon,
    body: "The team involved in configuration understands the client's setup to reduce avoidable back-and-forth. [NEEDS CONFIRMATION]",
  },
]

export function PostLaunchSupport() {
  return (
    <section className="bg-[#10162f]">
      <Container className={cn("flex flex-col gap-14 py-16 lg:py-24", gutter)}>
        <div className="flex max-w-[720px] flex-col gap-4">
          <p className="text-xs font-bold text-[#4bd5d8] uppercase">
            After launch
          </p>
          <h2 className="text-[34px] leading-[1.1] font-medium text-white md:text-[46px]">
            Support that doesn&apos;t disappear after go-live
          </h2>
          <p className="leading-[1.6] text-white">
            Operational continuity matters when teams move from implementation
            into everyday use. [NEEDS CONFIRMATION]
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {supportPoints.map((point) => (
            <div
              key={point.title}
              className="flex min-h-[264px] flex-col gap-5 rounded-xl border border-[#313b60] bg-[#141d43] p-6"
            >
              <point.icon className="size-6 text-[#55d6d0]" />
              <h3 className="text-xl font-semibold text-white">
                {point.title}
              </h3>
              <p className="text-sm leading-[1.55] text-[#bfc8e5]">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export const servicesFaqs = [
  {
    q: "Who manages the integration — us or Thinkerfint?",
    a: "Ownership should be defined during scoping across your IT team, Thinkerfint, and any third parties. The final delivery model depends on your architecture and contract. [NEEDS CONFIRMATION]",
  },
  {
    q: "What support is available after go-live?",
    a: "[NEEDS CONFIRMATION]",
  },
  {
    q: "Can we request custom configuration for our specific loan products?",
    a: "[NEEDS CONFIRMATION]",
  },
  {
    q: "How long does a typical implementation take?",
    a: "[NEEDS CONFIRMATION]",
  },
]
