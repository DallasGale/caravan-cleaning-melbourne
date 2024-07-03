import Link from 'next/link'
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
          <div>
            {mainLinks.map(({ item }: DropdownItem) => {
              return (
                <>
                  <h1>{item.heading}</h1>

                  <Link
                    key={item._key}
                    className="nav__dropdown-link"
                    href={item.link}
                  >
                    More Info
                  </Link>
                </>
              )
            })}
          </div>
        )}
      </div>
      <div>Other section</div>
    </div>
  )
}
export default Dropdown
