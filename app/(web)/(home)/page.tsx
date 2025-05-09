import type { SearchParams } from "nuqs/server"
import { Suspense } from "react"
import { CountBadge, CountBadgeSkeleton } from "~/app/(web)/(home)/count-badge"
import { NewsletterForm } from "~/components/web/newsletter-form"
import { NewsletterProof } from "~/components/web/newsletter-proof"
import { ToolListingSkeleton } from "~/components/web/tools/tool-listing"
import { ToolQuery } from "~/components/web/tools/tool-query"
import { Intro, IntroDescription, IntroTitle } from "~/components/web/ui/intro"
import { config } from "~/config"

type PageProps = {
  searchParams: Promise<SearchParams>
}

export default function Home(props: PageProps) {
  return (
    <>
      <section className="flex flex-col gap-y-6 w-full mb-6">
        <Intro alignment="center">
          <IntroTitle className="max-w-180 lg:text-5xl/[1.1]!">
            {config.site.tagline}
          </IntroTitle>

          <IntroDescription className="lg:mt-2">{config.site.description}</IntroDescription>

          <Suspense fallback={<CountBadgeSkeleton />}>
            <CountBadge />
          </Suspense>
        </Intro>

        <NewsletterForm
          size="lg"
          className="max-w-sm mx-auto items-center text-center"
          buttonProps={{ children: "Join our community", size: "md", variant: "fancy" }}
        >
          <NewsletterProof />
        </NewsletterForm>
      </section>

      <Suspense fallback={<ToolListingSkeleton />}>
        <ToolQuery searchParams={props.searchParams} options={{ enableFilters: true }} />
      </Suspense>
    </>
  )
}
