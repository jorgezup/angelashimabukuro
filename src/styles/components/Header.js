import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  background: 
    linear-gradient(
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    /* url('http://localhost:1337/uploads/topo_hero_fdee1416d6.png') */
    url(${props => props.image})
    center center  / 100vw 100vh
    no-repeat
    fixed
    padding-box
    content-box
    ;

    @media(max-width: 425px) {
      background: 
        linear-gradient(
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.65)
        ),
        /* url('http://localhost:1337/uploads/topo_hero_fdee1416d6.png') */
        url(${props => props.image})
        center center  / 250vw 100vh
        no-repeat
        fixed
        /* padding-box */
        /* content-box */
        ;
    }

`

export const Wrapper = styled.div`
  width: clamp(300px, 96%, 960px);
  height: 100vh;
  margin: 0 auto;
  
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-between; */

  .text {
    /* height: min(max(10rem, 90vh), 60rem); */

    /* height: clamp(300px, 96%, 800px); */

    margin: 8vh 0 1vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

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