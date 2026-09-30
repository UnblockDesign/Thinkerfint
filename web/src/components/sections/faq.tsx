import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"

const faqs = [
  {
    q: "Can Thinkerfint coexist with our core or servicing platform?",
    a: "Yes. The target architecture can keep existing systems of record while Thinkerfint coordinates origination, workflow, and data exchange. Integration scope is defined during discovery.",
  },
  {
    q: "Do we need to adopt every module at once?",
    a: "No. Institutions can start with the module that addresses their most pressing need and extend the platform as priorities evolve.",
  },
  {
    q: "How configurable are products and policies?",
    a: "Products, required data, documents, policies, routing, and approval authorities are configurable so teams can adapt workflows without custom development for every change.",
  },
  {
    q: "How are security and audit needs addressed?",
    a: "The platform supports role-based access, audit history, change control, and traceable operational decisions to meet institutional governance requirements.",
  },
]

export function Faq() {
  return (
    <section className="bg-background">
      <Container className="flex flex-col gap-12 py-14 lg:py-[72px]">
        <SectionHeading eyebrow="Questions" title="Lending Solution FAQ" />
        <Accordion defaultValue={[0]} className="border-t">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={i} className="border-b">
              <AccordionTrigger className="items-center rounded-none py-6 text-lg leading-[1.4] font-semibold text-foreground hover:no-underline md:text-xl **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[15px] leading-[1.6] text-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
