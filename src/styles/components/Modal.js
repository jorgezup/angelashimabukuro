import styled, { keyframes } from 'styled-components'


export const ContainerModal = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(0,0,0,0.75);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ModalOverlay = styled.div`
  animation: ${appearFromTop} .8s;
  background: #f4f5f6;
  padding: 2rem;
  box-shadow: 2px 2px 0px 2px rgba(0,0,0, 0.45);
  overflow: scroll;
  width: 100%;  

  @media(min-width: 768px) {
    width: 75%;
  }

`

export const HeaderModal = styled.div`
  display: flex;

  flex-direction: row-reverse;
  margin-bottom: .8rem;
  svg {
    margin-left: auto;
    cursor: pointer;
    font-size: 2rem;
  }
`

export const WrapperModal = styled.div`
  .content {
    font-size: 1.26rem;
    font-weight: 300;
  }
`

export const Title = styled.div`
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`