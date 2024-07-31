import React from 'react'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core'
import classes from './styles.module.css'
import YouTubePlayer from '../youtube'
import Image from 'next/image'
import { SlideOptionTypes } from '~/lib/sanity.queries'

function Card({ image, youTubeId, _key }: SlideOptionTypes) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      {image && (
        <Image
          className="slider-image"
          src={image.asset.url}
          alt={image.imageAlt}
          layout="responsive"
          width={400}
          height={600}
        />
      )}
      {youTubeId && <YouTubePlayer id={youTubeId} />}
    </Paper>
  )
}

interface MantineCarouselProps {
  data: {
    slideOptions: SlideOptionTypes[]
  }
}

const MantineCarousel = ({ data }: MantineCarouselProps) => {
  const theme = useMantineTheme()
  const slides = data.slideOptions.map((item) => (
    <Carousel.Slide key={item._key}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  )
}

export default MantineCarousel
