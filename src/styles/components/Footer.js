import styled from 'styled-components'

export const Container = styled.div`
  background: #121214;
`
export const Wrapper = styled.div`
  margin: 0 auto;
  width: min(90vw, 1300px);

  display: flex;
  flex-direction: column;
  align-items: center;

`

export const Logo = styled.div`
  margin: 1rem 0;
  height: min(max(10rem, 50vh), 12rem);
  position: relative;
  width: 100%;
`


export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 10rem;
  a {
    text-decoration: none;
    color: #E5E5E1;

    span {
      display: none;

    }
  }
  svg {
    color: #E5E5E1;
    width: 2rem;
    height: 1.6rem;
  }

`

export const Icon = styled.div`
  font-size: 1.4rem;
`

export const Copyright = styled.div`
  background: #333;
  color: #999;
  font-size: min(max(.55rem, 2vw), .78rem);
  line-height: 1.4rem;
  text-align: center;

  .dev {
    color: #666;
  }
`
