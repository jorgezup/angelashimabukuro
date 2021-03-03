import Link from 'next/link'

import { Container } from '../../styles/components/components/Button'

const Button = ({ url, text, color, textcolor }) => {
  return (
    <Container color={color} textcolor={textcolor}>
      <Link href={url}>
        <a target="_blank">
          <span>{text}</span>
        </a>
      </Link>
    </Container>
  )
}

export default Button