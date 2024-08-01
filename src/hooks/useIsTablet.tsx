import { useState, useEffect } from 'react'

const TABLET_BREAKPOINT = 1025 // You can adjust this value as needed

export function useIsTablet(): boolean {
  const [isTablet, setIsTablet] = useState<boolean>(false)

  useEffect(() => {
    const checkIsTablet = () => {
      setIsTablet(window.innerWidth < TABLET_BREAKPOINT)
    }

    // Check on mount
    checkIsTablet()

    // Add event listener for window resize
    window.addEventListener('resize', checkIsTablet)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIsTablet)
    }
  }, [])

  return isTablet
}
