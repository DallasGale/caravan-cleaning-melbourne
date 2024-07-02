import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/images/logo.svg'
import { useEffect, useRef, useState } from 'react'
import PrimaryCta from '~/components/cta/primary'
import Dropdown from './dropdown'
import { NavigationContent } from '~/lib/sanity.queries'

const Nav = ({ navItems, phone }: NavigationContent) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)

  const handleMouseEnter = (index: number) => {
    clearTimeout(timeoutRef.current)
    setActiveDropdown(index)
  }

  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = (event) => {
    console.log('handleMouseLeave')
    if (navRef.current) {
      if (event.clientY <= navRef.current?.getBoundingClientRect().bottom) {
        timeoutRef.current = setTimeout(() => {
          setActiveDropdown(null)
        }, 100)
      }
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <nav className="nav" ref={navRef} onMouseLeave={handleMouseLeave}>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Image src={Logo} alt="Logo" width={150} height={45} />
          </li>
          {navItems.map(({ name, link }, index) => (
            <li
              className={`nav__list-item ${activeDropdown === index ? 'active' : ''}`}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <Link
                className={`nav__link ${activeDropdown === index ? 'active' : ''}`}
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}
          <li className="nav__list-item">
            <span className="nav__divider" />
          </li>
        </ul>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link className="nav__link nav__link--ph" href={`tel:${phone}`}>
              {phone}
            </Link>
          </li>
          <li className="nav__list-item">
            <PrimaryCta label="Enquire Now" link="/#enquire" />
          </li>
        </ul>
      </nav>
      <Dropdown
        show={activeDropdown !== null}
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={(event) => {
          if (event.clientY > navRef?.current.getBoundingClientRect().bottom) {
            setActiveDropdown(null)
          }
        }}
      >
        {activeDropdown !== null && (
          <>
            <div>{navItems[activeDropdown]?.name}</div>
            <div>list</div>
          </>
        )}
      </Dropdown>
    </>
  )
}

export default Nav
