import Image from "next/image"

import { Container } from "@/components/site/container"

export function Story() {
  return (
    <section id="story" className="scroll-mt-20 bg-background">
      <Container className="flex flex-col items-center gap-10 py-14 lg:flex-row lg:gap-[72px] lg:py-[72px]">
        <div className="relative h-[320px] w-full overflow-hidden rounded-[14px] md:h-[462px] lg:w-[566px] lg:shrink-0">
          <Image
            src="/images/about-story.jpg"
            alt="LogicTrust office overlooking the city at night"
            fill
            sizes="(min-width: 1024px) 566px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-[22px]">
          <div className="flex flex-col gap-3.5">
            <p className="text-xs font-semibold text-primary uppercase">
              Our story
            </p>
            <h2 className="text-[32px] leading-[1.15] text-foreground md:text-[42px]">
              We started with a simple question: why should better lending be
              so hard to deliver?
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7] text-[#40566a]">
            Banks and lenders were under pressure to move faster, yet their
            teams were still stitching together decisions across documents,
            disconnected systems, and manual handoffs. The answer was not
            another black box. It was a dependable workflow layer designed
            around how regulated institutions actually work.
          </p>
          <p className="text-[15px] leading-[1.7] text-[#40566a]">
            LogicTrust brings technologists, lending practitioners, and
            implementation specialists together to connect every step—from
            application and assessment to approval and servicing handoff. We
            combine product speed with the governance enterprise lenders need.
          </p>
        </div>
      </Container>
    </section>
  )
}
