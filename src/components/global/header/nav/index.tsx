import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/images/logo.svg'
import { useEffect, useRef, useState } from 'react'
import PrimaryCta from '~/components/cta/primary'
import Dropdown from './dropdown'
import { NavigationContent } from '~/lib/sanity.queries'
import { IconMenu2 } from '@tabler/icons-react'
import { ActionIcon, Button, Drawer } from '@mantine/core'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '~/hooks/useDimensions'
import { MenuToggle } from '../menuToggle'
import { MobileNav } from './mobileNav'
import { useIsMobile } from '~/hooks/useIsMobile'

const Nav = ({ navItems, phone }: NavigationContent) => {
  const isMobile = useIsMobile()
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

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <nav className="nav" ref={navRef} onMouseLeave={handleMouseLeave}>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={150} height={45} />
        </Link>
        {isMobile && (
          <>
            <ActionIcon
              onClick={() => setToggleMenu(!toggleMenu)}
              className="nav__mobile-menu"
            >
              <IconMenu2 />
            </ActionIcon>
            <Drawer
              withOverlay={false}
              size="calc(100vw - 40px)"
              withCloseButton={false}
              classNames={{ content: 'nav__mobile-menu-drawer' }}
              opened={toggleMenu}
              onClose={() => setToggleMenu(false)}
            >
              <MobileNav
                navItems={navItems}
                phone={phone}
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            </Drawer>
          </>
        )}

        <ul className="nav__list">
          {navItems.map(({ name, link }, index) => (
            <li
              className={`nav__list-item ${navItems[activeDropdown]?.dropdownItems && activeDropdown === index ? 'active' : ''}`}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <Link
                className={`nav__link ${navItems[activeDropdown]?.dropdownItems && activeDropdown === index ? 'active' : ''}`}
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}
          <li className="nav__list-item">
            <span className="nav__divider" />
          </li>
          <li className="nav__list-item ph">
            <Link className="nav__link ph" href={`tel:${phone}`}>
              {phone}
            </Link>
          </li>
          <li className="nav__list-item enquire">
            <PrimaryCta label="Enquire Now" link="/#enquire" />
          </li>
        </ul>
      </nav>

      {/* <Dropdown
        mainLinks={navItems[activeDropdown]?.dropdownItems}
        show={
          navItems[activeDropdown]?.dropdownItems && activeDropdown !== null
        }
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={(event) => {
          if (event.clientY > navRef?.current.getBoundingClientRect().bottom) {
            setActiveDropdown(null)
          }
        }}
      /> */}
      {/* )} */}
    </>
  )
}

export default Nav
