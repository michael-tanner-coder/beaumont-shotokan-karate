import styled from "styled-components"

// Image by @svklimkin on unsplash
const StyledHero = styled.div`
  .jumbo {
    background: url(${props => props.image}) no-repeat scroll bottom;
    background-size: cover;
    background-position: center top;
    color: #efefef;
    height: 100vh;
    width: 100vw;
    position: relative;
    z-index: -2;

    @media (max-width: 400px) {
      background-size: contain;
      height: 45vh;
    }
  }

  .title {
    font-family: "Nanum Brush Script", cursive;
    font-size: 3em;
  }

  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`

export default StyledHero
