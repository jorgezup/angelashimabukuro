import styled from 'styled-components'

export const Container = styled.div`
  /* margin: .003em 0 2em; */
`

export const Title = styled.div`
  background-color: ${props => (props.color ? props.color : '#e5e5e5')};

  text-align: center;
  /* margin: 1.2rem 0; */

  h2 {
    width: min(90vw, 1300px);
    margin: 0 auto;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;

    padding: 2rem .4rem;


    color: ${props => (props.text ? props.text : '')};
  }


`

export const Wrapper = styled.div`
  width: min(90vw, 960px);
  margin: 0 auto;

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 300;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: min(max(10rem, 60vw), 34rem);
  }

  .first-content {
    margin-top: .6rem;
  }

  .second-content {
    margin-bottom: .6rem;
  }


  &.autossabotagem {
    > div {
    --auto-grid-min-size: 16rem;
  
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr));
      grid-gap: 1rem;

      img {
        object-fit: cover;
      }
    }


    @media(min-width: 768px) {
      > div {
        --auto-grid-min-size: 34em;
      }
    }

    @media(min-width:1100px) {
      width: initial;

      .second-content {
        margin-right: 2.4rem;
      }
    }

  }

  &.duvida {
    div {
      em {
        font-style: initial;
        text-decoration: underline;
        font-weight: 400;
      }
      img {
        margin: 1rem 0;
        object-fit: cover;
        width: 100%;
      }
    }
  }

  &.resultados {
    div {
      strong {
        font-weight: 700;
      }
      em {
        color: red;
        font-style: initial;
      }
      img {
        margin: 1rem 0;
      }
    }
  }

  &.doente {
    div {
      img {
        margin-bottom: .4rem;
      }
    }
  }

  &.chave {
    div {
      img {
        /* margin: .6rem 0; */
      }
      em {
        font-style: initial;
        text-decoration: underline;
        font-weight: 400;
      }
    }

    @media(min-width:1100px) {
      width: initial;
      /* max-width: 1440px; */

      .second-content {
        width: min(90vw, 960px);
        margin: 0 auto;
      }
    }
  }

  &.autoconhecimento {
    div {
      img {
        /* margin: .6rem 0; */
        margin-top: .6rem;
      }
    }
  }






`