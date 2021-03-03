import React from 'react'

import { MarkdownPreview } from 'react-marked-markdown'


import { Container, Wrapper } from '../styles/components/Header'
import Button from '../components/components/Button'

const Header = ({ header }) => {
  return (
    <Container image={header.background.url}>
      <Wrapper>
        <div className="text">
          <MarkdownPreview value={header.text1} />
          <MarkdownPreview value={header.text2} />
          <MarkdownPreview value={header.text3} />
          <MarkdownPreview value={header.text4} />

          <Button
            url={header.button.url}
            text={header.button.text}
            color={header.button.buttoncolor}
            textcolor={header.button.textcolor}
          />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Header