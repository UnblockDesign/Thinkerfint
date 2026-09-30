import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"
import { NewsCard } from "@/components/newsroom/news-card"
import { stories } from "@/components/newsroom/stories"

export function Newsroom() {
  return (
    <section id="newsroom" className="scroll-mt-20 bg-muted">
      <Container className="flex flex-col gap-12 py-14 lg:py-[72px]">
        <SectionHeading eyebrow="Case study Highlight" title="Newsroom" />
        <div className="grid gap-4 md:grid-cols-3">
          {stories.slice(0, 3).map((story) => (
            <NewsCard
              key={story.title}
              story={story}
              className="md:min-h-[500px]"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
