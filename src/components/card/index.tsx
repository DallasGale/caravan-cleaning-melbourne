import Image from 'next/image'
import { CardTypes } from './types'

const Card = ({ title, paragraph, image, imageAlt }: CardTypes) => (
  <div className="card">
    <Image src={image.asset.url} height={81} width={158} alt={imageAlt} />
    <h2 className="display-3 color-teal">{title}</h2>
    <p className="paragraph color-white">{paragraph}</p>
  </div>
)

export default Card
