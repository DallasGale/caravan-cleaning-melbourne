import Image from 'next/image'
import Link from 'next/link'
import Card from '~/components/card'
import NavCard from '~/components/navCard'
import { AdditionalListTypes, DropdownItem } from '~/lib/sanity.queries'

interface DropdownProps {
  mainLinks: DropdownItem[]
  show: boolean
  onMouseEnter: () => void
  onMouseLeave: (event: any) => void
}

const Dropdown = ({
  mainLinks,
  show,
  onMouseEnter,
  onMouseLeave,
}: DropdownProps) => {
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
                // paragraph,
                link,
                image,
                imageAlt,
              }: DropdownItem) => {
                return (
                  <li key={_key} className="nav-card__grid-item">
                    <NavCard
                      title={heading}
                      link={link}
                      // paragraph={paragraph}
                      image={image}
                      imageAlt={imageAlt}
                    />
                  </li>
                )
              },
            )}
          </ul>
        )}
        {mainLinks &&
          mainLinks[0]?.additionalListHeading &&
          mainLinks[0]?.additionalList && (
            <div className="nav__dropdown-additional-list">
              <h3 className="display-5 color-navy">
                {mainLinks[0]?.additionalListHeading}
              </h3>

              <ul>
                {mainLinks[0]?.additionalList.map(
                  ({ _key, heading, link }: AdditionalListTypes) => {
                    return (
                      <li key={_key} className="nav-card__grid-item">
                        <Link href={link} className="display-1 color-navy">
                          {heading}
                        </Link>
                      </li>
                    )
                  },
                )}
              </ul>
            </div>
          )}
      </div>
    </div>
  )
}
export default Dropdown
