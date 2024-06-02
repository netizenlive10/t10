import SocialIcon from './SocialIcon'

const NotificationBar = () => {
  return (
    <div className=" flex justify-between container py-2">
      <div></div>
      <div className=" flex justify-center gap-4">
        <SocialIcon
          href="https://facebook.com"
          src="/images/social/facebook.svg"
          alt="Facebook"
        />
        <SocialIcon
          href="https://youtube.com"
          src="/images/social/youtube.svg"
          alt="Youtube"
        />
        <SocialIcon
          href="https://twitter.com"
          src="/images/social/twitter.svg"
          alt="Twitter"
        />
      </div>
    </div>
  )
}

export default NotificationBar
