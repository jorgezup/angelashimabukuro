import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { Container, Title, Wrapper, Doenca } from '../styles/components/Tratamentos'
import Modal from './Modal'

const Tratamentos = ({ treatment }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = (tratamento) => {
    setShow(true)
    setData(tratamento)
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = show ? 'hidden' : 'auto'
  }, [show])

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <Container>
      <Modal show={show} onHide={handleClose} data={data} />
      <Title>
        <h2>{treatment.title}</h2>
      </Title>
      <Wrapper>
        <div className="tratamentos">
          {treatment.basic.map(disease => (
            <Doenca key={disease.id} onClick={() => handleShow(disease)}>
              <h3>{disease.title}</h3>
              <Image
                loader={myLoader}
                src={`${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}/${disease.image.hash}.webp`}
                width={1920}
                height={1080}
                alt={disease.title}
                layout="responsive"
              />
            </Doenca>
          ))}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Tratamentos