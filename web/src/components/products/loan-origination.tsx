import Link from "next/link"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  LandmarkIcon,
  RocketIcon,
  SmartphoneIcon,
  TrendingUpIcon,
} from "lucide-react"

import { Container } from "@/components/site/container"
import { Eyebrow, ProductSectionHeading } from "@/components/products/shared"
import {
  ComplianceChecks,
  DecisionScorecard,
  TaskQueue,
  WorkflowCanvas,
  WorkspaceMockup,
} from "@/components/products/workspace-mockup"
import { cn } from "@/lib/utils"

export const btnPrimary =
  "inline-flex h-12 items-center justify-center gap-2.5 rounded-lg border border-[#6d35f2] bg-[#6d35f2] px-6 text-sm font-medium text-white transition-colors hover:bg-[#5b27d9]"
export const btnSecondary =
  "inline-flex h-12 items-center justify-center rounded-lg border border-[#d8dee8] bg-white px-6 text-sm font-medium text-[#111827] transition-colors hover:bg-[#f3f6f8]"

const heroStats = [
  { value: "10×", label: "faster loan origination" },
  { value: "99.9%", label: "platform uptime" },
  { value: "15+", label: "enterprise clients" },
]

export function LosHero() {
  return (
    <section className="bg-[#0d1422]">
      <Container className="flex flex-col gap-12 pt-14 pb-16 lg:pt-[88px] lg:pb-20">
        <div className="flex max-w-[750px] flex-col gap-6">
          <Eyebrow tone="cyan">Loan origination system</Eyebrow>
          <h1 className="text-[40px] leading-[1.04] font-medium text-white md:text-[58px]">
            Loan Origination System for Banks &amp; Lenders
          </h1>
          <p className="max-w-[700px] text-base leading-[1.55] text-[#d7deea] md:text-[19px]">
            Cut loan approval time from 3 days to under 1 day with automated
            workflows, without re-engineering your existing systems.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className={btnPrimary}>
              Book a demo
              <ArrowUpRightIcon className="size-4" />
            </Link>
            <Link href="#how-it-works" className={btnSecondary}>
              See how it works
            </Link>
          </div>
        </div>

        <HeroStats stats={heroStats} />

        <WorkspaceMockup className="h-[420px] lg:h-[540px]">
          <WorkflowCanvas />
        </WorkspaceMockup>
      </Container>
    </section>
  )
}

