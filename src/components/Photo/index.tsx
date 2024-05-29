import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
const Photo = ({ searchParams, fileName, index, handleSlideChange }) => {
  const photoState = useMemo(() => {
    if (searchParams?.directory) {
      return {
        src: `/images/more/photos/${searchParams.directory}/${fileName}`,
        href: "#",
        hasImageViewer: true,
        fileName: fileName,
        handleClick: () => {
          handleSlideChange(index)
        },
      };
    } else {
      return {
        src: `/images/more/photos/${fileName}/thumbnail.jpg`,
        href: `/more/photos?directory=${fileName}`,
        hasImageViewer: false,
        fileName: fileName,
        handleClick: undefined,
      };
    }
  }, [fileName, searchParams?.directory, handleSlideChange, index]);

  return (
    <div className="relative cursor-pointer selection:bg-none">
      <Link href={photoState.href} onClick={photoState.handleClick}>
        {!photoState.hasImageViewer && (
          <div className="s shadow-primary-400 absolute left-3 top-3 rounded-md bg-white fill-black  p-1  px-2 dark:bg-gray-dark dark:fill-white dark:shadow-sticky-dark ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              id="camera"
              className="h-4 w-5"
            >
              <path d="M10 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8-3h-2.4a.888.888 0 0 1-.789-.57l-.621-1.861A.89.89 0 0 0 13.4 2H6.6c-.33 0-.686.256-.789.568L5.189 4.43A.889.889 0 0 1 4.4 5H2C.9 5 0 5.9 0 7v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11a5 5 0 0 1-5-5 5 5 0 1 1 10 0 5 5 0 0 1-5 5zm7.5-7.8a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"></path>
            </svg>
          </div>
        )}
        <Image
          width={400}
          height={300}
          className="h-full w-full  max-w-full rounded-lg object-cover"
          src={photoState.src}
          alt={photoState.fileName}
          loading="lazy"
        />
        {!photoState.hasImageViewer && (
          <>
            <div className="absolute bottom-0 w-full rounded-lg  bg-transparent shadow-xl shadow-slate-800 backdrop-blur ">
              <h3 className="ml-3 font-semibold text-white">
                {photoState.fileName}
              </h3>
              <p className="mb-2 ml-3  text-sm text-slate-300">
                {new Date().getFullYear()}
              </p>
            </div>
          </>
        )}
      </Link>
    </div>
  );
};

export default Photo;
