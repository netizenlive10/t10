import { Metadata } from 'next'

import HomePageCarousel from '@/components/Home/Carousel'
import PlayersBg from '@/components/Photo/PlayersBg'
import AppStarBackground from '@/components/ui/AppStarBackground'

import Photos from './photos/photos'
import { getCarousel } from '@/actions/home/carousel'
import { getPhotos } from '@/actions/photos'

export const metadata: Metadata = {
  title:
    'लोकनेते विलासराव देशमुख क्रिकेट चॅम्पियनशीप ग्रामीण टी 10 जिल्‍हास्‍तरीय क्रिकेट स्‍पर्धा.',
  description: 'This is Home ',
  // other metadata
}

const Home = async ({ searchParams }) => {
  const carousel = await getCarousel()
  const photosResponse = await getPhotos(undefined)
  return (
    <main>
      <section className="relative z-10 overflow-hidden pt-18 ">
        <AppStarBackground />
      </section>
      <HomePageCarousel carousel={carousel} />
      <section className="py-8 container mt-5">
        <div className="mb-8 max-w-[600px] md:mb-0 lg:mb-12">
          <h1 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
            Photo Gallery
          </h1>
          <p className="text-base leading-relaxed  text-blue-gray-100 font-semibold">
            लोकनेते विलासराव देशमुख क्रिकेट चॅम्पियनशीप ग्रामीण टी 10
            जिल्‍हास्‍तरीय क्रिकेट स्‍पर्धा.
          </p>
        </div>
        <Photos photosResponse={photosResponse} searchParams={searchParams} />
      </section>
      <PlayersBg />
    </main>
  )
}

export default Home
