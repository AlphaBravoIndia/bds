import { getUrlHostname } from "@curiousleaf/utils"
import { env } from "~/env"

export const siteConfig = {
  name: "Best Design Systems",
  tagline: "Discover the best design systems, UI kits, and component libraries for Figma, Framer, React, Vue, Tailwind CSS and more.",
  description:
    "Discover the best design systems, UI kits, and component libraries for Figma, Framer, React, Vue, Tailwind CSS and more.",
  email: env.NEXT_PUBLIC_SITE_EMAIL,
  url: env.NEXT_PUBLIC_SITE_URL,
  domain: getUrlHostname(env.NEXT_PUBLIC_SITE_URL),
}
