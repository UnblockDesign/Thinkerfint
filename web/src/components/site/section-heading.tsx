import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex max-w-[800px] flex-col gap-3.5", className)}>
      <p className="text-xs text-primary uppercase">{eyebrow}</p>
      <h2 className="text-[32px] leading-[1.15] text-foreground md:text-[42px]">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-[1.6] text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
