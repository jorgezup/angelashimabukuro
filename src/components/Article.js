import React, { useEffect } from 'react'
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
      {
        article.title &&
        <Title color={article.color} text={article.titletextcolor}>
          <h2 >{article.title}</h2>
        </Title>
      }
      < Wrapper className={article.slug} >
        <div >
          {article.content &&
            <MarkdownPreview className="first-content" value={article.content} />
            // <div dangerouslySetInnerHTML={{ __html: article.content }}></div>

          }
          {article.image &&
            <div className="image">
              <Image
                loader={myLoader}
                // src={`${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}/${article.image.hash}${article.image.ext}`}
                src={`${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}/${article.image.hash}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          }
          {article.secondcontent &&
            <MarkdownPreview className="second-content" value={article.secondcontent} />
            // <div dangerouslySetInnerHTML={{ __html: article.secondcontent }}></div>
          }
        </div>
      </Wrapper >
    </Container >
  )
}

export default Article