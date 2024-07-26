import Image from 'next/image'
import { CardTypes } from './types'
import { Variants, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface CardProps extends CardTypes {
  delay: number
}
const Card = ({ title, paragraph, image, delay }: CardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

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
      <div className="card__icon">
        <Image src={image.asset.url} alt={image.imageAlt} layout="fill" />
      </div>
      <div className="card__words">
        <h2 className="display-2 color-teal">{title}</h2>
        <p className="paragraph color-white">{paragraph}</p>
      </div>
    </motion.div>
  )
}

export default Card
