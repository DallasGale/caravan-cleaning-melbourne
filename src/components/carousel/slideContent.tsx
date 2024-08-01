import Image from 'next/image'
import LazyVideo from '../lazyVideo'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import React, { ErrorInfo } from 'react'
import YouTubePlayer from './youtube'

interface SlideContentProps {
  item: {
    image?: {
      asset: { url: string }
      imageAlt: string
    }
    youTubeId?: string
  }
}
const SlideContent: React.FC<SlideContentProps> = ({ item }) => {
  return (
    <div className="slide">
      {item.image ? (
        <Image
          className="slider-image"
          src={item.image.asset.url}
          alt={item.image.imageAlt}
          layout="responsive"
          width={400}
          height={600}
        />
      ) : (
        <YouTubePlayer id={item.youTubeId} />
      )}
    </div>
  )
}

export default SlideContent
