import { capitalCase } from "change-case"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { SearchParams } from "nuqs"
import { Suspense, cache } from "react"
import { ToolListingSkeleton } from "~/components/web/tools/tool-listing"
import { ToolQuery } from "~/components/web/tools/tool-query"
import { Breadcrumbs } from "~/components/web/ui/breadcrumbs"
import { Intro, IntroTitle } from "~/components/web/ui/intro"
import { metadataConfig } from "~/config/metadata"
import type { TagOne } from "~/server/web/tags/payloads"
import { findTag, findTagSlugs } from "~/server/web/tags/queries"

type PageProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<SearchParams>
}

const getTag = cache(async ({ params }: PageProps) => {
  const { slug } = await params
  const tag = await findTag({ where: { slug } })

  if (!tag) {
    notFound()
  }

  return tag
})

const getMetadata = (tag: TagOne): Metadata => {
  return {
    title: `Tools tagged "${tag.name}"`,
  }
}

export const generateStaticParams = async () => {
  const tags = await findTagSlugs({})
  return tags.map(({ slug }) => ({ slug }))
}

export const generateMetadata = async (props: PageProps) => {
  const tag = await getTag(props)
  const url = `/tags/${tag.slug}`

  return {
    ...getMetadata(tag),
    alternates: { ...metadataConfig.alternates, canonical: url },
    openGraph: { ...metadataConfig.openGraph, url },
  }
}

export default async function TagPage(props: PageProps) {
  const tag = await getTag(props)
  const { title } = getMetadata(tag)

  return (
    <>
      <Breadcrumbs
        items={[
          {
            href: "/tags",
            name: "Tags",
          },
          {
            href: `/tags/${tag.slug}`,
            name: capitalCase(tag.slug),
          },
        ]}
      />

      <Intro>
        <IntroTitle>{`${title}`}</IntroTitle>
      </Intro>

      <Suspense fallback={<ToolListingSkeleton />}>
        <ToolQuery
          searchParams={props.searchParams}
          where={{ tags: { some: { slug: tag.slug } } }}
          placeholder={`Search in "${tag.name}"`}
        />
      </Suspense>
    </>
  )
}
