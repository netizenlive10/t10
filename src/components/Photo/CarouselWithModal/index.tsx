'use client'

import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
} from '@material-tailwind/react'
import { useRecoilState } from 'recoil'

// import { Dialog, DialogHeader } from '@/components/ui/dialog'
import { photoCarouselAtom, photoModalAtom } from '@/store/atoms/photoAtom'

export default function DialogCloseButton({ directory, photosResponse }) {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useRecoilState(photoModalAtom)
  const [api, setApi] = useRecoilState(photoCarouselAtom)
  const handleOpen = (value) => setIsPhotoModalOpen(value)

  return (
    // <Dialog open={isPhotoModalOpen} onOpenChange={setIsPhotoModalOpen}>
    //   <DialogContent className="min-w-[75vw] max-w-[1200px]">
    //     <DialogHeader>
    //       <DialogTitle>{directory}</DialogTitle>
    //       <DialogDescription>{new Date().getFullYear()}</DialogDescription>
    //     </DialogHeader>
    //     {/* <div className="   relative"> */}
    //     {/* <AppCarousel
    //       // setApi={setApi}
    //       // CarouselItems={
    //       //   <CarouselItems
    //       //     photosResponse={photosResponse}
    //       //     directory={directory}
    //       //   />
    //       // }
    //       />
    //     </div> */}
    //   </DialogContent>
    // </Dialog>

    <Dialog open={isPhotoModalOpen} size={'xxl'} handler={handleOpen}>
      <DialogHeader>
        {directory.split('_')?.[0]}
        <Button
          variant="filled"
          color="red"
          onClick={() => handleOpen(false)}
          className="mr-1 float-right"
        >
          <span>Cancel</span>
        </Button>
      </DialogHeader>
      <DialogBody>{directory.split('_')?.[1]}</DialogBody>
    </Dialog>
  )
}
