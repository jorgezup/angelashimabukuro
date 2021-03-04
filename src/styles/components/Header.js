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
  height: min(max(20rem, 150vh), 70rem);
  /* height: 100%; */


  margin: 0 auto;


  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    margin: 8vh auto;
    height: 100%;


    /* font-size: 1.2rem; */
    font-size: min(max(1.7rem, 4vw), 2.4rem);
    line-height: min(max(2.2rem, 4vw), 3.4rem);

    font-weight: 300;
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

    div:last-of-type{
      font-weight: 900;
    }
  }

  
`