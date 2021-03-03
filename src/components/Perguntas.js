import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

import { MarkdownPreview } from 'react-marked-markdown'

import { Container, Title, Question, Wrapper } from '../styles/components/Perguntas'

const Perguntas = ({ questions }) => {
  return (
    <Container>
      <Title color={questions.introduction.color}>
        <h2>{questions.introduction.title}</h2>
      </Title>
      <Wrapper>
        <MarkdownPreview className="description" value={questions.introduction.description} />
        <div className="perguntas">
          {questions.questions.map(question => (
            <Question key={question.id}>
              <div className="icon">
                <FiCheckCircle />
              </div>
              <MarkdownPreview value={question.content} />
            </Question>
          ))}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Perguntas