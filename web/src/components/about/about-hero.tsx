import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { cn } from "@/lib/utils"

export function AboutHero() {
  return (
    <section className="bg-ink">
      <Container className="flex flex-col items-center gap-10 py-14 lg:min-h-[644px] lg:flex-row lg:gap-16 lg:py-[72px]">
        <div className="flex w-full flex-col items-start gap-6 lg:w-[550px] lg:shrink-0">
          <div className="flex flex-col gap-2.5">
            <span className="h-0.5 w-14 bg-cyan" />
            <p className="text-xs font-bold text-cyan uppercase">
              About LogicTrust
            </p>
          </div>
          <h1 className="text-[40px] leading-[1.06] text-white md:text-[56px]">
            Building trust into every lending decision
          </h1>
          <p className="text-base leading-[1.58] text-[#edeff3] md:text-lg">
            We help financial institutions modernize lending with technology
            that makes complex work faster, clearer, and more
            accountable—without asking them to replace the systems they already
            trust.
          </p>
          <Link
            href="#story"
            className={cn(
              buttonVariants(),
              "h-12 rounded-[4px] px-5 text-sm font-semibold"
            )}
          >
            Meet our team
          </Link>
        </div>

        <div className="relative h-[320px] w-full overflow-hidden rounded-[14px] shadow-[0px_16px_40px_0px_rgba(18,21,28,0.1)] md:h-[500px] lg:flex-1">
          <Image
            src="/images/about-team.jpg"
            alt="LogicTrust team collaborating around a laptop"
            fill
            priority
            sizes="(min-width: 1024px) 650px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  )
}
