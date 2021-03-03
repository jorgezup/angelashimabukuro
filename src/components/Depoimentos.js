import React from 'react'
import Image from 'next/image'

import { MarkdownPreview } from 'react-marked-markdown'


import { Container, Title, Wrapper, Testimonials, Testimony } from '../styles/components/Depoimentos'

const Depoimentos = ({ testimony }) => {
  return (
    <Container style={{ backgroundColor: '#f1f1f2' }}>
      <Title color={testimony.color} textcolor={testimony.titletextcolor}>
        <h2>{testimony.title}</h2>
      </Title>
      <Wrapper>
        <Testimonials>
          {testimony.testimonials.map(testimony => (

            <Testimony key={testimony.id} className={testimony.id % 2 !== 0 ? 'left' : 'right'}>
              <div className="media">
                {testimony.imageperson &&
                  <img src={testimony.imageperson.url} alt={testimony.autor} />
                }
                {testimony.video_id &&
                  <iframe src={`https://www.youtube.com/embed/${testimony.video_id}`} ></iframe>
                }
              </div>

              <div className="person">
                {testimony.imageperson ?
                  (
                    <>
                      <div className="float">
                        <p className="autor">{testimony.autor}</p>
                        {testimony.occupation &&
                          <p className="occupation">{testimony.occupation}</p>
                        }
                      </div>
                      <MarkdownPreview className="text" value={testimony.depoimento} />
                    </>
                  ) : (
                    <>
                      <MarkdownPreview className="text" value={testimony.depoimento} />
                      <div className="float">
                        <p className="autor">{testimony.autor}</p>
                        {testimony.occupation &&
                          <p className="occupation">{testimony.occupation}</p>
                        }
                      </div>
                    </>
                  )
                }
              </div>
            </Testimony>
          ))}
        </Testimonials>
      </Wrapper>
    </Container>
  )
}

export default Depoimentos