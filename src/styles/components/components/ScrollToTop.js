import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 12px;
  right: 20px;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: #eee;
  display: flex;
  z-index: 3;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.25);
  svg {
    justify-self: center;
    align-self: center;
    /* animation: scrollTop 1s alternate ease infinite; */
    width: 100%;
    height: 100%;
    /* fill: ${props => props.theme.colors.subtitle}; */
    fill: #777;
  }
  
  @keyframes scrollTop {
    from {
      transform: translateY(1px);
    }
    to {
      transform: translateY(-1px)
    }
  }
`