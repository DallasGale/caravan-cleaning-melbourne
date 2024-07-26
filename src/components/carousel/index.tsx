import Image from 'next/image'
import Slider from 'react-slick'
import { AssetType } from '~/lib/sanity.queries'
import { useEffect, useRef, useState } from 'react'

import Placeholder from '/public/images/carousel-placeholder.jpg'
import LazyVideo from '../lazyVideo'
import YouTubePlayer from './youtube'

interface CarouselProps {
  infinite?: boolean
  slidesToShow?: number
  slidesToScroll?: number
  assets: {
    images?: AssetType[]
    videos?: string[]
  }
}
const Carousel = ({
  infinite = false,
  slidesToShow = 1,
  slidesToScroll = 3,
  assets,
}: CarouselProps) => {
  const sliderRef = useRef<Slider>(null)
  const [assetsLoaded, setAssetsLoaded] = useState(0)
  const totalAssets =
    (assets?.images?.length || 0) + (assets?.videos?.length || 0)

  useEffect(() => {
    if (assetsLoaded === totalAssets && sliderRef.current) {
      // All assets are loaded, reinitialize the slider
      sliderRef.current.slickGoTo(0)
    }
  }, [assetsLoaded, totalAssets])

  const handleAssetLoad = () => {
    setAssetsLoaded((prev) => prev + 1)
  }

  const settings = {
    className: 'center',
    centerMode: true,
    infinite,
    slidesToShow,
    slidesToScroll,
    centerPadding: '10%',
    swipeToSlide: true,
    speed: 350,
    dots: true,
    variableWidth: false,
  }

  console.log({ assets })

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {assets?.images && (
          <>
            {assets?.images?.map(({ _key, asset, imageAlt, _type }, index) => {
              return (
                <div key={_key} className="slide-wrapper slide-wrapper--image">
                  <Image
                    className="slider-image"
                    src={asset.url}
                    alt={imageAlt}
                    layout="responsive"
                    width={400}
                    height={600}
                    onLoad={handleAssetLoad}
                  />
                </div>
              )
            })}
          </>
        )}

        {assets?.videos && (
          <>
            {assets?.videos?.map((id, index) => {
              console.log({ id })
              return (
                <div key={index} className="slide-wrapper slide-wrapper--video">
                  <YouTubePlayer id={id} />
                </div>
              )
            })}
          </>
        )}
      </Slider>
    </div>
  )
}

export default Carousel
