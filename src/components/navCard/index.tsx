import Image from 'next/image'
import { CardTypes } from './types'
import Link from 'next/link'

const NavCard = ({ title, link, paragraph, image, imageAlt }: CardTypes) => (
  <div className="nav-card">
    <Image src={image.asset.url} height={81} width={158} alt={imageAlt} />
    <h2 className="displat-3 color-navy">{title}</h2>
    {paragraph && <p className="paragraph color-navy">{paragraph}</p>}
    <Link href={link} className="body-2 weight-bold color-navy">
      More Info
    </Link>
  </div>
)

export default NavCard
