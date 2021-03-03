import styled from 'styled-components'

export const Container = styled.div`
  margin: 2em 0;
`

export const Title = styled.div`
  
  background: #A883BC;

  margin-bottom: 1rem; 
  text-align: center;

  h2 {
    width: min(90vw, 1100px);
    margin: 0 auto;

    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;

    padding: 2rem .4rem;


    color: #e2e2e2;
  }
`

export const Wrapper = styled.div`
  width: min(90vw, 960px);
  margin: 0 auto;

/*   .duvidas {
    --auto-grid-min-size: 16rem;
  
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 1rem;
  } */

  @media(min-width: 768px) {
    .duvidas {
      --auto-grid-min-size:22rem;
    }
  }
`

export const Doubt = styled.div`
  .doubt-hidden {
    visibility: hidden;
    display: none;
  }


  margin: 0 auto;
  width: 100%;
  max-width: 968px;

  > div {
    background-color: #fff;
    border-radius: 8px;
    padding: .4rem .8rem;
    margin-bottom: .8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.25);

    svg {
      color: #8F7E98;
      font-size: 1.4rem;
    }

  }


  h3 {
    font-weight: 700;
    font-size: 1.28rem;
    color: #8F7E98;
  }

  p {
    font-size: 1.32rem;
    line-height: 2rem;
    font-weight: 300;
    color: #333;
  }
`