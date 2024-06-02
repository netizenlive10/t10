import AppImage from '../ui/AppImage'

const SocialIcon = ({ src, alt, href }) => {
  return (
    <a href={href} target="_blank" referrerPolicy="no-referrer">
      <AppImage
        width={25}
        height={25}
        src={src}
        alt={alt}
        className="w-7 h-6 object-contain"
      />
    </a>
  )
}

export default SocialIcon
