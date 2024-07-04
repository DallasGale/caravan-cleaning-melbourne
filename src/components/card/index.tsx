import Image from 'next/image'
import { CardTypes } from './types'

const Card = ({ title, paragraph, image, imageAlt }: CardTypes) => (
  <div className="card">
    <div style={{ height: '150px', width: '170px', position: 'relative' }}>
      <Image src={image.asset.url} layout="fill" alt={imageAlt} />
    </div>
    <h2 className="display-2 color-teal">{title}</h2>
    <p className="paragraph color-white">{paragraph}</p>
  </div>
)

export default Card
