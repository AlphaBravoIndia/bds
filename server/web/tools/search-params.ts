import { createSearchParamsCache, parseAsArrayOf, parseAsInteger, parseAsString } from "nuqs/server"

export const toolsSearchParams = {
  q: parseAsString.withDefault(""),
  category: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
  sort: parseAsString.withDefault(""),
  perPage: parseAsInteger.withDefault(35),
}

export const toolsSearchParamsCache = createSearchParamsCache(toolsSearchParams)
