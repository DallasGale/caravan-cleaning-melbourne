import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/images/logo.svg'
import { useState } from 'react'
import PrimaryCta from '~/components/cta/primary'

const links = [
  { label: 'What We Do', link: '' },
  { label: 'Parts & Accessories', link: '' },
  { label: 'About Us', link: '' },
  { label: 'Recent Work', link: '' },
  { label: 'Testimonials', link: '' },
]

const Nav = () => {
  const [hover, setHover] = useState(false)
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Image src={Logo} alt="Logo" width={150} height={45} />
          </li>
          {links.map(({ label, link }) => (
            <li
              className="nav__list-item"
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Link className="nav__link" href={link}>
                {label}
              </Link>
            </li>
          ))}
          <li className="nav__list-item">
            <span className="nav__divider" />
          </li>
        </ul>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link className="nav__link nav__link--ph" href="tel:0408811911">
              0408 811 911
            </Link>
          </li>
          <li className="nav__list-item">
            <PrimaryCta label="Enquire Now" link="/#enquire" />
          </li>
        </ul>
      </nav>
      {/* {hover && <div className="nav__dropdown">dropdown</div>} */}
    </>
  )
}

export default Nav