import Image from 'next/image'
import Slider from 'react-slick'
import { AssetType, SlidePairTypes } from '~/lib/sanity.queries'
import { lazy, useCallback, useEffect, useRef, useState } from 'react'
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerProps,
} from '@vidstack/react'
import Placeholder from '/public/images/carousel-placeholder.jpg'
import LazyVideo from '../lazyVideo'

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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    speed: 350,
    dots: true,
    variableWidth: false,
  }

  const [isIntersecting, setIntersecting] = useState(false)
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="slider-container" ref={ref}>
      <h3 className="heading-3 color-white">{category}</h3>
      <Slider {...settings} lazyLoad="ondemand" ref={sliderRef}>
        {slidePairs.map(({ caption, beforeItem, afterItem, _key }, index) => {
          console.log({ beforeItem, afterItem })
          return (
            <div key={_key} className="slide-wrapper">
              <div className="slide">
                <div className="slide-label">
                  <h3 className="display-3 color-white">Before.</h3>
                </div>
                {beforeItem.image && (
                  <Image
                    loading="lazy"
                    className="slider-image"
                    src={beforeItem.image.asset.url}
                    alt={beforeItem.image.imageAlt}
                    layout="fixed"
                    width={400}
                    height={600}
                    onLoad={handleAssetLoad}
                  />
                )}
                {beforeItem.file && isIntersecting && (
                  <LazyVideo
                    preload="metadata"
                    onCanPlay={handleAssetLoad}
                    className="slider-video"
                    src={beforeItem.file.asset.url}
                    controls
                    autoPlay={false}
                    title={caption}
                    typeof="video/mp4"
                    poster={beforeItem.file.posterImage}
                  />
                )}
              </div>
              <div className="slide-caption">
                <p className="display-3">{caption}</p>
              </div>
              <div className="slide">
                <div className="slide-label">
                  <h3 className="display-3 color-white">After.</h3>
                </div>
                {afterItem.image && (
                  <Image
                    loading="lazy"
                    className="slider-image"
                    src={afterItem.image.asset.url}
                    alt={afterItem.image.imageAlt}
                    layout="fixed"
                    width={400}
                    height={600}
                    onLoad={handleAssetLoad}
                  />
                )}
                {afterItem.file && isIntersecting && (
                  <LazyVideo
                    preload="metadata"
                    onCanPlay={handleAssetLoad}
                    className="slider-video"
                    src={afterItem.file.asset.url}
                    controls
                    autoPlay={false}
                    title={caption}
                    typeof="video/mp4"
                    poster={beforeItem.file.posterImage}
                  />
                )}
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
