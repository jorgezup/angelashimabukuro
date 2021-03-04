import React from 'react'
import Image from 'next/image'

import { MarkdownPreview } from 'react-marked-markdown'


import { Container, Wrapper } from '../styles/components/Header'
import Button from '../components/components/Button'

const Header = ({ header }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  const backgroundImage = `${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}/${header.background.hash}`
  return (
    <Container image={backgroundImage}>
      {/* <div className="background">
        <Image
          loader={myLoader}
          src={`${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}/${header.background.hash}.webp`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div> */}

      <Wrapper>
        <div className="content">
          <MarkdownPreview value={header.text1} />
          <MarkdownPreview value={header.text2} />
          <Button
            url={header.button.url}
            text={header.button.text}
            color={header.button.buttoncolor}
            textcolor={header.button.textcolor}
          />
          <MarkdownPreview value={header.text3} />
          <MarkdownPreview value={header.text4} />
        </div>

      </Wrapper>
    </Container >
  )
}

export default Header