import Image from 'next/image'
import Slider from 'react-slick'
import { AssetType } from '~/lib/sanity.queries'
import { useCallback, useRef } from 'react'

interface CarouselProps {
  assets: {
    images: AssetType[]
    videos?: AssetType[]
  }
}
const Carousel = ({ assets }: CarouselProps) => {
  const videoRefs = useRef({})

  const pauseAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach((videoEl: HTMLVideoElement) => {
      if (videoEl && !videoEl.paused) {
        videoEl.pause()
      }
    })
  }, [])

  const playCurrentVideo = useCallback((index: number) => {
    const currentVideo = videoRefs.current[index] as HTMLVideoElement
    if (currentVideo && currentVideo.paused) {
      currentVideo.play()
    }
  }, [])
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '60px',
    swipeToSlide: true,
    speed: 350,
    dots: true,
    variableWidth: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      pauseAllVideos()
    },
    afterChange: (currentIndex: number) => {
      playCurrentVideo(currentIndex)
      console.log(`Slider Changed to: ${currentIndex + 1}`)
    },
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {assets.images.map(({ _key, asset, imageAlt, _type }) => {
          return (
            <Image
              key={_key}
              className="slider-image"
              src={asset.url}
              alt={imageAlt}
              width={400}
              height={600}
            />
          )
        })}
        {assets.videos.map(({ _key, asset, imageAlt }, index) => {
          return (
            <video
              controls
              muted
              key={_key}
              className="slider-image"
              src={asset.url}
              width={400}
              height={600}
              ref={(el) => {
                if (el) {
                  videoRefs.current[assets.images.length + index] = el
                }
              }}
            />
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel
