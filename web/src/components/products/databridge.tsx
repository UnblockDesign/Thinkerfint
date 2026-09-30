import Link from "next/link"
import {
  ActivityIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BracesIcon,
  Building2Icon,
  CheckIcon,
  ChevronRightIcon,
  DatabaseIcon,
  FileCheck2Icon,
  LandmarkIcon,
  NetworkIcon,
  PlugZapIcon,
  RocketIcon,
  RouteIcon,
  ScanFaceIcon,
  SmartphoneIcon,
  SparklesIcon,
  WalletCardsIcon,
} from "lucide-react"

import { Container } from "@/components/site/container"
import {
  Eyebrow,
  NeedsConfirmation,
  ProductSectionHeading,
} from "@/components/products/shared"
import {
  btnPrimary,
  btnSecondary,
  HeroStats,
} from "@/components/products/loan-origination"
import { cn } from "@/lib/utils"

/** Databridge sections use an 80px gutter instead of the site's 88px. */
const gutter = "lg:px-20"

const sources = [
  { label: "Credit bureau", icon: LandmarkIcon },
  { label: "e-KYC", icon: ScanFaceIcon },
  { label: "Open banking", icon: WalletCardsIcon },
  { label: "Alternative data", icon: DatabaseIcon },
]

function SourceIcon({
  icon: Icon,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>
  className?: string
}) {
  return (
    <span
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#eeeafe] text-[#6847f5]",
        className
      )}
    >
      <Icon className="size-5" />
    </span>
  )
}

function Connector() {
  return (
    <span className="flex items-center gap-px text-[#6847f5]">
      <span className="h-0.5 w-3.5 bg-[#d7ccff]" />
      <ChevronRightIcon className="size-3" />
    </span>
  )
}

