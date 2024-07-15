import Image from 'next/image'
import Slider from 'react-slick'
import { AssetType } from '~/lib/sanity.queries'
import { useEffect, useRef, useState } from 'react'

import Placeholder from '/public/images/carousel-placeholder.jpg'
import LazyVideo from '../lazyVideo'

interface CarouselProps {
  infinite?: boolean
  slidesToShow?: number
  slidesToScroll?: number
  assets: {
    images?: AssetType[]
    videos?: AssetType[]
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
      <Slider {...settings} ref={sliderRef}>
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

        {assets?.videos?.map(({ _key, asset, imageAlt, _type }, index) => {
          return (
            <div key={_key} className="slide-wrapper slide-wrapper--video">
              {isIntersecting && (
                <LazyVideo
                  onCanPlay={handleAssetLoad}
                  className="slider-video"
                  src={asset.url}
                  controls
                  autoPlay={false}
                  title={imageAlt}
                  preload="metadata"
                  typeof="video/mp4"
                  poster={Placeholder.src}
                />
              )}
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel
