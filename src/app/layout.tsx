'use client'

import '../styles/index.css'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ui/AppScrollToTop'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title>
          लोकनेते विलासराव देशमुख क्रिकेट चॅम्पियनशीप ग्रामीण टी 10
          जिल्‍हास्‍तरीय क्रिकेट स्‍पर्धा.
        </title>
      </head>

      <body className={`bg-black ${inter.className}`}>
        <NextTopLoader color="#2E78C7" height={2} />

        <Providers>
          <Header />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
