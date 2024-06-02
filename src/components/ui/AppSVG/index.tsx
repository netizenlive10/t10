import Image from 'next/image'
import { memo } from 'react'

import { SVGProps } from '@/types/SVG/svg'

const AppSVG = ({
  height,
  width,
  src,
  alt,
  className,
  objectFit = 'contain',
}: SVGProps) => {
  return (
    <Image
      height={height}
      width={width}
      src={src}
      alt={alt}
      className={className}
      objectFit={objectFit}
    />
  )
}

export default memo(AppSVG)
