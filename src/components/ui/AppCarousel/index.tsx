import AppImage from '../AppImage'
import { Carousel } from 'react-responsive-carousel'

const AppCarousel = () => (
  <Carousel autoPlay>
    <div>
      <AppImage
        src="/images/blog/author-01.png"
        width={500}
        height={300}
        alt=""
      />
      1<p className="legend">Legend 1</p>
    </div>
    <div>
      <AppImage
        src="/images/blog/author-02.png"
        width={500}
        height={300}
        alt=""
      />
      2<p className="legend">Legend 1</p>
    </div>
  </Carousel>
)

export default AppCarousel
