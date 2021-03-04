import styled from 'styled-components'

export const Container = styled.div`
    border: 4px solid ${props => props.color ? props.color : '#e5e5e5'};
    border-radius: 1.4rem;

    width: 80%;
    margin: 0 auto;

    /* margin: 1.2rem 0; */
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

  a {
    text-decoration: none;
    padding: .8rem .6rem;
    text-align: center;

    span {
      color: ${props => props.textcolor ? props.textcolor : '#e5e5e5'};
      font-size: 1.4rem;
    }
  }

  transition: .8s all;

  &:hover {
    background: ${props => props.color ? props.color : '#e5e5e5'};
    
    span {
      color: #fff;
    }
  }
`