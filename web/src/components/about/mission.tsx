import { Container } from "@/components/site/container"

export function Mission() {
  return (
    <section className="bg-muted">
      <Container className="flex flex-col items-center gap-3.5 py-14 text-center lg:py-[72px]">
        <p className="text-xs font-semibold text-primary uppercase">
          Our mission
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="text-[32px] leading-[1.15] font-medium text-foreground md:text-[42px]">
            Make responsible lending easier to deliver
          </h2>
          <p className="text-base leading-[1.6] text-muted-foreground md:text-lg">
            Give every lending team the tools to launch, operate, and improve
            products with speed—while keeping decisions explainable, governed,
            and human.
          </p>
        </div>
      </Container>
    </section>
  )
}
