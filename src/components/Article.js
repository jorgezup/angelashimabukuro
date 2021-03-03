import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

import { apiURL, fetchQuery } from "../lib/utils"


import { MarkdownPreview } from 'react-marked-markdown'

import { Container, Title, Wrapper } from '../styles/components/Article'

const Article = ({ article }) => {
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
            <img src={`${article.image.url}`} alt="" />
            // <div style={{ background: `url(${apiURL}${article.image.url}) no-repeat contain` }}></div>
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