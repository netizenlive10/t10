import Image from 'next/image'

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

        <div className="flex align-center justify-between relative">
          <Image
            src="/assets/bowler.png"
            alt="bowler"
            width={300}
            height={300}
            className="w-[300px] h-[250px] md:h-96 object-contain drop-shadow-[5px_2px_1px_#4A6CF7]"
            priority={true}
          />
          <Image
            src="/assets/batsman.png"
            alt="bowler"
            width={300}
            height={300}
            className="w-[300px] h-[250px] md:h-96 object-contain drop-shadow-[5px_2px_1px_#4A6CF7]"
            priority={true}
          />
        </div>
      </section>
    </>
  )
}

export default PhotosPage
