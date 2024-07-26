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
    youTubeVideoId?: string
  }
  caption: string
  label: string
  onLoad: () => void
  priority?: boolean
}
const SlideContent: React.FC<SlideContentProps> = ({
  item,
  caption,
  label,
  onLoad,
  priority = false,
}) => {
  return (
    <div className="slide">
      <div className="slide-label">
        <h3 className="display-3 color-white">{label}.</h3>
      </div>
      {item.image && (
        <Image
          loading={priority ? 'eager' : 'lazy'}
          className="slider-image"
          src={item.image.asset.url}
          alt={item.image.imageAlt}
          layout="responsive"
          width={400}
          height={600}
          onLoad={onLoad}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      )}
      {item.youTubeVideoId && <YouTubePlayer id={item.youTubeVideoId} />}
      <div className="slide-caption">
        <p className="display-3">{caption}</p>
      </div>
    </div>
  )
}

export default SlideContent
