import Image from 'next/image'

const VideoPlaceholder = ({ posterUrl, onClick }) => (
  <div className="video-placeholder" onClick={onClick}>
    <Image
      src={posterUrl}
      layout="fill"
      objectFit="cover"
      alt="Video thumbnail"
    />
    <div className="play-button">Play</div>
  </div>
)
export default VideoPlaceholder
