import AppImage from '@/components/ui/AppImage'
import { CarouselItem } from '@/components/ui/carousel'

const CarouselItems = ({ photosResponse, directory }) => {
  return photosResponse.path.map((path, index) => (
    <CarouselItem key={index} className="w-[900px]">
      <AppImage
        width={550}
        height={400}
        src={`/images/photos/${directory}/${path}`}
        alt="T10"
      />
    </CarouselItem>
  ))
}

export default CarouselItems
