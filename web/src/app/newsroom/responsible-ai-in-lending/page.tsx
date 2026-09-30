import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, ChevronRightIcon, ShieldCheckIcon } from "lucide-react"

import {
  ArticleLead,
  ArticleMeta,
  ArticleParagraph,
  ArticleSection,
  AuthorBio,
  KeyInsight,
  Principles,
  PullQuote,
  Takeaways,
} from "@/components/article/article-blocks"
import { RelatedArticles } from "@/components/article/related-articles"
import { ShareRail } from "@/components/article/share-rail"
import { TableOfContents } from "@/components/article/table-of-contents"
import { ClosingCta } from "@/components/about/closing-cta"
import { Container } from "@/components/site/container"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"

const title = "Responsible AI in lending: striking the right balance"
const summary =
  "How lenders can use AI to move faster and serve more customers—without losing human judgment, explainability, or accountability."

export const metadata: Metadata = {
  title: `${title} | Thinkerfint`,
  description: summary,
  openGraph: {
    title,
    description: summary,
    type: "article",
    publishedTime: "2026-09-18",
    authors: ["Maya Rattanakul"],
    images: ["/images/article-responsible-ai.jpg"],
  },
}

const author = {
  name: "Maya Rattanakul",
  role: "Head of AI Governance, LogicTrust",
  image: "/images/author-maya-rattanakul.png",
}

const contents = [
  { id: "responsible-not-slower", label: "Responsible does not mean slower" },
  { id: "operating-model", label: "A balanced operating model" },
  { id: "explainability", label: "Explainability in practice" },
  { id: "govern-the-system", label: "Govern the whole system" },
  { id: "takeaways", label: "Practical takeaways" },
]

