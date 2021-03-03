import styled from 'styled-components'

export const Container = styled.div`
  margin: 2em 0;
`

export const Title = styled.div`
  /* margin-bottom: 1rem;  */
  text-align: center;

  p {
    width: min(90vw, 1300px);
    margin: 0 auto;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2rem;

    padding: 2rem .4rem;

    strong {
      font-weight: 700;
    }
  }
`

export const Wrapper = styled.div`
  width: min(90vw, 960px);
  margin: 0 auto;
  p {
   font-size: 1.2rem; 
   color: #444;
   margin: 1.2rem 0;
   text-align: center;
  }


  iframe {
    /* align-self: center; */
    width: 100%;
    height: min(max(10rem, 50vw), 32rem);
    border:none
  }

  
`
