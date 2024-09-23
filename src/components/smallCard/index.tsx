import Image from 'next/image'
import { CardTypes } from './types'
import { Variants, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface CardProps extends CardTypes {
  delay: number
}
const SmallCard = ({ title, paragraph, image, delay }: CardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.9 })

  const cardVariants: Variants = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: {
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
      ref={ref}
      className="card"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
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
