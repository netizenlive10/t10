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
      <head />

      <body className={`bg-black ${inter.className}`}>
        <NextTopLoader color="#2E78C7" height={2} />

        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
