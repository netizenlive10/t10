'use client'

import { Carousel } from '@material-tailwind/react'

import AppImage from '@/components/ui/AppImage'

const videoUrls = [
  'https://www.youtube.com/embed/hO75FFb8tGM?si=T4pVK6EpQt5BxefT',
  'https://www.youtube.com/embed/yRo0vTwdkx8?si=Umh7YeQwNDrjQ0mj',
  'https://www.youtube.com/embed/JPYcTMVkbUo?si=OZCrB_byuXaHNKvJ',
  'https://www.youtube.com/embed/jDf_CgC8ZCA?si=TcCsmMmLh8WtiCOC',
]

const HomePageCarousel = ({ carousel }) => {
  return (
    <Carousel
      transition={{ duration: 2 }}
      loop={true}
      className="rounded-xl"
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
      {videoUrls.map((url, index) => (
        <iframe
          key={index}
          className="h-full  min-h-[700px] w-full rounded-lg"
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
