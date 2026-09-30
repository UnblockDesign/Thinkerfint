import Link from "next/link"

import { Container } from "@/components/site/container"
import { Logo } from "@/components/site/logo"

const columns = [
  {
    title: "PRODUCTS",
    links: [
      { label: "Digital Lending", href: "/#products" },
      { label: "Loan Origination", href: "/products/loan-origination" },
      { label: "Databridge", href: "/products/databridge" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/about#contact" },
      { label: "Newsroom", href: "/#newsroom" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-[#f9fafb]">
      <Container className="flex flex-col gap-8 pt-12 pb-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-[380px] flex-col gap-4">
            <Logo variant="light" />
            <p className="text-sm leading-[1.6] text-[#edeff3]">
              Digital lending software for banks, leasing companies, and
              non-bank lenders in Thailand and Southeast Asia.
            </p>
            <p className="text-[13px]">
              <a href="mailto:hello@thinkerfint.com" className="hover:underline">
                hello@thinkerfint.com
              </a>{" "}
              · Thailand / Southeast Asia
            </p>
          </div>
          <nav className="flex gap-14 text-[13px] leading-[2]">
            {columns.map((col) => (
              <div key={col.title} className="w-[170px] md:first:w-[220px]">
                <p>{col.title}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-between border-t border-[#46556e] pt-[22px] text-[11px] text-[#9ba6b9]">
          <p>© Thinkerfint. Enterprise lending software.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="flex size-5 items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/linkedin.svg" alt="" className="size-[18px]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
