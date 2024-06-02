import { useRecoilValue, useSetRecoilState } from 'recoil'

import StyledImage from './StyledImage'
import { photoCarouselAtom, photoModalAtom } from '@/store/atoms/photoAtom'

const WithSlider = ({ path, directory, index }) => {
  const setIsPhotoModalOpen = useSetRecoilState(photoModalAtom)
  const api = useRecoilValue(photoCarouselAtom)
  return (
    <div
      onClick={() => {
        setIsPhotoModalOpen(true)
      }}
    >
      <StyledImage
        src={`/images/photos/${directory}/${path}`}
        alt="Thumbnail"
      />
    </div>
  )
}

export default WithSlider
