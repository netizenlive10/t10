'use client'

import { Carousel } from '@material-tailwind/react'

import AppImage from '@/components/ui/AppImage'

import { CarouselProps } from '@/types/home/carousel'

const HomePageCarousel = ({ carousel }: CarouselProps) => {
  return (
    <Carousel
      transition={{ duration: 2 }}
      loop={true}
      autoplay={true}
      className="rounded-xl"
      autoplayDelay={3000}
      navigation={() => <></>}
    >
      {carousel?.map((carouselItem, index) => (
        <AppImage
          key={index}
          src={`/images/home/carousel/${carouselItem}`}
          alt="Carousel"
          width={1200}
          height={700}
          className=" max-h-[80vh] w-full object-contain min-h-[700px]"
        />
      ))}
    </Carousel>
  )
}

export default HomePageCarousel
