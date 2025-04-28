import { isTruthy } from "@curiousleaf/utils"
import type { Prisma } from "@prisma/client"
import { endOfDay, startOfDay } from "date-fns"
import type { TagsTableSchema } from "~/server/admin/tags/schema"
import { db } from "~/services/db"

export const findTags = async (search: TagsTableSchema, where?: Prisma.TagWhereInput) => {
  const { name, page, perPage, sort, from, to, operator } = search

  // Offset to paginate the results
  const offset = (page - 1) * perPage

  // Column and order to sort by
  const orderBy = sort.map(item => ({ [item.id]: item.desc ? "desc" : "asc" }) as const)

  // Convert the date strings to Date objects and adjust the range
  const fromDate = from ? startOfDay(new Date(from)) : undefined
  const toDate = to ? endOfDay(new Date(to)) : undefined

  const expressions: (Prisma.TagWhereInput | undefined)[] = [
    // Filter by name
    name ? { name: { contains: name, mode: "insensitive" } } : undefined,

    // Filter by createdAt
    fromDate || toDate ? { createdAt: { gte: fromDate, lte: toDate } } : undefined,
  ]

  const whereQuery: Prisma.TagWhereInput = {
    [operator.toUpperCase()]: expressions.filter(isTruthy),
  }

  // Transaction is used to ensure both queries are executed in a single transaction
  const [tags, tagsTotal] = await db.$transaction([
    db.tag.findMany({
      where: { ...whereQuery, ...where },
      orderBy,
      take: perPage,
      skip: offset,
    }),

    db.tag.count({
      where: { ...whereQuery, ...where },
    }),
  ])

  const pageCount = Math.ceil(tagsTotal / perPage)
  return { tags, tagsTotal, pageCount }
}

export const findTagList = async () => {
  return db.tag.findMany({
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  })
}

export const findTagBySlug = async (slug: string) => {
  return db.tag.findUnique({
    where: { slug },
    include: { tools: true },
  })
}
