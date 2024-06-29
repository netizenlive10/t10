'use client'

import {
  Carousel,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
} from '@material-tailwind/react'
import { X } from 'lucide-react'
import { useRecoilState } from 'recoil'

// import { Dialog, DialogHeader } from '@/components/ui/dialog'
import AppImage from '@/components/ui/AppImage'

import { photoModalAtom } from '@/store/atoms/photoAtom'

export default function DialogCloseButton({ directory, photosResponse }) {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useRecoilState(photoModalAtom)
  const handleOpen = (value) => setIsPhotoModalOpen(value)

  return (
    <Dialog
      open={isPhotoModalOpen}
      size={'xxl'}
      className=" bg-bg-color-dark"
      handler={handleOpen}
    >
      <DialogHeader className=" text-white flex  justify-between   items-center">
        {directory.split('_')?.[1]}
        <IconButton
          className="rounded-full"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <X />
        </IconButton>
      </DialogHeader>

      <DialogBody className="  text-gray-300">
        <div>{directory.split('_')?.[2]}</div>

        <Carousel className=" min-h-[80vh] w-full">
          {photosResponse.path?.map((path, index) => (
            <AppImage
              key={index}
              src={`/images/photos/${directory}/${path}`}
              alt="Carousel"
              width={1200}
              height={500}
              className="max-h-[80vh] w-full object-contain min-h-[700px]"
            />
          ))}
        </Carousel>
      </DialogBody>
    </Dialog>
  )
}
