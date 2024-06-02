import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import AppSVG from '@/components/ui/AppSVG'

const NotificationBar = () => {
  return (
    <div className=" flex justify-between container py-2">
      <div>Notifications</div>
      <div className=" flex justify-center gap-4">
        <Link href={'www.facebook.com'}>
          <AppSVG
            width={25}
            height={25}
            src="/images/social/facebook.svg"
            alt="Facebook"
          />
        </Link>
        <AppSVG
          width={25}
          height={25}
          src="/images/social/youtube.svg"
          alt="Youtube"
        />
        <AppSVG
          width={25}
          height={25}
          src="/images/social/twitter.svg"
          alt="Twitter"
        />
      </div>
    </div>
  )
}

export default NotificationBar
