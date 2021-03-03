import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MarkdownPreview } from 'react-marked-markdown'

import Button from '../components/components/Button'

import { Container, Title, Wrapper, Grid } from '../styles/components/Sobre'

const Sobre = ({ about }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <Container>
      <Title>
        <h2>{about.title}</h2>
      </Title>
      <Wrapper>
        <Grid>
          <MarkdownPreview value={about.description} />
          <Image
            loader={myLoader}
            src={`${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}/${about.image.hash}.webp`}
            width={400}
            height={700}
            layout="responsive"
            objectFit="cover"
          />
        </Grid>

        {
          about.cta &&
          <Button
            url={about.cta.url}
            text={about.cta.text}
            color={about.cta.buttoncolor}
            textcolor={about.cta.textcolor}
          />
        }
      </Wrapper>
    </Container>
  )
}

export default Sobre