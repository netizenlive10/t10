'use client'

import { Carousel } from '@material-tailwind/react'

import AppImage from '@/components/ui/AppImage'

import { videoUrls } from '@/data/videoUrls'

const HomePageCarousel = ({ carousel }) => {
  return (
    <Carousel
      transition={{ duration: 2 }}
      loop={true}
      className="rounded-xl h-[150px] sm:h-[330px] md:h-[450px] lg:h-full max-h-[70vh]  bg-dark overflow-hidden"
      navigation={() => <></>}
    >
      {carousel?.map((carouselItem: string, index: number) => (
        <AppImage
          key={index}
          src={`/images/home/carousel/${carouselItem}`}
          alt="Carousel"
          width={1200}
          height={700}
          className="w-full object-cover h-full"
        />
      ))}

      {videoUrls.map((url, index) => (
        <iframe
          height={'100%'}
          key={index}
          className="w-full h-[150px] sm:h-[330px] md:h-[450px]  lg:h-[70vh] "
          src={url}
          title=" "
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ))}
    </Carousel>
  )
}

export default HomePageCarousel