function HubDiagram() {
  return (
    <div
      aria-hidden
      className="flex w-full items-center justify-center gap-[18px] overflow-x-auto rounded-xl border border-[#dde2ef] bg-[#f7f8fc] p-5 lg:h-[440px] lg:flex-1"
    >
      <div className="flex w-[150px] shrink-0 flex-col gap-3">
        <p className="text-[11px] font-bold text-[#68718d] uppercase">
          Data sources
        </p>
        {sources.map((source) => (
          <div
            key={source.label}
            className="flex h-[62px] items-center gap-3 rounded-lg border border-[#dde2ef] bg-white px-3.5"
          >
            <SourceIcon icon={source.icon} />
            <p className="text-[13px] font-semibold text-[#0b1232]">
              {source.label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-7 shrink-0 flex-col items-center gap-[58px] pt-6">
        {sources.map((source) => (
          <Connector key={source.label} />
        ))}
      </div>
      <div className="flex h-[190px] w-40 shrink-0 flex-col items-center justify-center gap-3 rounded-xl bg-[#6847f5] p-[18px] text-center shadow-[0px_12px_32px_0px_rgba(16,26,61,0.08)]">
        <span className="flex size-[52px] items-center justify-center rounded-lg bg-white/14">
          <NetworkIcon className="size-7 text-white" />
        </span>
        <p className="text-xl font-bold text-white">Databridge</p>
        <p className="text-xs leading-[1.5] text-[#d7ccff]">
          One normalized integration layer
        </p>
      </div>
      <div className="w-7 shrink-0">
        <Connector />
      </div>
      <div className="flex w-40 shrink-0 flex-col gap-3">
        <p className="text-[11px] font-bold text-[#68718d] uppercase">
          Lending products
        </p>
        <Link
          href="/products/loan-origination"
          className="flex flex-col gap-2 rounded-lg bg-[#0b1232] p-[18px] text-sm font-semibold text-white"
        >
          <FileCheck2Icon className="size-[22px] text-[#55d6d0]" />
          Loan Origination →
        </Link>
        <div className="flex flex-col gap-2 rounded-lg bg-[#0b1232] p-[18px] text-sm font-semibold text-white">
          <SmartphoneIcon className="size-[22px] text-[#55d6d0]" />
          Digital Lending →
        </div>
      </div>
    </div>
  )
}

const heroStats = [
  { value: "99.9%", label: "platform uptime" },
  { value: "15+", label: "enterprise clients" },
  { value: "Faster integration", label: "Integration-speed metric" },
]

export function DatabridgeHero() {
  return (
    <section className="bg-[#0d1422]">
      <Container className={cn("flex flex-col gap-12 pt-14 pb-16 lg:pt-[72px]", gutter)}>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex w-full flex-col gap-6 lg:w-[500px] lg:shrink-0">
            <Eyebrow tone="cyan" compact>
              Databridge
            </Eyebrow>
            <h1 className="text-[40px] leading-[1.04] font-medium text-white md:text-[58px]">
              Databridge: One API for Every Lending Data Source
            </h1>
            <p className="text-base leading-[1.55] text-[#d7deea] md:text-[19px]">
              Connect credit bureaus, e-KYC, open banking and alternative data
              through a single integration, instead of building and
              maintaining one connection at a time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className={btnPrimary}>
                Book a demo
                <ArrowUpRightIcon className="size-4" />
              </Link>
              <Link href="#architecture" className={btnSecondary}>
                See how it works
              </Link>
            </div>
          </div>
          <HubDiagram />
        </div>
        <HeroStats stats={heroStats} />
      </Container>
    </section>
  )
}

const painPoints = [
  {
    title: "Every source becomes its own project",
    body: "A new bureau or identity provider often creates another custom integration to build, test and maintain.",
  },
  {
    title: "Connections slow the roadmap",
    body: "Core banking and third-party connections can take months, delaying product launches and credit-policy changes.",
  },
  {
    title: "Data arrives in different shapes",
    body: "Provider formats vary, leaving technical teams to map responses before business teams can use them.",
  },
]

export function DatabridgeProblem() {
  return (
    <section className="bg-[#f1f6ff]">
      <Container className={cn("flex flex-col gap-14 py-16 lg:py-24", gutter)}>
        <ProductSectionHeading
          eyebrow="The integration tax"
          tone="violet"
          compact
          title="Integration shouldn't be the bottleneck"
          description="Lenders should be able to evaluate a data source on its value—not the months of engineering work around it."
          className="max-w-[720px]"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className="flex flex-col gap-6 rounded-xl border border-[#dde2ef] bg-white p-7"
            >
              <p className="text-xs font-bold text-[#6847f5]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-[23px] leading-[1.25] font-semibold text-[#0b1232]">
                {point.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#303a5a]">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

const dataSources = [
  {
    title: "Credit bureaus",
    icon: LandmarkIcon,
    body: "Request a standardized bureau report and score through one integration pattern.",
    benefit: "Add a bureau without touching existing integrations.",
  },
  {
    title: "e-KYC providers",
    icon: ScanFaceIcon,
    body: "Connect identity and document checks to the same lending-data layer.",
    benefit:
      "Replace separate identity-provider connections with one integration path.",
  },
  {
    title: "Open banking",
    icon: WalletCardsIcon,
    body: "Bring account and transaction data into lending workflows, with consent management specifics to be confirmed.",
    benefit:
      "Give credit teams a consistent input without another point-to-point build.",
    unconfirmed: "Supported markets, consent flows and data coverage.",
  },
  {
    title: "Alternative data",
    icon: DatabaseIcon,
    body: "Connect telco, utility or other non-traditional underwriting sources where supported.",
    benefit:
      "Test additional signals without redesigning the downstream workflow.",
    unconfirmed: "Provider availability and supported source types.",
  },
]

const responseLines = [
  { text: "{", tone: "text-white" },
  { text: '  "request_status": "complete",', tone: "text-[#55d6d0]" },
  { text: '  "source_type": "credit_bureau",', tone: "text-[#d7ccff]" },
  { text: '  "data": {', tone: "text-white" },
  { text: '    "report": "standardized response",', tone: "text-[#aab4d8]" },
  { text: '    "score": "returned by source"', tone: "text-[#aab4d8]" },
  { text: "  }", tone: "text-white" },
  { text: "}", tone: "text-white" },
]

export function DatabridgeSources() {
  return (
    <section className="bg-white">
      <Container className={cn("flex flex-col gap-14 py-16 lg:py-24", gutter)}>
        <ProductSectionHeading
          eyebrow="Supported data sources"
          tone="violet"
          compact
          title="Every data source, one connection"
          description="Databridge gives product and engineering teams one integration pattern across the data used in lending decisions."
          className="max-w-[720px]"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {dataSources.map((source) => (
            <div
              key={source.title}
              className="flex flex-col gap-5 rounded-xl border border-[#dde2ef] bg-white p-7 shadow-[0px_12px_32px_0px_rgba(16,26,61,0.08)]"
            >
              <SourceIcon icon={source.icon} />
              <div className="flex flex-col gap-2.5">
                <h3 className="text-2xl font-semibold text-[#0b1232]">
                  {source.title}
                </h3>
                <p className="leading-[1.55] text-[#303a5a]">{source.body}</p>
              </div>
              <p className="flex gap-2.5 text-sm leading-[1.45] font-semibold text-[#08796e]">
                <span className="relative size-[22px] shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/check-badge.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                  <CheckIcon className="absolute inset-0 m-auto size-3" />
                </span>
                {source.benefit}
              </p>
              {source.unconfirmed && (
                <div className="flex flex-col gap-1.5">
                  <NeedsConfirmation />
                  <p className="text-xs leading-[1.4] text-[#9a5600]">
                    {source.unconfirmed}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-10 rounded-xl bg-[#e8faf8] p-6 md:p-12 lg:flex-row lg:gap-14">
          <div className="flex flex-1 flex-col gap-[18px]">
            <h3 className="text-[28px] font-bold text-[#0b1232] md:text-[32px]">
              Built to make source data usable downstream
            </h3>
            <p className="text-[17px] leading-[1.6] text-[#303a5a]">
              A normalized response means lending teams can work with the
              result while engineering teams maintain one clear integration
              surface.
            </p>
            <Link
              href="#contact"
              className="text-sm font-semibold text-[#6847f5] hover:underline"
            >
              Ask about the Databridge API →
            </Link>
          </div>
          <div className="w-full overflow-hidden rounded-xl bg-[#0b1232] lg:w-[560px] lg:shrink-0">
            <div className="flex h-11 items-center justify-between bg-[#141d43] px-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/window-controls-db.svg"
                alt=""
                width={36}
                height={8}
              />
              <p className="text-[11px] font-semibold text-[#d7ccff]">
                normalized-response.json
              </p>
            </div>
            <div className="flex flex-col gap-[7px] p-7">
              <pre className="flex flex-col gap-[7px] overflow-x-auto font-sans text-[13px]">
                {responseLines.map((line, i) => (
                  <code key={i} className={line.tone}>
                    {line.text}
                  </code>
                ))}
              </pre>
              <NeedsConfirmation className="mt-2.5" />
              <p className="text-[11px] leading-[1.5] text-[#aab4d8]">
                Illustrative response only. Final endpoint and field names
                require confirmation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

const flowSteps = [
  {
    title: "Connect once",
    icon: PlugZapIcon,
    body: "Integrate your lending stack with one Databridge connection.",
  },
  {
    title: "Normalize data",
    icon: BracesIcon,
    body: "Bring source responses into a consistent structure for downstream use.",
  },
  {
    title: "Route where needed",
    icon: RouteIcon,
    body: "Send data to Loan Origination, Digital Lending or your own systems.",
  },
  {
    title: "Monitor in one place",
    icon: ActivityIcon,
    body: "See integration activity and manage connections from one surface. [NEEDS CONFIRMATION]",
  },
]

export function DatabridgeArchitecture() {
  return (
    <section id="architecture" className="scroll-mt-20 bg-[#0b1232]">
      <Container className={cn("flex flex-col gap-16 py-16 lg:py-24", gutter)}>
        <ProductSectionHeading
          eyebrow="Architecture"
          tone="aqua"
          compact
          dark
          title="How Databridge fits into your stack"
          description="A single integration layer between external data providers and the systems your lending teams already use."
          className="max-w-[720px]"
          titleClassName="font-bold leading-[1.12] md:text-[44px]"
          descriptionClassName="leading-[1.55] text-[#bfc8e5] md:text-xl"
        />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {flowSteps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col gap-5 rounded-xl border border-[#313b60] bg-[#141d43] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg bg-[#55d6d0]/11">
                  <step.icon className="size-[22px] text-[#55d6d0]" />
                </span>
                <span className="text-xs font-bold text-[#d7ccff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-[1.55] text-[#bfc8e5]">
                {step.body}
              </p>
              {i < flowSteps.length - 1 && (
                <ArrowRightIcon className="absolute top-1/2 -right-[25px] z-10 hidden size-5 -translate-y-1/2 text-[#55d6d0] lg:block" />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

const useCases = [
  {
    segment: "Commercial Banks",
    icon: Building2Icon,
    title: "Consolidate vendor sprawl",
    body: "Reduce the number of source-specific connections your technology teams maintain.",
  },
  {
    segment: "Fintechs",
    icon: RocketIcon,
    title: "Launch with fewer dependencies",
    body: "Keep new products from waiting on a queue of separate provider integrations.",
    featured: true,
  },
  {
    segment: "Startups",
    icon: SparklesIcon,
    title: "Stay lean as data needs grow",
    body: "Access lending data without maintaining a large integrations team.",
  },
]

export function DatabridgeUseCases() {
  return (
    <section className="bg-white">
      <Container className={cn("flex flex-col gap-14 py-16 lg:py-24", gutter)}>
        <ProductSectionHeading
          eyebrow="Use cases"
          tone="violet"
          compact
          title="Built for every lender"
          description="One integration layer, applied to the operating realities of banks, fintechs and startups."
          className="max-w-[720px]"
          descriptionClassName="leading-[1.55] text-[#303a5a] md:text-xl"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.segment}
              className={cn(
                "flex flex-col gap-5 rounded-xl p-7 md:min-h-80",
                useCase.featured ? "bg-[#6847f5]" : "bg-[#f7f8fc]"
              )}
            >
              <SourceIcon
                icon={useCase.icon}
                className={
                  useCase.featured ? "bg-[#141d43] text-[#55d6d0]" : undefined
                }
              />
              <p
                className={cn(
                  "text-xs font-bold uppercase",
                  useCase.featured ? "text-[#55d6d0]" : "text-[#6847f5]"
                )}
              >
                {useCase.segment}
              </p>
              <h3
                className={cn(
                  "text-[26px] leading-[1.2] font-bold",
                  useCase.featured ? "text-white" : "text-[#0b1232]"
                )}
              >
                {useCase.title}
              </h3>
              <p
                className={cn(
                  "text-[15px] leading-[1.6]",
                  useCase.featured ? "text-[#d7ccff]" : "text-[#303a5a]"
                )}
              >
                {useCase.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function DatabridgeProof() {
  return (
    <section className="bg-[#f1f6ff]">
      <Container
        className={cn(
          "flex flex-col items-center gap-12 py-16 lg:flex-row lg:gap-20 lg:py-24",
          gutter
        )}
      >
        <ProductSectionHeading
          eyebrow="Operational confidence"
          tone="violet"
          compact
          title="Proven in production"
          description="Confirmed platform-level indicators from Thinkerfint's lending technology footprint."
          className="lg:w-[540px] lg:shrink-0"
          descriptionClassName="leading-[1.55] text-[#303a5a] md:text-xl"
        />
        <div className="flex w-full flex-1 flex-col gap-8 rounded-xl bg-white p-8 md:p-10">
          <dl className="grid gap-8 sm:grid-cols-3">
            {[
              { value: "99.9%", label: "platform uptime" },
              { value: "15+", label: "enterprise clients" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <dt className="order-2 text-[13px] leading-[1.4] text-[#68718d]">
                  {stat.label}
                </dt>
                <dd className="order-1 text-[28px] font-bold text-[#0b1232]">
                  {stat.value}
                </dd>
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <dt className="order-2 text-[13px] leading-[1.4] text-[#68718d]">
                Product-specific outcome
              </dt>
              <dd className="order-1 text-[28px] font-bold text-[#0b1232]">
                Databridge result
              </dd>
              <dd className="order-3">
                <NeedsConfirmation />
              </dd>
            </div>
          </dl>
          <span className="h-px bg-[#dde2ef]" />
          <Link
            href="#contact"
            className="text-sm font-semibold text-[#6847f5] hover:underline"
          >
            Ask us for relevant implementation references →
          </Link>
        </div>
      </Container>
    </section>
  )
}

const comparisons = [
  {
    q: "How is this different from separate provider integrations?",
    a: "Your stack connects once to Databridge rather than building and maintaining a different connection for each source.",
  },
  {
    q: "Can sources outside the default list be supported?",
    a: "Additional source support may be possible, subject to provider and implementation review. [NEEDS CONFIRMATION]",
  },
  {
    q: "Does it work standalone, or only with Thinkerfint lending products?",
    a: "Routing to Loan Origination and Digital Lending is part of the proposed architecture. Standalone use with your own systems is [NEEDS CONFIRMATION].",
  },
]

export function DatabridgeDifferentiation() {
  return (
    <section className="bg-white">
      <Container className={cn("flex flex-col gap-14 py-16 lg:py-24", gutter)}>
        <ProductSectionHeading
          eyebrow="Buyer questions"
          tone="violet"
          compact
          title="How this is different"
          description="A practical comparison for teams deciding whether to build another direct provider connection."
          className="max-w-[720px]"
          descriptionClassName="leading-[1.55] text-[#303a5a] md:text-xl"
        />
        <dl className="flex flex-col border-t border-[#dde2ef]">
          {comparisons.map((item) => (
            <div
              key={item.q}
              className="flex flex-col gap-4 border-b border-[#dde2ef] py-8 md:flex-row md:gap-16"
            >
              <dt className="text-[21px] leading-[1.35] font-semibold text-[#0b1232] md:w-[480px] md:shrink-0">
                {item.q}
              </dt>
              <dd className="leading-[1.6] text-[#303a5a]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export const databridgeFaqs = [
  {
    q: "What data sources does Databridge support?",
    a: "Databridge is designed for credit bureaus, e-KYC providers, open banking and alternative data. Specific provider and market coverage is [NEEDS CONFIRMATION].",
  },
  {
    q: "How long does integration take?",
    a: "Integration timing is not established in the supplied material. [NEEDS CONFIRMATION]",
  },
  {
    q: "Can Databridge be used without Thinkerfint's Loan Origination or Digital Lending products?",
    a: "Routing to Loan Origination and Digital Lending is part of the proposed architecture. Standalone use with your own systems is [NEEDS CONFIRMATION].",
  },
  {
    q: "Is data encrypted and compliant with local regulations?",
    a: "Encryption and regulatory compliance details are not established in the supplied material. [NEEDS CONFIRMATION]",
  },
]

export function DatabridgeCta() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#6847f5]">
      <Container
        className={cn(
          "flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20",
          gutter
        )}
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] font-bold text-white md:text-[44px]">
            See how Databridge fits your lending stack.
          </h2>
          <p className="text-[17px] text-[#d7ccff]">
            Bring your current data sources and target architecture to the
            conversation.
          </p>
        </div>
        <Link
          href="mailto:hello@thinkerfint.com"
          className="inline-flex h-[52px] shrink-0 items-center gap-2 rounded-lg bg-white px-6 text-[15px] font-semibold text-[#0b1232] transition-colors hover:bg-[#f1f6ff]"
        >
          Book a demo
          <ArrowRightIcon className="size-4" />
        </Link>
      </Container>
    </section>
  )
}
