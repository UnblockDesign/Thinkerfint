import { cn } from "@/lib/utils"

const eyebrowTones = {
  purple: { rule: "bg-[#6d35f2]", text: "text-[#6d35f2]" },
  violet: { rule: "bg-[#6847f5]", text: "text-[#6847f5]" },
  cyan: { rule: "bg-[#4bd5d8]", text: "text-[#4bd5d8]" },
  aqua: { rule: "bg-[#55d6d0]", text: "text-[#55d6d0]" },
}

export type EyebrowTone = keyof typeof eyebrowTones

export function Eyebrow({
  children,
  tone = "purple",
  compact = false,
}: {
  children: React.ReactNode
  tone?: EyebrowTone
  /** Databridge variant: shorter rule, larger label */
  compact?: boolean
}) {
  const colors = eyebrowTones[tone]
  return (
    <div className={cn("flex items-center", compact ? "gap-2" : "gap-2.5")}>
      <span className={cn("h-0.5", compact ? "w-6" : "w-8", colors.rule)} />
      <p
        className={cn(
          "font-bold uppercase",
          compact ? "text-xs" : "text-[11px]",
          colors.text
        )}
      >
        {children}
      </p>
    </div>
  )
}

export function ProductSectionHeading({
  eyebrow,
  tone,
  compact,
  title,
  description,
  dark = false,
  className,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow: string
  tone?: EyebrowTone
  compact?: boolean
  title: React.ReactNode
  description?: React.ReactNode
  dark?: boolean
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}) {
  return (
    <div
      className={cn(
        "flex max-w-[760px] flex-col",
        compact ? "gap-4" : "gap-[18px]",
        className
      )}
    >
      <Eyebrow tone={tone} compact={compact}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "text-[34px] leading-[1.1] font-medium md:text-[46px]",
          dark ? "text-white" : "text-[#111827]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-[1.6] md:text-[17px]",
            dark ? "text-[#c9d2e1]" : "text-[#60708b]",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function NeedsConfirmation({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 w-fit items-center rounded-full bg-[#fff4d9] px-2 text-[10px] font-bold whitespace-nowrap text-[#9a5600]",
        className
      )}
    >
      [NEEDS CONFIRMATION]
    </span>
  )
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export type FaqItem = { q: string; a: string }

/** FAQPage schema, skipping answers that are still placeholders. */
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items
      .filter((item) => !item.a.includes("NEEDS CONFIRMATION"))
      .map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
  }
}

export function softwareJsonLd(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    publisher: { "@type": "Organization", name: "Thinkerfint" },
  }
}
