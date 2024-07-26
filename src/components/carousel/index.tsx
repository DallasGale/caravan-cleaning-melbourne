import Image from 'next/image'
import Slider from 'react-slick'
import {
  AssetType,
  SlideOptionTypes,
  SlidePairTypes,
} from '~/lib/sanity.queries'
import { useEffect, useRef, useState } from 'react'

import Placeholder from '/public/images/carousel-placeholder.jpg'
import LazyVideo from '../lazyVideo'
import YouTubePlayer from './youtube'

interface CarouselProps {
  infinite?: boolean
  slidesToShow?: number
  slidesToScroll?: number
  assets: {
    slideOptions: SlideOptionTypes[]
  }
}
const Carousel = ({
  infinite = false,
  slidesToShow = 1,
  slidesToScroll = 1,
  assets,
}: CarouselProps) => {
  const settings = {
    className: 'center',
    centerMode: false,
    infinite,
    slidesToShow,
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
