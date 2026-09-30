import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { cn } from "@/lib/utils"

export function Cta() {
  return (
    <section id="contact" className="scroll-mt-20 bg-primary">
      <Container className="flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center">
        <div className="flex max-w-[820px] flex-col gap-3">
          <h2 className="text-[28px] text-white md:text-[36px]">
            Ready to transform your lending operations?
          </h2>
          <p className="text-[17px] leading-[1.55] text-[#edeff3]">
            Bring a product, workflow, integration, or platform question.
            We&apos;ll use the conversation to clarify scope, constraints, and a
            practical next step.
          </p>
        </div>
        <Link
          href="mailto:hello@thinkerfint.com"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "h-12 gap-2.5 rounded-[4px] px-[22px] text-sm font-normal"
          )}
        >
          Book a demo
          <span className="text-base text-primary">↗</span>
        </Link>
      </Container>
    </section>
  )
}
