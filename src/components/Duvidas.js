import React, { useState, useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa";

import { MarkdownPreview } from 'react-marked-markdown'


import { Container, Title, Wrapper, Doubt } from '../styles/components/Duvidas'

const Duvida = ({ doubts }) => {
  // function show(id) {
  //   const divClicked = document.querySelector(`div[data-id="${id}"]`)
  //   divClicked.classList.toggle('doubt-hidden')
  // }

  const [duvidas, setDuvidas] = useState(doubts.doubts)

  function toggle(id) {
    const newDuvidas = duvidas.map(duvida => {
      return duvida.id === id ? { ...duvida, open: !duvida.open } : duvida
    })
    setDuvidas(newDuvidas)
  }


  return (
    <Container>
      <Title>
        <h2>{doubts.title}</h2>
      </Title>
      <Wrapper>
        <div className="duvidas">
          {/* {doubts.doubts.map(doubt => ( */}
          {duvidas.map(doubt => {
            return (
              <Doubt key={doubt.id} >
                {/* <div onClick={() => show(doubt.id)}> */}
                <div onClick={() => toggle(doubt.id)}>
                  <h3>
                    {doubt.title}
                    {doubt.open}
                  </h3>
                  <FaAngleDown />
                </div>
                {/* <div data-id={doubt.id} className="doubt-hidden" > */}
                <div className={doubt.open ? '' : 'doubt-hidden'} >
                  <MarkdownPreview value={doubt.description} />
                </div>
              </Doubt>
            )
          })}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Duvida