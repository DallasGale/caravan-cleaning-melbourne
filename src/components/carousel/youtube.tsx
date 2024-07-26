import ReactPlayer from 'react-player/youtube'

interface YouTubePlayerProps {
  id: string
}

const YouTubePlayer = ({ id }: YouTubePlayerProps) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${id}`}
      className="youtube-player"
      muted
      width={600}
      height={600}
    />
  )
}

export default YouTubePlayer
