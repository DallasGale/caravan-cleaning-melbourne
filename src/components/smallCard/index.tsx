import Image from 'next/image'
import { CardTypes } from './types'
import { Variants, motion } from 'framer-motion'

interface CardProps extends CardTypes {
  delay: number
}
const SmallCard = ({ title, paragraph, image, delay }: CardProps) => {
  const cardVariants: Variants = {
    offscreen: {
      x: -30,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
        delay,
      },
    },
  }
  return (
    <motion.div
      className="card"
      variants={cardVariants}
      suppressHydrationWarning={true}
    >
      <div className="card__icon card__icon--small">
        <Image src={image.asset.url} layout="fill" alt={image.imageAlt} />
      </div>
      <div className="card__words">
        <h2 className="display-2 color-teal">{title}</h2>
        <p className="paragraph color-white">{paragraph}</p>
      </div>
    </motion.div>
  )
}

export default SmallCard
