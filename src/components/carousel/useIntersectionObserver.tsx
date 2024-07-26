import { useState, useEffect, useRef } from 'react'

const useIntersectionObserver = ({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}) => {
  const [entry, setEntry] = useState()
  const [isIntersecting, setIntersecting] = useState(false)
  const elementRef = useRef(null)

  const frozen = isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]) => {
    setEntry(entry)
    setIntersecting(entry.isIntersecting)
  }

  useEffect(() => {
    const node = elementRef.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold, root, rootMargin, frozen])

  return { ref: elementRef, isIntersecting, entry }
}

export default useIntersectionObserver
