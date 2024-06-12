'use client'

import Photo from '@/components/Photo'
import CarouselWithModal from '@/components/Photo/CarouselWithModal'

const Photos = ({ photosResponse, searchParams }) => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4   pb-4">
          {photosResponse.path.map((path, index) => (
            <Photo
              key={path}
              isDirectory={photosResponse.isDirectory}
              path={path}
              searchParams={searchParams}
              index={index}
            />
          ))}
        </div>
        {!photosResponse.isDirectory && (
          <CarouselWithModal
            photosResponse={photosResponse}
            directory={searchParams.directory}
          />
        )}
      </div>
    </>
  )
}

export default Photos
