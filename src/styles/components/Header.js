import styled from 'styled-components'

export const Container = styled.div`
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
  width: clamp(300px, 96%, 960px);
  height: 100vh;

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
    /* font-size: 1.2rem; */
    font-size: min(max(1.2rem, 4vw), 1.8rem);
    line-height: min(max(1.5rem, 4vw), 2.4rem);

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
      font-weight: 400;
    }
  }

  
`