import Image from 'next/image'
import Link from 'next/link'
import Card from '~/components/card'
import NavCard from '~/components/navCard'
import { DropdownItem } from '~/lib/sanity.queries'

interface DropdownProps {
  mainLinks: DropdownItem[]
  show: boolean
  onMouseEnter: () => void
  onMouseLeave: (event: any) => void
  // children: React.ReactNode
}

const Dropdown = ({
  mainLinks,
  show,
  onMouseEnter,
  onMouseLeave,
}: DropdownProps) => {
  console.log({ mainLinks })
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`nav__dropdown ${show ? 'show' : 'hide'}`}
    >
      <div className="nav__dropdown-inner">
        {mainLinks && (
          <ul className="nav-card__grid">
            {mainLinks.map(
              ({
                _key,
                heading,
                paragraph,
                link,
                image,
                imageAlt,
              }: DropdownItem) => {
                return (
                  <li key={_key} className="nav-card__grid-item">
                    <NavCard
                      title={heading}
                      paragraph={paragraph}
                      image={image}
                      imageAlt={imageAlt}
                    />
                  </li>
                )
              },
            )}
          </ul>
        )}
        <div>Other section</div>
      </div>
    </div>
  )
}
export default Dropdown
