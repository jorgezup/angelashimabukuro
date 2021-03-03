import styled from 'styled-components'

export const Container = styled.div`
  margin: .003em 0 2em;
`
export const Title = styled.div`
  background-color: ${props => (props.color ? props.color : '#e5e5e5')};

  margin-bottom: 1rem; 
  text-align: center;

  h2 {
    width: min(90vw, 1300px);
    margin: 0 auto;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;

    padding: 2rem .4rem;


    color: #f2f3f4;
  }
`

export const Wrapper = styled.div`
  width: min(90vw, 960px);
  margin: 0 auto;
  .description {
    font-size: 1.4rem;
    color: #666;
    margin-bottom: 2rem;
  }

  .perguntas {
    --auto-grid-min-size: 20rem;
  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: .6rem;
  }

  @media(max-width: 320px) {
    .perguntas {
      --auto-grid-min-size: 16rem;
    }
  }

`


export const Question = styled.div`
  display: grid;
  grid-template-columns: 1.4rem 1fr;
  gap: .6rem;
  align-self: flex-start;
  
  svg {
    color: #cb4154;
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
  }


`