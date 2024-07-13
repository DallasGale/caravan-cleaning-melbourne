import Image from 'next/image'
import Slider from 'react-slick'
import { AssetType, SlidePairTypes } from '~/lib/sanity.queries'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerProps,
} from '@vidstack/react'
import Placeholder from '/public/images/carousel-placeholder.jpg'

interface ComparisonCarouselProps {
  category: string
  slidePairs: SlidePairTypes[]
}
const ComparisonCarousel = ({
  category,
  slidePairs,
}: ComparisonCarouselProps) => {
  // const videoRefs = useRef({})
  const sliderRef = useRef<Slider>(null)
  const [assetsLoaded, setAssetsLoaded] = useState(0)
  const totalAssets = slidePairs?.length || 0

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
    // centerMode: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerPadding: '10%',
    swipeToSlide: true,
    speed: 350,
    dots: true,
    variableWidth: false,
  }

  return (
    <div className="slider-container">
      <h3 className="heading-3 color-white">{category}</h3>
      <Slider {...settings} ref={sliderRef}>
        {slidePairs.map(({ beforeItem, afterItem, _key }, index) => {
          return (
            <div key={_key} className="slide-wrapper">
              <div className="slide-wrapper">
                <Image
                  className="slider-image"
                  src={beforeItem.asset.url}
                  alt={beforeItem.imageAlt}
                  layout="fixed"
                  width={400}
                  height={600}
                  onLoad={handleAssetLoad}
                />
              </div>

              <div className="slide-wrapper">
                <Image
                  className="slider-image"
                  src={afterItem.asset.url}
                  alt={afterItem.imageAlt}
                  layout="fixed"
                  width={400}
                  height={600}
                  onLoad={handleAssetLoad}
                />
              </div>
            </div>
          )
        })}
      </Slider>

      {/* {assets?.videos?.map(({ _key, asset, imageAlt, _type }, index) => {
          return (
            <div key={_key} className="slide-wrapper">
              <MediaPlayer
                onCanPlay={handleAssetLoad}
                className="slider-video"
                src={asset.url}
                controls
                fullscreenOrientation="portrait"
              >
                <MediaProvider />
              </MediaPlayer>
            </div>
          )
        })} */}
    </div>
  )
}

export default ComparisonCarousel
