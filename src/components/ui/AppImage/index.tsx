'use client'

import Image from 'next/image'
import { memo, useEffect, useState } from 'react'

import { ImageProps } from '@/types/Image/index'

const AppImage = ({ height, width, src, alt, className }: ImageProps) => {
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
  }, [src])

  return (
    <Image
      height={height}
      width={width}
      src={error ? '/assets/social/brokenImage.svg' : src}
      alt={alt}
      className={`object-contain ${className}`}
      loading="lazy"
      onError={setError}
    />
  )
}

export default memo(AppImage)
