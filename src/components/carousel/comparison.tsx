import Slider from 'react-slick'
import { SlidePairTypes } from '~/lib/sanity.queries'
import { useEffect, useRef, useState } from 'react'

import SlideContent from './slideContent'
import { useIsMobile } from '~/hooks/useIsMobile'

interface ComparisonCarouselProps {
  category: string
  slidePairs: SlidePairTypes[]
}

const ComparisonCarousel = ({
  category,
  slidePairs,
}: ComparisonCarouselProps) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    speed: 350,
    infinite: true,
    dots: true,
    variableWidth: false,
  }

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const isMobile = useIsMobile()
  const flattenSlidePairs = (slidePairs) => {
    return slidePairs.flatMap(({ caption, beforeItem, afterItem, _key }) => [
      { ...beforeItem, caption, _key: `${_key}-before` },
      { ...afterItem, caption, _key: `${_key}-after` },
    ])
  }
  const items = isMobile ? flattenSlidePairs(slidePairs) : slidePairs

  console.log({ items })
  return (
    <div className="slider-container">
      <h3 className="heading-3 color-white">{category}</h3>
      <Slider
        className="slider"
        {...settings}
        lazyLoad="ondemand"
        afterChange={(e) => setActiveSlideIndex(e)}
      >
        {isMobile &&
          flattenSlidePairs(slidePairs).map((item, { _key }, index) => {
            return (
              <div key={_key} className="slide-wrapper">
                <SlideContent item={item} />
              </div>
            )
          })}
        {!isMobile &&
          slidePairs.map(({ beforeItem, afterItem, _key }, index) => {
            return (
              <div key={_key} className="slide-wrapper">
                {beforeItem && <SlideContent item={beforeItem} />}
                {afterItem && <SlideContent item={afterItem} />}
              </div>
            )
          })}
      </Slider>
      {!isMobile && (
        <>
          <div className="carousel__title-before">
            <p className="display-2 color-white">Before</p>
          </div>
          <div className="carousel__title-after">
            <p className="display-2 color-white">After</p>
          </div>
        </>
      )}
      <div className="slide-caption">
        {items[activeSlideIndex] && (
          <p className="paragraph">{items[activeSlideIndex].caption}</p>
        )}
      </div>
    </div>
  )
}

export default ComparisonCarousel
