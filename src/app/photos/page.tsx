import AppBreadcrumb from '@/components/ui/AppBreadcrumb/index'

import Photos from './photos'
import { getPhotos } from '@/actions/photos'
import Batsman from '@/icons/Batsman'
import Bowler from '@/icons/Bowler'

const PhotosPage = async ({ searchParams }) => {
  const photosResponse = await getPhotos(searchParams.directory)
  return (
    <>
      <AppBreadcrumb
        pageName="Photo Gallery"
        description="Enjoy the all memories of T10 Gramin."
      />
      <section id="photo gallery" className="pt-16 md:pt-20 lg:pt-28 relative">
        <Photos photosResponse={photosResponse} searchParams={searchParams} />

        <div className="">
          <Bowler
            className={
              'absolute -left-24 -bottom-6 z-[-1]  drop-shadow-[5px_2px_1px_#4A6CF7] max-h-[600px]'
            }
          />
          <Batsman
            className={
              'absolute -right-20 bottom-0 z-[-1]   drop-shadow-[5px_2px_1px_#4A6CF7]  max-h-[500px]'
            }
          />
        </div>
      </section>
    </>
  )
}

export default PhotosPage
