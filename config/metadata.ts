import type { Metadata } from "next"
import { linksConfig } from "~/config/links"
import { siteConfig } from "~/config/site"

export const metadataConfig: Metadata = {
  openGraph: {
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: { url: `https://bestdesignsystems.s3.us-east-1.amazonaws.com/tools/bDMflOql6wr4/screenshot.webp?v=1748852106025`, width: 1200, height: 630 },
  },
  twitter: {
    // site: "@bestdesignsystems",
    creator: "@abityastunggal",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": linksConfig.feed },
  },
}
