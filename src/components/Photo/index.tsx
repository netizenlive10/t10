import WithHeader from './WithHeader'
import WithSlider from './WithSlider'

const Photo = ({ searchParams, path, index, isDirectory }) => {
  return (
    <div className="relative cursor-pointer selection:bg-none max-h-[225px] overflow-hidden">
      {isDirectory ? (
        <WithHeader path={path} />
      ) : (
        <WithSlider
          path={path}
          directory={searchParams.directory}
          index={index}
        />
      )}
    </div>
  )
}

export default Photo
