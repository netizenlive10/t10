import Link from 'next/link'

import StyledImage from './StyledImage'

const WithHeader = ({ path }) => {
  return (
    <Link href={`/photos?directory=${path}`}>
      <div className="s shadow-primary-400 absolute left-3 top-3 rounded-md   p-1  px-2 bg-gray-dark fill-white shadow-sticky-dark shadow-slate-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          id="camera"
          className="h-4 w-5"
        >
          <path d="M10 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8-3h-2.4a.888.888 0 0 1-.789-.57l-.621-1.861A.89.89 0 0 0 13.4 2H6.6c-.33 0-.686.256-.789.568L5.189 4.43A.889.889 0 0 1 4.4 5H2C.9 5 0 5.9 0 7v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11a5 5 0 0 1-5-5 5 5 0 1 1 10 0 5 5 0 0 1-5 5zm7.5-7.8a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"></path>
        </svg>
      </div>
      <StyledImage
        src={`/images/photos/${path}/thumbnail.jpg`}
        alt="Thumbnail"
      />
      <>
        <div className="absolute bottom-0 w-full   bg-transparent  backdrop-brightness-50">
          <h3 className="ml-3 font-semibold text-white ">
            {path?.split('_')[1]}
          </h3>
          <p className="mb-2 ml-3  text-sm  text-blue-gray-50">
            {path?.split('_')?.[2]}
          </p>
        </div>
      </>
    </Link>
  )
}

export default WithHeader
