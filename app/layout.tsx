import type { Metadata } from 'next'
import type { LayoutProps } from '@/types'

import { Analytics } from '@vercel/analytics/react'
// 导入谷歌字体
import { Inter } from 'next/font/google'
// 导入本地字体
import localFont from 'next/font/local'

// 导入站点配置
import { siteConfig } from '@/config/site'
// 导入合并类名函数
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/common/theme-provider'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const calSans = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-calSans',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'mask',
      url: 'https://moyaojun.com',
    },
  ],
  creator: 'mask',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@mask',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, calSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
