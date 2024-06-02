import StyledImage from './StyledImage'

const WithSlider = ({ path, directory }) => {
  return (
    <StyledImage src={`/images/photos/${directory}/${path}`} alt="Thumbnail" />
  )
}

export default WithSlider
