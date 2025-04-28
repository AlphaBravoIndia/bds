import type { Tag } from "@prisma/client"
import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from "nuqs/server"
import * as z from "zod"
import { getSortingStateParser } from "~/lib/parsers"

export const tagsTableParamsSchema = {
  name: parseAsString.withDefault(""),
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(25),
  sort: getSortingStateParser<Tag>().withDefault([{ id: "name", desc: false }]),
  from: parseAsString.withDefault(""),
  to: parseAsString.withDefault(""),
  operator: parseAsStringEnum(["and", "or"]).withDefault("and"),
}

export const tagsTableParamsCache = createSearchParamsCache(tagsTableParamsSchema)
export type TagsTableSchema = Awaited<ReturnType<typeof tagsTableParamsCache.parse>>

export const tagSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  slug: z.string().optional(),
  tools: z.array(z.string()).optional(),
})

export type TagSchema = z.infer<typeof tagSchema>