export default function ResponsibleAiArticlePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article>
          <header className="bg-muted">
            <Container className="flex flex-col items-center gap-6 pt-12 pb-10 text-center lg:px-[176px] lg:pt-[54px] lg:pb-[52px]">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-[9px]">
                  <li>
                    <Link
                      href="/newsroom"
                      className="text-[13px] font-medium text-slate-light hover:text-primary"
                    >
                      Newsroom
                    </Link>
                  </li>
                  <li aria-hidden>
                    <ChevronRightIcon className="size-[13px] text-slate-light" />
                  </li>
                  <li className="text-xs font-bold text-primary uppercase">
                    Perspectives
                  </li>
                </ol>
              </nav>
              <h1 className="text-[36px] leading-[1.08] font-medium text-foreground md:text-[58px]">
                {title}
              </h1>
              <p className="max-w-[920px] text-lg leading-[1.55] text-slate-light md:text-xl">
                {summary}
              </p>
              <ArticleMeta
                author={author.name}
                role={author.role}
                image={author.image}
                date="18 Sep 2026"
                readingTime="8 min read"
              />
            </Container>
            <Container className="flex flex-col gap-3 pb-[38px]">
              <figure className="flex flex-col gap-3">
                <div className="relative h-[260px] w-full overflow-hidden rounded-lg md:h-[560px]">
                  <Image
                    src="/images/article-responsible-ai.jpg"
                    alt="A lending specialist reviews AI-supported decision data on a large display"
                    fill
                    priority
                    sizes="(min-width: 1440px) 1264px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-xs leading-[1.5] text-slate-light">
                  Responsible AI begins with decisions that teams can inspect,
                  challenge, and improve. Illustration: LogicTrust.
                </figcaption>
              </figure>
            </Container>
          </header>

          <div className="bg-white">
            <Container className="grid gap-12 pt-14 pb-16 lg:pt-[72px] lg:pb-[88px] xl:grid-cols-[88px_minmax(0,760px)_320px]">
              <div className="mx-auto w-full max-w-[760px] xl:mx-0">
                <ShareRail
                  title={title}
                  className="items-center xl:sticky xl:top-28 xl:flex-col xl:items-start"
                />
              </div>

              <div className="mx-auto flex w-full max-w-[760px] flex-col gap-6 xl:mx-0">
                <ArticleLead>
                  AI is already changing how lenders read documents, assess
                  affordability, detect risk, and support customers. The
                  opportunity is significant—but so is the responsibility to
                  make every automated decision worthy of trust.
                </ArticleLead>
                <ArticleParagraph>
                  The most useful question is no longer whether lenders should
                  adopt AI. It is where AI can create meaningful advantage,
                  which decisions must remain human-led, and what evidence an
                  institution needs before it can rely on a model at scale.
                </ArticleParagraph>
                <ArticleParagraph>
                  That balance is not achieved by placing a person at the end
                  of every workflow. It comes from designing clear ownership,
                  proportionate controls, and visible decision trails into the
                  lending journey from the start.
                </ArticleParagraph>

                <ArticleSection
                  id="responsible-not-slower"
                  title="Responsible does not mean slower"
                >
                  <ArticleParagraph>
                    In traditional operations, caution is often expressed
                    through more checks, more handoffs, and more waiting.
                    Responsible AI offers a different model: use automation to
                    make routine evidence easier to review, then direct
                    specialist attention to cases that genuinely need judgment.
                  </ArticleParagraph>
                  <ArticleParagraph>
                    For example, a document-intelligence model can extract
                    income fields, compare them against declared information,
                    and flag unusual patterns in seconds. The model should not
                    silently turn those signals into a final outcome. It should
                    show what it found, how confident it is, and why the case
                    was routed for review.
                  </ArticleParagraph>
                </ArticleSection>

                <PullQuote cite="Maya Rattanakul · Head of AI Governance">
                  The goal is not to remove people from lending decisions. It
                  is to give people better evidence, earlier—and a clear reason
                  to intervene.
                </PullQuote>

                <ArticleSection
                  id="operating-model"
                  title="Three principles for a balanced operating model"
                >
                  <ArticleParagraph>
                    A sound AI policy becomes practical when it is translated
                    into the way products are designed and cases are handled.
                    We see three principles as foundational.
                  </ArticleParagraph>
                  <Principles
                    items={[
                      {
                        title: "Visible by design",
                        description:
                          "Show source evidence, model confidence, and the factors that shaped a recommendation.",
                      },
                      {
                        title: "Human where it matters",
                        description:
                          "Reserve accountable review for exceptions, vulnerable customers, and material outcomes.",
                      },
                      {
                        title: "Measured in production",
                        description:
                          "Monitor drift, overrides, and customer impact—not just accuracy in a test environment.",
                      },
                    ]}
                  />
                </ArticleSection>

                <ArticleSection
                  id="explainability"
                  title="Explainability is an operating capability"
                >
                  <ArticleParagraph>
                    A model can be technically explainable and still leave a
                    frontline team unable to answer a customer. Effective
                    explanations need to work at several levels: engineers need
                    model diagnostics; risk leaders need governance evidence;
                    case officers need plain-language reasons; customers need a
                    clear account of what happened and what they can do next.
                  </ArticleParagraph>
                  <ArticleParagraph>
                    This is why explanation should be designed as part of the
                    workflow, not produced as a separate report after
                    deployment. The evidence attached to a recommendation
                    should travel with the case, remain available for audit,
                    and be understandable without specialist tooling.
                  </ArticleParagraph>
                </ArticleSection>

                <KeyInsight>
                  If a case officer cannot reconstruct why an AI-supported
                  decision was made, the workflow is not ready for
                  consequential use.
                </KeyInsight>

                <ArticleSection
                  id="govern-the-system"
                  title="Govern the whole system, not only the model"
                >
                  <ArticleParagraph>
                    Outcomes are shaped by more than an algorithm. Data
                    quality, thresholds, user interface choices, escalation
                    rules, staff training, and commercial incentives all
                    influence what a model does in practice. Governance must
                    therefore consider the complete decision system.
                  </ArticleParagraph>
                  <ArticleParagraph>
                    A lender may have a well-documented model but still create
                    risk if users cannot challenge its output, if override
                    reasons are not recorded, or if performance is not compared
                    across customer groups. Conversely, a modest model can
                    deliver value responsibly when its scope is narrow, its
                    limitations are explicit, and its operation is closely
                    observed.
                  </ArticleParagraph>
                </ArticleSection>

                <Takeaways
                  id="takeaways"
                  title="Five questions to take into your next AI review"
                  items={[
                    {
                      question: "What decision are we improving?",
                      answer:
                        "Define the business and customer outcome before choosing a model or vendor.",
                    },
                    {
                      question: "Where can a person challenge the output?",
                      answer:
                        "Make escalation routes clear, fast, and available to both staff and customers.",
                    },
                    {
                      question: "What evidence will travel with the case?",
                      answer:
                        "Preserve sources, confidence, reasons, and changes in an auditable decision record.",
                    },
                    {
                      question: "How will we detect uneven impact?",
                      answer:
                        "Monitor performance by segment and investigate patterns in overrides and declines.",
                    },
                    {
                      question: "Who can pause the system?",
                      answer:
                        "Give named owners the authority and information to intervene when risk changes.",
                    },
                  ]}
                />

                <ArticleSection
                  id="trust-at-scale"
                  title="Trust is the real scale advantage"
                >
                  <ArticleParagraph>
                    The strongest lending organizations will not be those that
                    automate the most. They will be those that know which work
                    to automate, can explain how the system behaves, and can
                    adapt quickly when the evidence changes.
                  </ArticleParagraph>
                  <ArticleParagraph>
                    Responsible AI is therefore less a constraint on innovation
                    than a condition for durable innovation. When teams can
                    see, test, and challenge decisions, they can move into
                    production with greater confidence—and earn the trust
                    required to keep improving.
                  </ArticleParagraph>
                </ArticleSection>

                <AuthorBio name={author.name} image={author.image}>
                  Maya leads AI governance at LogicTrust, helping lenders turn
                  responsible technology principles into practical controls,
                  clear decision workflows, and measurable customer outcomes.
                </AuthorBio>
              </div>

              <aside className="mx-auto flex w-full max-w-[760px] flex-col gap-6 xl:sticky xl:top-28 xl:mx-0 xl:self-start">
                <TableOfContents items={contents} />
                <div className="flex flex-col items-start gap-3 rounded-lg bg-[#f0ebff] p-[22px]">
                  <ShieldCheckIcon className="size-6 text-primary" />
                  <p className="text-lg leading-[1.35] font-semibold text-foreground">
                    Building an AI governance roadmap?
                  </p>
                  <p className="text-sm leading-[1.55] text-slate-light">
                    Our specialists can help map controls to your lending
                    workflows and risk appetite.
                  </p>
                  <Link
                    href="/about#contact"
                    className="flex items-center gap-2 text-[13px] font-semibold text-primary hover:underline"
                  >
                    Talk to an expert
                    <ArrowRightIcon className="size-3.5" />
                  </Link>
                </div>
              </aside>
            </Container>
          </div>
        </article>

        <RelatedArticles />
        <ClosingCta href="/about#contact" />
      </main>
      <SiteFooter />
    </>
  )
}
