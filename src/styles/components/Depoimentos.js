import styled from 'styled-components'

export const Container = styled.div`
  margin: 2em 0;
`

export const Title = styled.div`
  background: ${props => (props.color) ? props.color : '#e5e5e5'};

  margin-bottom: 1.8rem; 
  text-align: center;

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2rem;

    padding: 2rem .4rem;


    color: ${props => (props.textcolor) ? props.textcolor : ''};
  }
`

export const Wrapper = styled.div`
  width: min(90vw, 960px);
  margin: 0 auto;


  p {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 300;
  }

  img {
    border-radius: 1.2rem;
    width: 100%;
  }

`

export const Testimonials = styled.div`
  width: 100%;
  margin: 0 auto;
/* 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

export const Testimony = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 75%;
  
  p {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  border-bottom: .12rem #d3d3d1 solid;

  &:last-of-type {
    border-bottom: none;
  }

  &.left {
    flex-direction: row-reverse;

    .float {
      margin-left: auto;
    }
  }

  .person {
    display: flex;
    flex-direction: column;
    width: 80%;

    margin-left: .6rem;
    p {
      /* color: #444; */
    }
    .autor {
      color: #45b1e8;
      font-weight: 600;
      font-size: .86rem;
    }

    .occupation {
      font-size: .7rem;
      color: #222;
      font-style: italic;
    }

    .text {
      text-align: center;
    }
  }

  .media {
    margin: 1rem;
    img {
      max-width: 12rem;
      height: 100%;
      object-fit: cover;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }




  @media(max-width: 768px) {
    width: 100%;
    flex-direction: column;

    &.left {
      flex-direction: column;
    }

    .media {
      margin: initial;
    }
    .person {
      margin-bottom: 1rem;
      margin-left: initial;

    }
  }


`