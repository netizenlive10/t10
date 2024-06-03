import { Metadata } from 'next'

import HomePageCarousel from '@/components/Home/Carousel'
import AppStartBackground from '@/components/ui/AppStarBackground'

import { getCarousel } from '@/actions/home/carousel'
import { CarouselProps } from '@/types/home/carousel'

export const metadata: Metadata = {
  title: 'Free Next.js Template for Startup and SaaS',
  description: 'This is Home for Startup Nextjs Template',
  // other metadata
}

const Home = async () => {
  const carousel: CarouselProps = await getCarousel()
  return (
    <main className="bg-dark">
      {/* <AppBreadcrumb pageName="" description="" /> */}
      <section className="relative z-10 overflow-hidden pt-18 lg:pt-[110px]">
        <AppStartBackground />
      </section>
      <HomePageCarousel carousel={carousel} />
    </main>
  )
}

export default Home
