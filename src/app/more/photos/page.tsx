import Breadcrumb from "@/components/Common/Breadcrumb";
import Photo from "@/components/Photo";
import { PhotosProps } from "@/types/more/photos";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const fetchPhotos = async () => {
  const response = await axios.get("http://localhost:3000/api/more/photos")
  return response.data;
};

const page: FC<PhotosProps> = async () => {
  const photos = await fetchPhotos();
  console.log('phtoos', photos);

  return (
    <>
      <Breadcrumb
        pageName="Photo Gallary"
        description="Enjoy the all memories of T10 Gramin."
      />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4  ">
              {photos?.map((photo) => (
                <Photo key={photo} {...photo} />
              ))}
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default page;







