import Link from "next/link"
import plur from "plur"
import type { ComponentProps } from "react"
import { Skeleton } from "~/components/common/skeleton"
import { Tile, TileCaption, TileDivider, TileTitle } from "~/components/web/ui/tile"
import type { TagMany } from "~/server/web/tags/payloads"

type TagCardProps = ComponentProps<typeof Tile> & {
  tag: TagMany
}

const TagCard = ({ tag, ...props }: TagCardProps) => {
  return (
    <Tile asChild {...props}>
      <Link href={`/tags/${tag.slug}`}>
        <TileTitle>{tag.slug}</TileTitle>

        <TileDivider />

        <TileCaption>{`${tag._count.tools} ${plur("tool", tag._count.tools)}`}</TileCaption>
      </Link>
    </Tile>
  )
}

const TagCardSkeleton = () => {
  return (
    <Tile>
      <TileTitle className="w-1/3">
        <Skeleton>&nbsp;</Skeleton>
      </TileTitle>

      <Skeleton className="h-0.5 flex-1" />

      <TileCaption className="w-1/4">
        <Skeleton>&nbsp;</Skeleton>
      </TileCaption>
    </Tile>
  )
}

export { TagCard, TagCardSkeleton }
