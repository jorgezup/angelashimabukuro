import styled from 'styled-components'

export const Container = styled.div`
  margin: 2em 0;

`

export const Title = styled.div`
  background: #7c8dc6;

  margin-bottom: 1.8rem; 
  text-align: center;

  h2 {
    font-weight: 700;
    font-size: 1.6rem;
    padding: 2rem .4rem;


    color: #fff;
  }
`

export const Wrapper = styled.div`
  width: min(90vw, 960px);
  margin: 0 auto;
 
  .tratamentos {
    --auto-grid-min-size:16rem;
  
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 1rem;
  }
`

export const Doenca = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;

  h3 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: .4rem;
    text-align: center;
  }
  
  img {
    width: 100%;
    /* height: 300px; */
    height: min(max(6rem, 50vw), 10rem);

    border-radius: .4rem;
    object-fit: cover;
  }

  &:last-of-type{
    margin-bottom: initial;
  }
`