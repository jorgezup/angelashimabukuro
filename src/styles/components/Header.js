import styled from 'styled-components'

export const Container = styled.div`
  /* height: 100vh; */
  background: 
    linear-gradient(
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url(${props => props.image})
    center center
    no-repeat
    fixed
    padding-box
    content-box
    ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

`

export const Wrapper = styled.div`
  width: clamp(300px, 96%, 960px);
  height: min(max(60rem, 110vh), 80rem);
  /* margin: 10rem auto 0; */
  padding: 4rem 0 2rem;
  /* min-height: 200vh; */

  @media(min-width:768px) {
    /* height: min(max(20rem, 110vh), 80rem); */
  }
  
  

  .content {
    margin: 2rem 0 0;
    height: 100%;

    /* padding: 2rem 0; */

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    font-size: min(max(1.7rem, 4vw), 2.4rem);

    font-weight: 400;
    color: #fff;
    text-align: center;

    strong {
      font-weight: 700;
    }

    em {
      font-style: initial;
      font-weight: 400;
      text-decoration: underline;
    }

    div:first-of-type{
      font-size: min(max(2.8rem, 2vw), 7rem);
      font-size: 3.5rem;
      text-transform: uppercase;
      word-wrap: wrap;
      line-height: 1;
      font-weight: 700;
      text-align: center;
      margin-bottom: 4rem;
      @media(min-width:320px) {
        font-size: 3rem;
      }

      @media(min-width:425px) {
        font-size: 3.2rem;
      }

      @media(min-width:768px) {
        font-size: 3.3rem;
      }
    }

    div:nth-child(2) {
      /* padding: 0 3rem; */
      font-size:1.6rem;
      font-weight: 300;
      line-height: 1.2;
      margin-bottom: 4rem;
      text-align: center;

      /* @media(min-width:320px) {
        font-size: 1.3rem;
      }

      @media(min-width:425px) {
        font-size: 3.2rem;
      }

      @media(min-width:768px) {
        font-size: 3.3rem;
      } */
    }

    div:nth-child(3) {
      /* margin-bottom: 4rem; */
      border-radius: 36px;
      margin: initial;
      margin: 0 auto;
      font-size: min(max(1.54rem, 4vw), 2.4rem);
      a {
        font-weight: 600;
      }
      
    }

    div:nth-child(4){
      font-weight: 300;
      font-size: min(max(1.42rem, 4vw), 2.4rem);
      line-height: 1;
      font-size: 1.5rem;
      /* margin-top: 2rem; */
    }
  }
`