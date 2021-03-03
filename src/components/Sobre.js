import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MarkdownPreview } from 'react-marked-markdown'

import { apiURL, fetchQuery } from "../lib/utils"
import Button from '../components/components/Button'

import { Container, Title, Wrapper, Grid } from '../styles/components/Sobre'

const Sobre = ({ about }) => {
  return (
    <Container>
      <Title>
        <h2>{about.title}</h2>
      </Title>
      <Wrapper>
        <Grid>
          <MarkdownPreview value={about.description} />
          {/* <Image src={`${process.env.IMAGES_DOMAIN}${about.image.url}`} alt="Angela Shimabukuro" width='100%' height='400' /> */}
          {/* <Image src="/FI6A6718.jpg" alt="Angela Shimabukuro" layout="responsive" width={300} height={400} /> */}
          <img src={`${about.image.url}`} alt="Angela Shimabukuro" />
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