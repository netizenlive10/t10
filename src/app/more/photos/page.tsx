import Breadcrumb from "@/components/Common/Breadcrumb";
import Photo from "@/components/Photo";
import { PhotosProps } from "@/types/more/photos";
import axios from "axios";
import Image from "next/image";

import React from "react";
import Photos from ".";

const fetchPhotos = async (directory: string) => {
  const response = await axios.get("http://localhost:3000/api/more/photos", {
    params: {
      directory: directory,
    },
  });
  return response.data;
};

const PhotosPage = async ({ searchParams }) => {
  const photos = await fetchPhotos(searchParams.directory);
  
  return (
    <>
      <Breadcrumb
        pageName="Photo Gallery"
        description="Enjoy the all memories of T10 Gramin."
      />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
       <Photos photos={photos} searchParams={searchParams}/>
      </section>
    </>
  );
};

export default PhotosPage;
