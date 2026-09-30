import Link from "next/link"
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { pressReleases } from "@/components/newsroom/stories"
import { cn } from "@/lib/utils"

export function PressReleases() {
  return (
    <section className="bg-ink">
      <Container className="flex flex-col gap-12 py-14 lg:flex-row lg:gap-20 lg:py-[72px]">
        <div className="flex flex-col gap-7 lg:w-[390px] lg:shrink-0">
          <div className="flex flex-col gap-3.5">
            <p className="text-xs font-bold text-cyan uppercase">
              Press releases
            </p>
            <h2 className="text-[34px] leading-[1.12] text-white md:text-[46px]">
              Official updates from LogicTrust
            </h2>
            <p className="text-base leading-[1.6] text-[#edeff3] md:text-lg">
              Company announcements, product milestones, and regional news for
              media and industry partners.
            </p>
          </div>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "h-12 w-fit gap-2.5 rounded-[4px] bg-white px-5 text-sm font-semibold text-foreground"
            )}
          >
            Visit press archive
            <ArrowRightIcon className="size-4 text-primary" />
          </Link>
          <div className="flex flex-col gap-2 border-t border-[#46556e] pt-6">
            <p className="text-[11px] font-bold text-cyan uppercase">
              Media enquiries
            </p>
            <a
              href="mailto:press@logictrust.com"
              className="text-[15px] font-medium text-white hover:underline"
            >
              press@logictrust.com
            </a>
            <p className="text-xs leading-[1.5] text-[#bcc3d0]">
              Executive interviews, company background, and product briefings.
            </p>
          </div>
        </div>

        <ul className="flex flex-1 flex-col border-b border-[#46556e]">
          {pressReleases.map((release) => (
            <li
              key={release.title}
              className="group relative flex min-h-[108px] flex-col gap-3 border-t border-[#46556e] py-[22px] sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex flex-col gap-1 sm:w-[150px] sm:shrink-0">
                <p className="text-xs font-semibold text-cyan">{release.date}</p>
                <p className="text-[11px] text-[#bcc3d0]">{release.location}</p>
              </div>
              <Link
                href="#"
                className="flex-1 text-[17px] leading-[1.35] font-medium text-white after:absolute after:inset-0 md:text-[19px]"
              >
                {release.title}
              </Link>
              <span className="hidden size-[38px] shrink-0 items-center justify-center rounded-full border border-slate text-white transition-colors group-hover:border-cyan group-hover:text-cyan sm:flex">
                <ArrowUpRightIcon className="size-4" />
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
