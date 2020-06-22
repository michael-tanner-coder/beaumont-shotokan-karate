import styled from "styled-components"

const StyledHero = styled.div`
  .jumbo {
    background: url(${props => props.image}) no-repeat scroll bottom;
    background-position: center top;
    background-size: cover;
    height: 100vh;

    @media (max-width: 400px) {
      background-size: contain;
      height: 45vh;
    }
  }

  .title {
    color: #efefef;
    font-family: "Edo SZ";
    font-size: 3em;

    @media (min-width: 900px) {
      font-size: 7em;
    }
  }
`

export default StyledHero
