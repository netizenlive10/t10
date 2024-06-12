import PlayersBg from '@/components/Photo/PlayersBg'
import AppBreadcrumb from '@/components/ui/AppBreadcrumb/index'

import Photos from './photos'
import { getPhotos } from '@/actions/photos'

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
        className="pt-8 md:pt-12 lg:pt-10  mb-2 border-white/[.15] border-b"
      >
        <Photos photosResponse={photosResponse} searchParams={searchParams} />

        <PlayersBg />
      </section>
    </>
  )
}

export default PhotosPage
