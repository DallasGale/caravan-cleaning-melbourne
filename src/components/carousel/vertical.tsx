import Image from 'next/image'
import Slider from 'react-slick'
import { AssetType } from '~/lib/sanity.queries'

interface CarouselProps {
  assets: AssetType[]
}
const VerticalCarousel = ({ assets }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '60px',
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide)
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide)
    },
  }

  return (
    <div className="slider-container vertical">
      <Slider {...settings}>
        {assets.map(({ _key, asset, imageAlt }) => {
          return (
            <Image
              key={_key}
              className="slider-image vertical"
              src={asset.url}
              alt={imageAlt}
              width={300}
              height={300}
            />
          )
        })}
      </Slider>
    </div>
  )
}

export default VerticalCarousel