export function HeroStats({
  stats,
}: {
  stats: { value: string; label: string }[]
}) {
  return (
    <dl className="grid gap-6 border-y border-[#344158] py-[22px] sm:grid-cols-3 sm:gap-8">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={cn(
            "flex flex-col gap-1.5 pl-[18px]",
            i > 0 && "sm:border-l-2 sm:border-[#344158]"
          )}
        >
          <dt className="order-2 text-[13px] text-[#b9c3d2]">{stat.label}</dt>
          <dd className="order-1 text-2xl font-bold text-white">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function LosProofStrip() {
  return (
    <section className="border-b border-[#d8dee8] bg-white">
      <Container className="flex min-h-28 flex-col justify-between gap-4 py-6 md:flex-row md:items-center">
        <p className="w-[220px] text-[11px] font-bold text-[#60708b] uppercase">
          Proven with enterprise lending teams
        </p>
        <div className="flex flex-wrap items-center gap-x-14 gap-y-3">
          <p className="text-xl font-bold text-[#111827]">KKP</p>
          <span className="hidden h-8 w-px bg-[#d8dee8] md:block" />
          <p className="text-lg font-medium text-[#25314a]">
            15+ enterprise clients
          </p>
          <span className="hidden h-8 w-px bg-[#d8dee8] md:block" />
          <p className="text-lg font-medium text-[#25314a]">
            Thailand · Southeast Asia
          </p>
        </div>
      </Container>
    </section>
  )
}

const painPoints = [
  {
    title: "Manual reviews slow every approval",
    body: "Straightforward applications still wait in review queues, extending a decision across multiple days.",
  },
  {
    title: "Integrations take months",
    body: "Every change can touch core systems, turning a focused improvement into a long technology project.",
  },
  {
    title: "Policy changes wait in the dev queue",
    body: "Risk teams identify a needed adjustment, then wait for developers to move it into production.",
  },
]

export function LosProblem() {
  return (
    <section className="bg-[#f3f6f8]">
      <Container className="flex flex-col gap-12 py-16 lg:flex-row lg:gap-[72px] lg:py-24">
        <ProductSectionHeading
          eyebrow="Buyer reality"
          title="The problem with legacy origination"
          description="Delays compound where policy, systems, and manual operations meet."
          className="lg:w-[430px] lg:shrink-0"
        />
        <ol className="flex flex-1 flex-col border-t border-[#d8dee8]">
          {painPoints.map((point, i) => (
            <li
              key={point.title}
              className={cn(
                "flex gap-[22px] border-b border-[#d8dee8] px-6 py-[26px]",
                i === 0 ? "border-l-4 border-l-[#087f89] bg-[#e6f8f7]" : "bg-white"
              )}
            >
              <span
                className={cn(
                  "w-9 shrink-0 text-xs font-bold",
                  i === 0 ? "text-[#087f89]" : "text-[#6d35f2]"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2 text-[15px]">
                <p className="font-bold text-[#111827]">{point.title}</p>
                <p className="leading-[1.55] text-[#25314a]">{point.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

const features = [
  {
    title: "Visual workflow & decision tree",
    body: "Build and update origination flows in a no-code visual workspace. Risk teams can adjust policy logic without waiting on developers.",
    benefit: "Move policy changes into production faster.",
    mockup: <WorkflowCanvas />,
  },
  {
    title: "Rule-based decisioning engine",
    body: "Configure scorecards and credit policy in reusable decision rules. Keep decision logic visible to business and risk stakeholders.",
    benefit: "Launch new loan products faster.",
    mockup: <DecisionScorecard />,
  },
  {
    title: "Automated KYC & AML",
    body: "Run real-time compliance checks throughout the loan journey and surface each result in context. Route exceptions to the right reviewer instead of restarting the process.",
    benefit: "Lower regulatory risk and manual work.",
    mockup: <ComplianceChecks />,
  },
  {
    title: "Parallel verification by task pool",
    body: "Distribute verification tasks through queued, SLA-driven pools. Teams can work in parallel while operations retains a clear view of ageing and ownership.",
    benefit: "Avoid bottlenecks during high-volume periods.",
    mockup: <TaskQueue />,
  },
]

export function LosFeatures() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-[#fcfcfa]">
      <Container className="flex flex-col gap-14 py-16 lg:gap-[72px] lg:py-[104px]">
        <ProductSectionHeading
          eyebrow="Product workflow"
          title={
            <>
              Every step automated.
              <br />
              No re-engineering.
            </>
          }
          description="A modular operating layer for decisioning, compliance, and verification across the lending journey."
          className="max-w-[820px]"
        />
        <div className="flex flex-col gap-16 lg:gap-24">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className={cn(
                "flex flex-col items-center gap-10 lg:gap-[72px]",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              <WorkspaceMockup className="h-[430px] lg:w-[650px] lg:shrink-0">
                {feature.mockup}
              </WorkspaceMockup>
              <div className="flex flex-1 flex-col gap-5">
                <p className="text-xs font-bold text-[#6d35f2]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[28px] leading-[1.15] font-medium text-[#111827] md:text-[32px]">
                  {feature.title}
                </h3>
                <p className="leading-[1.65] text-[#25314a]">{feature.body}</p>
                <p className="flex items-center gap-3 rounded-lg bg-[#e6f8f7] px-4 py-3.5 text-[13px] font-medium text-[#087f89]">
                  <TrendingUpIcon className="size-[18px] shrink-0" />
                  Business benefit · {feature.benefit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

const segments = [
  {
    name: "Commercial Banks",
    icon: LandmarkIcon,
    iconClass: "bg-[#eee9ff] text-[#6d35f2]",
    accent: "border-[#6d35f2]",
    afterLabel: "text-[#6d35f2]",
    before:
      "Changes compete with core banking priorities and manual controls slow each approval.",
    after:
      "Add a faster digital origination journey while keeping the existing core banking system in place.",
  },
  {
    name: "Fintechs",
    icon: SmartphoneIcon,
    iconClass: "bg-[#e6f8f7] text-[#087f89]",
    accent: "border-[#4bd5d8]",
    afterLabel: "text-[#087f89]",
    before:
      "Growing application volume creates fragmented review queues and inconsistent handoffs.",
    after:
      "Automate policy checks and route exceptions through one visible workflow.",
  },
  {
    name: "Startups",
    icon: RocketIcon,
    iconClass: "bg-[#eee9ff] text-[#6d35f2]",
    accent: "border-[#6d35f2]",
    afterLabel: "text-[#6d35f2]",
    before:
      "Launching a lending journey means stitching together decision, verification, and compliance steps.",
    after: "Configure a defined flow and adjust rules as the product evolves.",
  },
]

export function LosSegments() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col gap-12 py-16 lg:py-24">
        <ProductSectionHeading
          eyebrow="Segments served"
          title="Built for every lender"
          description="Three operating contexts, each with a clearer path from application to decision."
        />
        <div className="grid border-y border-[#d8dee8] md:grid-cols-3">
          {segments.map((segment) => (
            <div
              key={segment.name}
              className="flex min-h-[340px] flex-col gap-6 border-[#d8dee8] px-6 py-[30px] not-first:border-t md:not-first:border-t-0 md:not-first:border-l"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[26px] font-medium text-[#111827]">
                  {segment.name}
                </h3>
                <span
                  className={cn(
                    "flex size-10 items-center justify-center rounded-lg",
                    segment.iconClass
                  )}
                >
                  <segment.icon className="size-[19px]" />
                </span>
              </div>
              <div className="flex flex-col gap-[7px] text-[#60708b]">
                <p className="text-[10px] font-bold uppercase">Before</p>
                <p className="text-sm leading-[1.55]">{segment.before}</p>
              </div>
              <div
                className={cn(
                  "flex flex-col gap-[7px] border-t-3 pt-[18px]",
                  segment.accent
                )}
              >
                <p
                  className={cn(
                    "text-[10px] font-bold uppercase",
                    segment.afterLabel
                  )}
                >
                  After
                </p>
                <p className="text-[15px] leading-[1.55] text-[#25314a]">
                  {segment.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "We reduced manual review queues and gave risk teams a much clearer view of every decision. The platform helped us move faster without rebuilding our core systems.",
    name: "Ploy Chantarangsu",
    role: "Head of Retail Lending",
    company: "Kiatnakin Phathra Bank",
  },
  {
    quote:
      "The visual workflow made it easier for product, risk, and operations to align on the same lending journey. We can now launch changes faster and with more confidence.",
    name: "Narin Pongpairoj",
    role: "VP of Credit Operations",
    company: "Siam Commercial Leasing",
  },
  {
    quote:
      "The platform gave us a single place to manage policy, compliance checks, and verification tasks. It simplified our lending workflow and reduced the time from application to approval.",
    name: "Somchai Kietdumri",
    role: "Chief Operating Officer",
    company: "Asia Plus Capital",
  },
]

export function LosTestimonials() {
  return (
    <section className="bg-[#f3f6f8]">
      <Container className="flex flex-col gap-12 py-16 lg:py-24">
        <ProductSectionHeading
          eyebrow="Customer voice"
          title={
            <>
              What lenders say
              <br />
              about the experience
            </>
          }
          description="Teams share how faster origination, clearer policy control, and better visibility changed their lending operations."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={cn(
                "flex flex-col gap-6 rounded-xl border border-[#d8dee8] bg-white p-8",
                i === 2 && "md:col-span-2"
              )}
            >
              <blockquote className="text-lg leading-[1.55] font-medium text-[#111827] md:text-xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex flex-col gap-1 text-[13px]">
                <span className="text-sm font-bold text-[#111827]">
                  {t.name}
                </span>
                <span className="text-[#60708b]">{t.role}</span>
                <span className="font-medium text-[#25314a]">{t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

const buyerQuestions = [
  {
    q: "How is this different from a typical LOS?",
    a: "Thinkerfint brings visual workflow design, configurable decisioning, compliance checks, and task distribution into one operating layer. Comparative capability beyond the supplied material needs validation. [NEEDS CONFIRMATION]",
  },
  {
    q: "Do we have to replace the core banking system?",
    a: "No. The platform is designed to sit on top of existing core banking infrastructure, so lending modernization does not require full re-platforming.",
  },
  {
    q: "Can modules be deployed independently?",
    a: "The supplied material does not establish independent module deployment or its technical dependencies. [NEEDS CONFIRMATION]",
  },
]

export function LosDifferentiation() {
  return (
    <section className="bg-[#0d1422]">
      <Container className="flex flex-col gap-12 py-16 lg:flex-row lg:gap-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:w-[360px] lg:shrink-0">
          <ProductSectionHeading
            eyebrow="Buyer questions"
            tone="cyan"
            title="How this is different"
            description="Direct answers for teams comparing lending vendors."
            dark
          />
          <p className="max-w-[300px] text-xs leading-[1.6] text-[#8e9bb0]">
            Confirmed platform facts are separated from details that still
            require validation.
          </p>
        </div>
        <ol className="flex flex-1 flex-col border-t border-[#344158]">
          {buyerQuestions.map((item, i) => (
            <li
              key={item.q}
              className="flex gap-6 border-b border-[#344158] py-7"
            >
              <span className="w-10 shrink-0 pt-1.5 text-[11px] font-bold text-[#4bd5d8]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[21px] font-medium text-white">{item.q}</h3>
                <p className="text-sm leading-[1.65] text-[#aab5c8]">{item.a}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export const losFaqs = [
  {
    q: "How long does implementation take?",
    a: "Implementation timing depends on the lending journey, integration scope, and agreed acceptance criteria. A specific timeline is not established in the supplied material. [NEEDS CONFIRMATION]",
  },
  {
    q: "Does this support Bank of Thailand regulations?",
    a: "Specific Bank of Thailand regulatory coverage is not established in the supplied material. [NEEDS CONFIRMATION]",
  },
  {
    q: "Do we need to replace our core banking system?",
    a: "No. The platform is designed to sit on top of existing core banking infrastructure, so lending modernization does not require full re-platforming.",
  },
  {
    q: "What loan types are supported (personal, auto, hire purchase, etc.)?",
    a: "Supported loan products are not established in the supplied material. [NEEDS CONFIRMATION]",
  },
  {
    q: "What happens after launch?",
    a: "Post-launch support and change-management terms are not established in the supplied material. [NEEDS CONFIRMATION]",
  },
]

export function LosCta() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-[#6d35f2]">
      <span
        aria-hidden
        className="absolute -top-[150px] right-[229px] hidden h-[520px] w-[420px] origin-center rotate-[28deg] bg-white/5 lg:block"
      />
      <span
        aria-hidden
        className="absolute right-0 bottom-0 h-[180px] w-[18px] bg-[#4bd5d8]"
      />
      <Container className="relative flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-end lg:py-[72px]">
        <div className="flex max-w-[820px] flex-col gap-5">
          <p className="text-[11px] font-bold text-[#4bd5d8] uppercase">
            Next step
          </p>
          <h2 className="text-[36px] leading-[1.06] font-medium text-white md:text-[54px]">
            See how Loan Origination fits your lending stack.
          </h2>
          <div className="flex gap-6 text-sm font-medium text-white">
            <Link href="/#products" className="flex items-center gap-2 hover:underline">
              Digital Lending
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="/products/databridge"
              className="flex items-center gap-2 hover:underline"
            >
              Databridge
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
        <Link
          href="mailto:hello@thinkerfint.com"
          className="inline-flex h-12 shrink-0 items-center gap-2.5 rounded-lg border border-[#111827] bg-[#111827] px-6 text-sm font-medium text-white transition-colors hover:bg-black"
        >
          Book a demo
          <ArrowUpRightIcon className="size-4" />
        </Link>
      </Container>
    </section>
  )
}
