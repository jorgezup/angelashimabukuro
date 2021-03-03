import React from 'react'
import Image from 'next/image'
import { FiCheckCircle } from 'react-icons/fi'

import { apiURL, fetchQuery } from "../lib/utils"


import { MarkdownPreview } from 'react-marked-markdown'

import { Container, Title, Wrapper } from '../styles/components/Article'

const Article = ({ article }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <Container>
      {article.title &&
        <Title color={article.color} text={article.titletextcolor}>
          <h2 >{article.title}</h2>
        </Title>
      }
      <Wrapper className={article.slug} >
        <div >
          {article.content &&
            <MarkdownPreview className="first-content" value={article.content} />
          }
          {article.image &&
            <div className="image">
              <Image
                loader={myLoader}
                src={`${article.image.url}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          }
          {article.secondcontent &&
            <MarkdownPreview className="second-content" value={article.secondcontent} />
          }
        </div>
      </Wrapper>
    </Container >
  )
}

export default Article