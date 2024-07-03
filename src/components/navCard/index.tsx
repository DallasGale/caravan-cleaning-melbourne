import Image from 'next/image'
import { CardTypes } from './types'

const NavCard = ({ title, paragraph, image, imageAlt }: CardTypes) => (
  <div className="nav-card">
    <Image src={image.asset.url} height={81} width={158} alt={imageAlt} />
    <h2 className="heading-4 color-navy">{title}</h2>
    <p className="paragraph color-navy">{paragraph}</p>
  </div>
)

export default NavCard
