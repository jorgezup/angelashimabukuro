import React from 'react'
import Image from 'next/image'

import { MarkdownPreview } from 'react-marked-markdown'


import { Container, Wrapper } from '../styles/components/Header'
import Button from '../components/components/Button'

const Header = ({ header }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <Container >
      <div className="background">
        <Image
          loader={myLoader}
          src={`${header.background.url}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <Wrapper>
        <div className="text">
          <MarkdownPreview value={header.text1} />
          <MarkdownPreview value={header.text2} />
          <MarkdownPreview value={header.text3} />
          <MarkdownPreview value={header.text4} />
        </div>

        <Button
          url={header.button.url}
          text={header.button.text}
          color={header.button.buttoncolor}
          textcolor={header.button.textcolor}
        />
      </Wrapper>
    </Container >
  )
}

export default Header