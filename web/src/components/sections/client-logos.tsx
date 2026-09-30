import { Container } from "@/components/site/container"

const logos = [
  { src: "/logos/kiv.jpg", alt: "KIV", width: 51 },
  { src: "/logos/good-money.png", alt: "Good Money", width: 40 },
  { src: "/logos/kkp.png", alt: "KKP", width: 50 },
  { src: "/logos/kkp.png", alt: "KKP", width: 50 },
  { src: "/logos/kkp.png", alt: "KKP", width: 50 },
]

export function ClientLogos({
  title = "Trusted by lenders across Thailand",
}: {
  title?: string
}) {
  return (
    <section className="bg-background">
      <Container className="flex flex-col gap-8 py-14 lg:py-[72px]">
        <p className="text-center text-xl font-medium text-[#9ba6b9]">
          {title}
        </p>
        <ul className="grid grid-cols-3 gap-4 md:grid-cols-5">
          {logos.map((logo, i) => (
            <li key={i} className="flex h-14 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ width: logo.width }}
                className="h-10 object-contain"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
