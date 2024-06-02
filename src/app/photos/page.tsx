import AppBreadcrumb from '@/components/ui/AppBreadcrumb/index'

import Photos from './photos'
import { getPhotos } from '@/actions/photos'

const PhotosPage = async ({ searchParams }) => {
  const photosResponse = await getPhotos(searchParams.directory)
  return (
    <>
      <AppBreadcrumb
        pageName="Photo Gallery"
        description="Enjoy the all memories of T10 Gramin."
      />
      <section id="photo gallery" className="pt-16 md:pt-20 lg:pt-28">
        <Photos photosResponse={photosResponse} searchParams={searchParams} />
      </section>
    </>
  )
}

export default PhotosPage
