import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { cn } from "@/lib/utils"

export function ClosingCta({ href = "#contact" }: { href?: string }) {
  return (
    <section className="bg-primary">
      <Container className="flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center lg:py-[58px]">
        <div className="flex max-w-[860px] flex-col gap-3">
          <h2 className="text-[28px] text-white md:text-[38px]">
            Build the next chapter of lending with us
          </h2>
          <p className="text-[17px] leading-[1.55] text-[#ede7ff]">
            Whether you are modernizing one workflow or rethinking the entire
            lending journey, our team can help define a practical next step.
          </p>
        </div>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "h-12 shrink-0 gap-2.5 rounded-[4px] bg-white px-5 text-sm font-semibold text-foreground"
          )}
        >
          Talk to our experts
          <ArrowUpRightIcon className="size-4" />
        </Link>
      </Container>
    </section>
  )
}
