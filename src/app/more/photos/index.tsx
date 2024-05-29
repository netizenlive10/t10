"use client";
import Photo from "@/components/Photo";
import Modal from "@/components/Test/Modal";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Photos = ({ photos, searchParams }) => {
  const handleSlideChange = (index) => {
    console.log(index);
  };

  const [slideIndex, setSlideIndex] = useState(50);

  return (
    <>
      {/* <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4  ">
            {photos.map((photo, index) => (
              <Photo
                key={photo}
                fileName={photo}
                searchParams={searchParams}
                index={index}
                handleSlideChange={handleSlideChange}
              />
            ))}
          </div>
        </div>
      </div> */}

      <div className=" flex  w-full items-center justify-center">
        <div className=" h-lvh  w-[1300px] overflow-hidden">
          <Modal images={photos} searchParams={searchParams}/>
         
        </div>
      </div>
    </>
  );
};

export default Photos;
