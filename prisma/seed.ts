import { PrismaClient, ToolStatus } from "@prisma/client"
import { addDays } from "date-fns"

const prisma = new PrismaClient()

async function main() {
  const now = new Date()

  console.log("Starting seeding...")

  const admin = await prisma.user.createMany({
    data: [
      {
        name: "Admin User",
        email: "admin@dirstarter.com",
        emailVerified: true,
        role: "admin",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "User",
        email: "user@dirstarter.com",
        emailVerified: true,
        role: "user",
        createdAt: now,
        updatedAt: now,
      },
    ],
  })

  console.log("Created users")

  // Create categories
  const categories = await prisma.category.createMany({
    data: [
      { name: "Frontend", slug: "frontend", label: "Frontend Development" },
      { name: "Backend", slug: "backend", label: "Backend Development" },
      { name: "DevOps", slug: "devops", label: "DevOps & Deployment" },
      { name: "Design Tools", slug: "design-tools", label: "Design & UI/UX" },
      { name: "Productivity", slug: "productivity", label: "Productivity Tools" },
      { name: "Testing", slug: "testing", label: "Testing & QA" },
      { name: "Learning", slug: "learning", label: "Learning Resources" },
      { name: "AI Tools", slug: "ai-tools", label: "AI & Machine Learning" },
    ],
  })

  console.log("Created categories")

  // Create tags
  const tags = await prisma.tag.createMany({
    data: [
      { name: "React", slug: "react" },
      { name: "Vue", slug: "vue" },
      { name: "Angular", slug: "angular" },
      { name: "Svelte", slug: "svelte" },
      { name: "Node.js", slug: "nodejs" },
      { name: "Python", slug: "python" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "CSS", slug: "css" },
      { name: "HTML", slug: "html" },
      { name: "Rust", slug: "rust" },
      { name: "Go", slug: "go" },
      { name: "AWS", slug: "aws" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "CI/CD", slug: "ci-cd" },
      { name: "Free", slug: "free" },
      { name: "Paid", slug: "paid" },
      { name: "Open Source", slug: "open-source" },
      { name: "AI", slug: "ai" },
      { name: "API", slug: "api" },
    ],
  })

  console.log("Created tags")

  // Create tools
  const toolsData = [
    {
      name: "VS Code",
      slug: "vscode",
      websiteUrl: "https://code.visualstudio.com",
      tagline: "Free source-code editor made by Microsoft",
      description:
        "Visual Studio Code is a lightweight but powerful source code editor with support for many programming languages through extensions.",
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://code.visualstudio.com/opengraphimg/opengraph-home.png",
      categories: ["frontend"],
      tags: ["free", "open-source"],
      owner: { connect: { email: "admin@dirstarter.com" } },
    },
    {
      name: "Next.js",
      slug: "nextjs",
      websiteUrl: "https://nextjs.org",
      tagline: "The full-stack React framework for the web",
      description:
        "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
      isFeatured: true,
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://assets.vercel.com/image/upload/front/nextjs/twitter-card.png",
      categories: ["frontend"],
      tags: ["typescript", "javascript", "free", "open-source"],
    },
    {
      name: "Docker",
      slug: "docker",
      websiteUrl: "https://www.docker.com",
      tagline: "Accelerate how you build, share and run modern applications",
      description:
        "Docker is an open platform for developing, shipping, and running applications in containers.",
      isFeatured: true,
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://www.docker.com/app/uploads/2023/06/meta-image-homepage-1110x580.png",
      categories: ["devops"],
      tags: ["docker", "free", "open-source"],
    },
    {
      name: "Figma",
      slug: "figma",
      websiteUrl: "https://www.figma.com",
      tagline: "Design, prototype, and collaborate all in the browser",
      description:
        "Figma is a vector graphics editor and prototyping tool, primarily web-based with additional offline features through desktop applications.",
      isFeatured: true,
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl:
        "https://cdn.sanity.io/images/599r6htc/regionalized/1adfa5a99040c80af7b4b5e3e2cf845315ea2367-2400x1260.png?w=1200&q=70&fit=max&auto=format",
      categories: ["design-tools"],
      tags: ["free", "paid"],
    },
    {
      name: "Node.js",
      slug: "nodejs",
      websiteUrl: "https://nodejs.org",
      tagline: "JavaScript runtime built on Chrome's V8 JavaScript engine",
      description:
        "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl:
        "https://nodejs.org/en/next-data/og/announcement/Node.js%20%E2%80%94%20Run%20JavaScript%20Everywhere",
      categories: ["backend"],
      tags: ["nodejs", "javascript", "free", "open-source"],
    },
    {
      name: "Claude",
      slug: "claude",
      websiteUrl: "https://claude.ai",
      tagline: "Advanced AI assistant for coding and analysis",
      description:
        "Claude is an AI assistant by Anthropic that excels at coding, analysis, and creative tasks. It can help with code review, debugging, and explaining complex concepts.",
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://claude.ai/images/claude_ogimage.png",
      categories: ["productivity", "ai-tools"],
      tags: ["paid", "ai"],
    },
    {
      name: "Jest",
      slug: "jest",
      websiteUrl: "https://jestjs.io",
      tagline: "Delightful JavaScript Testing",
      description:
        "Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.",
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://jestjs.io/img/opengraph.png",
      categories: ["testing"],
      tags: ["typescript", "javascript", "free", "open-source"],
    },
    {
      name: "AWS",
      slug: "aws",
      websiteUrl: "https://aws.amazon.com",
      tagline: "The most comprehensive and broadly adopted cloud platform",
      description:
        "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      categories: ["devops"],
      tags: ["aws", "paid"],
    },
    {
      name: "MDN Web Docs",
      slug: "mdn-web-docs",
      websiteUrl: "https://developer.mozilla.org",
      tagline: "Resources for developers, by developers",
      description:
        "MDN Web Docs is an open-source, collaborative project documenting Web platform technologies.",
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://developer.mozilla.org/mdn-social-share.d893525a4fb5fb1f67a2.png",
      categories: ["learning"],
      tags: ["javascript", "css", "html", "free", "open-source"],
    },
    {
      name: "ChatGPT",
      slug: "chatgpt",
      websiteUrl: "https://chatgpt.com",
      tagline: "A conversational AI system that listens, learns, and challenges",
      description:
        "ChatGPT is a large language model developed by OpenAI that can generate human-like text based on the context and prompt it's given.",
      isFeatured: true,
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://cdn.oaistatic.com/assets/chatgpt-share-og-u7j5uyao.webp",
      categories: ["ai-tools", "productivity"],
      tags: ["free", "paid", "ai"],
    },
    {
      name: "Tailwind CSS",
      slug: "tailwind-css",
      websiteUrl: "https://tailwindcss.com",
      tagline: "A utility-first CSS framework for rapid UI development",
      description:
        "Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://tailwindcss.com/opengraph-image.jpg",
      categories: ["frontend"],
      tags: ["css", "free", "open-source"],
    },
    {
      name: "React",
      slug: "react",
      websiteUrl: "https://react.dev",
      tagline: "The library for web and native user interfaces",
      description:
        "React is a JavaScript library for building user interfaces, particularly single-page applications.",
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl: "https://react.dev/images/og-home.png",
      categories: ["frontend"],
      tags: ["react", "javascript", "free", "open-source"],
    },
    {
      name: "Postman",
      slug: "postman",
      websiteUrl: "https://www.postman.com",
      tagline: "API platform for building and using APIs",
      description:
        "Postman is an API platform for developers to design, build, test and iterate their APIs.",
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl:
        "https://voyager.postman.com/social-preview/postman-api-platform-social-preview-2.jpeg",
      categories: ["testing", "backend"],
      tags: ["free", "paid", "api"],
    },
    {
      name: "GitHub",
      slug: "github",
      websiteUrl: "https://github.com",
      tagline: "Build and ship software on a single, collaborative platform",
      description:
        "GitHub is a code hosting platform for version control and collaboration, letting you and others work together on projects.",
      isFeatured: true,
      status: ToolStatus.Published,
      publishedAt: now,
      screenshotUrl:
        "https://github.githubassets.com/images/modules/site/social-cards/github-social.png",
      categories: ["devops"],
      tags: ["free", "paid", "open-source", "ci-cd"],
    },
    {
      name: "SvelteKit",
      slug: "sveltekit",
      websiteUrl: "https://svelte.dev",
      tagline: "The fastest way to build Svelte apps",
      description:
        "SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.",
      status: ToolStatus.Scheduled,
      publishedAt: addDays(now, 7),
      screenshotUrl: "https://svelte.dev/images/twitter-thumbnail.jpg",
      categories: ["frontend"],
      tags: ["svelte", "javascript", "free", "open-source"],
      owner: { connect: { email: "admin@dirstarter.com" } },
    },
    {
      name: "Rust",
      slug: "rust",
      websiteUrl: "https://www.rust-lang.org",
      tagline: "A language empowering everyone to build reliable and efficient software",
      description:
        "Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency.",
      status: ToolStatus.Draft,
      screenshotUrl: "https://www.rust-lang.org/static/images/rust-social-wide.jpg",
      categories: ["backend"],
      tags: ["rust", "free", "open-source"],
      owner: { connect: { email: "admin@dirstarter.com" } },
    },
    {
      name: "Kubernetes",
      slug: "kubernetes",
      websiteUrl: "https://kubernetes.io",
      tagline: "Production-Grade Container Orchestration",
      description:
        "Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.",
      status: ToolStatus.Draft,
      screenshotUrl: "https://kubernetes.io/images/kubernetes-open-graph.png",
      categories: ["devops"],
      tags: ["kubernetes", "free", "open-source"],
      owner: { connect: { email: "admin@dirstarter.com" } },
    },
  ]

  // Create tools with their relationships
  for (const { categories, tags, ...toolData } of toolsData) {
    await prisma.tool.create({
      data: {
        ...toolData,
        faviconUrl: `https://www.google.com/s2/favicons?sz=128&domain_url=${toolData.websiteUrl}`,
        categories: { connect: categories.map(slug => ({ slug })) },
        tags: { connect: tags.map(slug => ({ slug })) },
      },
    })
  }

  console.log("Created tools")
  console.log("Seeding completed!")
}

main()
  .catch(e => {
    console.error("Error during seeding:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
