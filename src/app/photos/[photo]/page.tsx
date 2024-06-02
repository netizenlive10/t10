import Photo from "@/components/Photo";
import { PhotosProps } from "@/types/more/photos";
import axios from "axios";
import { useRouter } from "next/router";

import React, { FC } from "react";

const fetchPhotos = async (pid: string) => {
  const response = await axios.get(
    `http://localhost:3000/api/more/photos/${pid}`,
  );
  return response.data;
};

const PhotoPage = async ({ searchParams }) => {
  // const photos = await fetchPhotos(searchParams.photo);
  // console.log("on he page");
  const photos = [];
  return (
    <>
      {/* <Breadcrumb
        pageName="Photo Gallery"
        description="Enjoy the all memories of T10 Gramin."
      /> */}
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4  ">
              {photos?.map((photo) => <Photo key={photo} {...photo} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoPage;
