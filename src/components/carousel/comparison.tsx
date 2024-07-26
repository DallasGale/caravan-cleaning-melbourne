import Slider from 'react-slick'
import { SlidePairTypes } from '~/lib/sanity.queries'
import { useEffect, useRef, useState } from 'react'

import SlideContent from './slideContent'

interface ComparisonCarouselProps {
  category: string
  slidePairs: SlidePairTypes[]
}

const ComparisonCarousel = ({
  category,
  slidePairs,
}: ComparisonCarouselProps) => {
  // const sliderRef = useRef<Slider>(null)
  // const [assetsLoaded, setAssetsLoaded] = useState(0)
  // const totalAssets = slidePairs?.length || 0

  // useEffect(() => {
  //   if (assetsLoaded === totalAssets && sliderRef.current) {
  //     sliderRef.current.slickGoTo(0)
  //   }
  // }, [assetsLoaded, totalAssets])

  // const handleAssetLoad = () => {
  //   setAssetsLoaded((prev) => prev + 1)
  // }

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    speed: 350,
    dots: true,
    variableWidth: false,
  }

  return (
    <div className="slider-container">
      <h3 className="heading-3 color-white">{category}</h3>
      <Slider {...settings} lazyLoad="ondemand">
        {slidePairs.map(({ caption, beforeItem, afterItem, _key }, index) => {
          return (
            <div key={_key} className="slide-wrapper">
              {/* Before slide */}
              <SlideContent
                item={beforeItem}
                caption={caption}
                label="Before"
                // onLoad={handleAssetLoad}
              />
              {/* After slide */}
              <SlideContent
                item={afterItem}
                caption={caption}
                label="After"
                // onLoad={handleAssetLoad}
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default ComparisonCarousel
