import AppImage from '../AppImage'

const AppLoader = () => {
  return (
    <div className=" absolute  top-0 left-0  z-20 w-full  h-full  flex items-center justify-center text-white   flex-col gap-5">
      <AppImage src="/assets/ball.gif" width={80} height={80} alt="loader" />
      <h4 className=" text-2xl font-bold animate-pulse">Loading . . .</h4>
    </div>
  )
}

export default AppLoader
