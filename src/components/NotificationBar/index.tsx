import SocialIcon from './SocialIcon'

const NotificationBar = () => {
  return (
    <div className=" flex justify-between container py-2">
      <div></div>
      <div className=" flex justify-center gap-4">
        <SocialIcon
          href="https://facebook.com"
          src="/assets/social/facebook.svg"
          alt="Facebook"
        />
        <SocialIcon
          href="https://youtube.com"
          src="/assets/social/youtube.svg"
          alt="Youtube"
        />
        <SocialIcon
          href="https://twitter.com"
          src="/assets/social/twitter.svg"
          alt="Twitter"
        />
      </div>
    </div>
  )
}

export default NotificationBar
