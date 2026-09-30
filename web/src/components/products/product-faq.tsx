"use client"

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Container } from "@/components/site/container"
import {
  ProductSectionHeading,
  type FaqItem,
} from "@/components/products/shared"
import { cn } from "@/lib/utils"

export function ProductFaq({
  eyebrow,
  title,
  description,
  items,
  className,
  containerClassName,
}: {
  eyebrow: string
  title: string
  description: string
  items: FaqItem[]
  className?: string
  containerClassName?: string
}) {
  return (
    <section className={cn("bg-[#fcfcfa]", className)}>
      <Container
        className={cn("flex flex-col gap-12 py-16 lg:py-24", containerClassName)}
      >
        <ProductSectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <AccordionPrimitive.Root
          defaultValue={[0]}
          className="flex flex-col border-t border-[#d8dee8]"
        >
          {items.map((item, i) => (
            <AccordionPrimitive.Item
              key={item.q}
              value={i}
              className="group/faq border-b border-[#d8dee8]"
            >
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger className="flex w-full items-start gap-6 py-6 text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
                  <span className="w-10 shrink-0 pt-1.5 text-[11px] font-bold text-[#6d35f2] group-data-open/faq:text-[#087f89]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg font-medium text-[#111827] md:text-xl">
                    {item.q}
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#d8dee8] bg-white group-data-open/faq:bg-[#e6f8f7]">
                    <PlusIcon className="size-4 text-[#111827] group-data-open/faq:hidden" />
                    <MinusIcon className="hidden size-4 text-[#087f89] group-data-open/faq:block" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Panel className="h-(--accordion-panel-height) overflow-hidden transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0">
                <p className="max-w-[900px] pb-6 pl-16 text-sm leading-[1.65] text-[#60708b] md:pr-14">
                  {item.a}
                </p>
              </AccordionPrimitive.Panel>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </Container>
    </section>
  )
}
