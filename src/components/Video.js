import React from 'react'
import Link from 'next/link'
import { apiURL, fetchQuery } from "../lib/utils"


import { MarkdownPreview } from 'react-marked-markdown'


import { Container, Title, Wrapper, Doubt } from '../styles/components/Video'

const Video = ({ video }) => {
  return (
    <Container>
      <Title style={{ backgroundColor: `${video.video.color}` }}>
        <MarkdownPreview value={video.video.title} />
      </Title>
      <Wrapper>
        <MarkdownPreview value={video.video.description} />
        <iframe src={`https://www.youtube.com/embed/${video.video.video_id}`} ></iframe>
      </Wrapper>
    </Container>
  )
}

export default Video