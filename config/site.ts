interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'NEXT BOILERPLATE',
  description:
    'An open source application built using the new router, server components and everything new in Next.js 13.',
  url: 'https://next.moyaojun.com',
  ogImage: 'https://next.moyaojun.com/og.jpg',
  links: {
    github: 'https://github.com/Mask-MJ',
  },
}
