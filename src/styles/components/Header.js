import styled from 'styled-components'

export const Container = styled.div`
  /* height: 150vh; */
  /* height: min(max(32rem, 100vh), 70rem); */

  background: 
    linear-gradient(
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65) 
    ),
    content-box
    ;

  .background {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }

`

export const Wrapper = styled.div`
  width: clamp(300px, 96%, 1100px);
  height: min(max(20rem, 100vh), 70rem);
  /* height: 100%; */


  margin: 6rem auto;


  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */

  .text {
    /* flex: 1; */
    height: 100%;
    /* height: min(max(20rem, 120vh), 70rem); */

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    /* margin-top: 8vh; */
    /* height: 100%; */


    /* font-size: 1.2rem; */
    font-size: min(max(1.7rem, 4vw), 2.4rem);
    line-height: min(max(2.2rem, 4vw), 3.4rem);

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
      font-size: min(max(2rem, 4vw), 2.8rem);
    }

    div:nth-child(2) {
      padding: 0 3rem;
      font-weight: 300;

      @media(min-width: 1024px) {
        padding: 0 8rem;
      }
    }

    div:nth-child(3){
      font-weight: 700;
      font-size: min(max(2rem, 4vw), 2.4rem);
    }
  }

  
`