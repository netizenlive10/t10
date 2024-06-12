import { Metadata } from 'next'

import HomePageCarousel from '@/components/Home/Carousel'
import PlayersBg from '@/components/Photo/PlayersBg'
import AppStarBackground from '@/components/ui/AppStarBackground'

import Photos from './photos/photos'
import { getCarousel } from '@/actions/home/carousel'
import { getPhotos } from '@/actions/photos'
import { getReels } from '@/actions/videos'
import { videoUrls } from '@/data/videoUrls'

export const metadata: Metadata = {
  title:
    'लोकनेते विलासराव देशमुख क्रिकेट चॅम्पियनशीप ग्रामीण टी 10 जिल्‍हास्‍तरीय क्रिकेट स्‍पर्धा.',
  description: 'This is Home ',
  // other metadata
}

const Home = async ({ searchParams }) => {
  const carousel = await getCarousel()
  const photosResponse = await getPhotos(undefined)
  const videosResponse = await getReels()
  return (
    <main>
      <section className="relative z-10 overflow-hidden pt-18 ">
        <AppStarBackground />
      </section>
      <HomePageCarousel carousel={carousel} />

      <section className="py-8 container mt-5">
        <div className="mb-8 max-w-[600px] md:mb-0 lg:mb-12">
          <h3 className="mb-5 text-1xl font-bold text-white sm:text-2xl">
            Matches
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 pb-4">
          {videoUrls.map((url, index) => (
            <iframe
              height={'100%'}
              key={index}
              className="w-full h-[250px] sm:h-[300px] md:h-[300px] "
              src={url}
              title=" "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>

        <div className="mb-8 max-w-[600px] md:mb-0 lg:mb-12">
          <h3 className="mb-5 text-1xl font-bold text-white sm:text-2xl">
            Photo Gallery
          </h3>
        </div>
        <Photos photosResponse={photosResponse} searchParams={searchParams} />

        <div className="my-8 max-w-[600px] md:mb-0 lg:mb-12">
          <h3 className="mb-5 text-1xl font-bold text-white sm:text-2xl">
            Exclusive
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 pb-4">
          {videosResponse.map((url, index) => (
            <video key={index} className="w-full h-full" controls>
              <source src={`/videos/reels/${url}`} />
            </video>
          ))}
        </div>
      </section>
      <PlayersBg />
    </main>
  )
}

export default Home
