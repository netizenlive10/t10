import Photos from '.'
import React from 'react'

import AppBreadcrumb from '@/components/ui/AppBreadcrumb/index'

import { getPhotos } from '@/utils/photos'

const PhotosPage = async ({ searchParams }) => {
  const photos = await getPhotos(searchParams.directory)

  return (
    <>
      <AppBreadcrumb
        pageName="Photo Gallery"
        description="Enjoy the all memories of T10 Gramin."
      />
      <section id="photo gallery" className="pt-16 md:pt-20 lg:pt-28">
        <Photos photos={photos} searchParams={searchParams} />
      </section>
    </>
  )
}

export default PhotosPage
