import React, { useState, useEffect } from 'react'

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
              <img src={`${disease.image.url}`} alt="" />
            </Doenca>
          ))}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Tratamentos