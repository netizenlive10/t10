'use client'

import { useState } from 'react'

import Photo from '@/components/Photo'

const Photos = ({ photosResponse, searchParams }) => {
  const handleSlideChange = (index) => {
    console.log(index)
  }

  const [slideIndex, setSlideIndex] = useState(50)

  return (
    <>
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4  ">
            {photosResponse.path.map((path, index) => (
              <Photo
                key={path}
                isDirectory={photosResponse.isDirectory}
                path={path}
                searchParams={searchParams}
                index={index}
                handleSlideChange={handleSlideChange}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Photos
