import AppImage from '../ui/AppImage'

const StyledImage = ({ alt, src }) => {
  return (
    <AppImage
      width={400}
      height={300}
      className="h-full w-full object-cover object-center max-h-[270px]"
      alt={alt}
      src={src}
    />
  )
}

export default StyledImage
