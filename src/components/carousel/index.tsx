import Image from 'next/image'
import Slider from 'react-slick'
import { SlideOptionTypes } from '~/lib/sanity.queries'

import YouTubePlayer from './youtube'
import { useIsTablet } from '~/hooks/useIsTablet'
import { useIsMobile } from '~/hooks/useIsMobile'

interface CarouselProps {
  infinite?: boolean
  slidesToScroll?: number
  assets: {
    slideOptions: SlideOptionTypes[]
  }
}
const Carousel = ({
  infinite = false,
  slidesToScroll = 1,
  assets,
}: CarouselProps) => {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  const handleSlidesToShow = () => {
    if (isMobile) {
      return 1
    } else if (isTablet) {
      return 2
    } else return 1
  }
  const settings = {
    className: 'center',
    centerMode: false,
    infinite,
    slidesToShow: handleSlidesToShow(),
    slidesToScroll,
    centerPadding: '10%',
    swipeToSlide: true,
    speed: 350,
    dots: true,
    variableWidth: false,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {assets?.slideOptions?.map(({ youTubeId, image, _key }) => {
          return (
            <div key={_key} className="slide-wrapper slide-wrapper--image">
              {image && (
                <Image
                  className="slider-image"
                  src={image.asset.url}
                  alt={image.imageAlt}
                  layout="responsive"
                  width={400}
                  height={600}
                />
              )}
              {youTubeId && <YouTubePlayer id={youTubeId} />}
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel
