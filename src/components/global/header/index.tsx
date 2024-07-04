import { NavigationContent } from '~/lib/sanity.queries'
import Nav from './nav'
import { useEffect } from 'react'

const Header = ({ navItems, phone }: NavigationContent) => {
  const applyClassWhenScrolled = () => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header')
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    })
  }

  useEffect(() => {
    applyClassWhenScrolled()
  }, [])
  return (
    <header className="header">
      <Nav navItems={navItems} phone={phone} />
    </header>
  )
}
export default Header
