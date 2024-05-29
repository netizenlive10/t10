import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import useKeypress from "react-use-keypress";
// import type { ImageProps } from "../utils/types";
import SharedModal from "./SharedModal";
import { PhotosProps } from "@/types/more/photos";

export default function Modal({
  images,
  onClose,
  index = 3,
  searchParams
}: {
  images: PhotosProps;
  onClose?: () => void;
}) {
  let overlayRef = useRef();

  // let index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    // router.push("/", undefined, { shallow: true });
    onClose();
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    // router.push(
    //   {
    //     query: { photoId: newVal },
    //   },
    //   `/p/${newVal}`,
    //   { shallow: true },
    // );
  }

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 top-0 flex w-screen items-center justify-center bg-black p-4">
        <SharedModal
          index={curIndex}
          direction={direction}
          images={images}
          changePhotoId={changePhotoId}
          closeModal={handleClose}
          navigation={true}
          searchParams={searchParams}
        />
      </div>
    </Dialog>

    // <Dialog
    //   static
    //   open={true}
    //   onClose={handleClose}
    //   initialFocus={overlayRef}
    //   className="fixed inset-0 z-10 flex items-center justify-center"
    // >
    //   {/* <Dialog
    //     ref={overlayRef}
    //     as={motion.div}
    //     key="backdrop"
    //     className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //   /> */}
    //   {/*  */}
    // </Dialog>
  );
}
