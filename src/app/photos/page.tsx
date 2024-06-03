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
        description="लोकनेते विलासराव देशमुख क्रिकेट चॅम्पियनशीप ग्रामीण टी 10 जिल्‍हास्‍तरीय क्रिकेट स्‍पर्धा."
      />
      <section
        id="photo gallery"
        className="pt-8 md:pt-12 lg:pt-10 relative mb-2 "
      >
        <Photos photosResponse={photosResponse} searchParams={searchParams} />

        <div className="">
          <Bowler
            className={
              'absolute -left-24 -bottom-6 z-[-1]  drop-shadow-[5px_2px_1px_#4A6CF7] max-h-[450px]'
            }
          />
          <Batsman
            className={
              'absolute -right-20 bottom-0 z-[-1]   drop-shadow-[5px_2px_1px_#4A6CF7]  max-h-[350px]'
            }
          />
        </div>
      </section>
    </>
  )
}

export default PhotosPage
