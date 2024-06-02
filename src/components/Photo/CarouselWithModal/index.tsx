'use client'

import { DialogDescription } from '@radix-ui/react-dialog'
import { useRecoilState } from 'recoil'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { photoCarouselAtom, photoModalAtom } from '@/store/atoms/photoAtom'

export default function DialogCloseButton({ directory, photosResponse }) {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useRecoilState(photoModalAtom)
  const [api, setApi] = useRecoilState(photoCarouselAtom)

  return (
    <Dialog open={isPhotoModalOpen} onOpenChange={setIsPhotoModalOpen}>
      <DialogContent className="min-w-[75vw] max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>{directory}</DialogTitle>
          <DialogDescription>{new Date().getFullYear()}</DialogDescription>
        </DialogHeader>
        {/* <div className="   relative"> */}
        {/* <AppCarousel
          // setApi={setApi}
          // CarouselItems={
          //   <CarouselItems
          //     photosResponse={photosResponse}
          //     directory={directory}
          //   />
          // }
          />
        </div> */}
      </DialogContent>
    </Dialog>
  )
}
