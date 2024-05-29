import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Photo = ({ thumbnail, heading, match_date }) => {
  return (
    <div className="relative selection:bg-none cursor-pointer">
      <Link href={`/images/more/photos/${thumbnail}`}>
        <div className="absolute left-3 top-3 rounded-md p-1 px-2 s shadow-primary-400  fill-black  dark:fill-white dark:bg-gray-dark dark:shadow-sticky-dark bg-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            id="camera"
            className="w-5 h-4"
          >
            <path d="M10 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8-3h-2.4a.888.888 0 0 1-.789-.57l-.621-1.861A.89.89 0 0 0 13.4 2H6.6c-.33 0-.686.256-.789.568L5.189 4.43A.889.889 0 0 1 4.4 5H2C.9 5 0 5.9 0 7v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11a5 5 0 0 1-5-5 5 5 0 1 1 10 0 5 5 0 0 1-5 5zm7.5-7.8a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"></path>
          </svg>
        </div>
        <Image
          width={400}
          height={300}
          className="max-w-full rounded-lg  object-cover h-full w-full"
          src={`/images/more/photos/${thumbnail}/thumbnail.jpg`}
          alt={heading}
        />
        <div className="absolute bottom-0 shadow-xl rounded-lg  bg-transparent shadow-slate-800 w-full backdrop-blur ">
          <h3 className="font-semibold ml-3 text-white">{heading}</h3>
          <p className="ml-3 text-slate-300  text-sm mb-2">{new Date().getFullYear()}</p>
        </div>
      </Link>
    </div>
  )
}

export default Photo
