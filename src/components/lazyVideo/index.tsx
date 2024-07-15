import { useEffect, useState } from 'react'

const LazyVideo = ({ src, ...props }) => {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    setShouldLoad(true)
  }, [])

  if (!shouldLoad) return <div>Loading...</div>

  return <video src={src} {...props} />
}

export default LazyVideo
