import React from 'react'
import Link from 'next/link'

import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import { apiURL, fetchQuery } from "../lib/utils"


import { Container, Wrapper, Logo, Social, Icon, Copyright } from '../styles/components/Footer'

const Footer = ({ footer }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={`${footer.logo.url}`} />
        </Logo>
        <Social>
          {footer.social.map(item => {
            return (
              <div className="icons" key={item.id}>
                <a target="_blank" href={item.href}>
                  <Icon>
                    {item.label === 'Facebook' ? <FiFacebook /> : ''}
                    {item.label === 'Instagram' ? <FiInstagram /> : ''}
                    {item.label === 'Email' ? <FiMail /> : ''}
                    {item.label === 'WhatsApp' ? <FaWhatsapp /> : ''}
                  </Icon>
                  <span>
                    {item.link}
                  </span>
                </a>
              </div>
            )
          })}
        </Social>
      </Wrapper>
      <Copyright>
        <span>Todos os Direitos Reservados - Angela Shimabukuro © 2021</span>
        <span className="dev"> - Desenvolvido por Jorge Zupirolli</span>
      </Copyright>
    </Container>
  )
}

export default Footer