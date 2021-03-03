import styled from 'styled-components'

export const Container = styled.div`
  margin: 2em 0;
`

export const Title = styled.div`
  background: #c4a17e;

  margin-bottom: 1.8rem; 
  text-align: center;

  h2 {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;

    padding: 2rem .4rem;


    color: #fff;
  }
`

export const Wrapper = styled.div`
  width: min(90vw, 960px);
  margin: 0 auto;
`

export const Grid = styled.div`
  margin-bottom: 2rem;

  --auto-grid-min-size: 16rem;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 300;
    margin-bottom: .6rem;
  }

  p:last-of-type {
    margin-bottom: initial;
  }

  img {
    border-radius: 1.2rem;
    width: 100%;
    justify-self: center;
    object-fit: cover;
  }


  @media(min-width: 680px) {
    --auto-grid-min-size: 26rem;
    img {
      width: 80%;
    }
  }

  @media(min-width: 1100px) {
    --auto-grid-min-size: 24rem;
    img {
      width: 100%;
    }
  }
`
