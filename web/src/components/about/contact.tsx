import Link from "next/link"
import { MapPinIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { cn } from "@/lib/utils"

const details = [
  {
    label: "Office",
    value: "123 Sukhumvit Road, Klongtoey Nuea, Wattana, Bangkok 10110",
  },
  {
    label: "Email",
    value: "hello@logictrust.com",
    href: "mailto:hello@logictrust.com",
  },
  { label: "Phone", value: "+66 2 123 4567", href: "tel:+6621234567" },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-muted">
      <Container className="flex flex-col gap-10 pt-14 pb-16 lg:pt-[72px] lg:pb-20">
        <div className="flex max-w-[760px] flex-col gap-3.5">
          <p className="text-xs font-bold text-primary uppercase">
            Office and contact
          </p>
          <h2 className="text-[32px] leading-[1.12] text-foreground md:text-[46px]">
            Get in touch with our team
          </h2>
          <p className="text-base leading-[1.6] text-slate-light md:text-lg">
            Reach out for product questions, partnership opportunities, or
            press enquiries.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex w-full flex-col items-start gap-6 rounded-[14px] border bg-white p-8 lg:w-[420px] lg:shrink-0">
            {details.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <p className="text-[11px] font-bold text-primary uppercase">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[15px] leading-[1.6] text-foreground hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[15px] leading-[1.6] text-foreground">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
            <Link
              href="mailto:hello@logictrust.com"
              className={cn(
                buttonVariants(),
                "h-12 rounded-[4px] px-5 text-sm font-semibold"
              )}
            >
              Contact us
            </Link>
          </div>

          <div className="flex flex-1 flex-col gap-4 rounded-[14px] border bg-white p-6">
            <p className="text-[11px] font-bold text-primary uppercase">Map</p>
            <div className="relative h-[320px] w-full rounded-xl border bg-[#eef2f7]">
              <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-3 border-white bg-primary shadow-[0px_8px_18px_0px_rgba(18,21,28,0.08)]">
                <MapPinIcon className="size-[18px] text-white" />
                <span className="sr-only">LogicTrust office location</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
