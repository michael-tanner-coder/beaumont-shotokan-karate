import styled from "styled-components"

const StyledBG = styled.div`
  h1,
  p {
    color: ${({ theme }) => theme.secondary_color};
  }

  .jumbo {
    background: url(${props => props.image}) no-repeat scroll bottom;
    background-size: cover;
    background-position: ${props => props.x} ${props => props.y};
    z-index: -2;
    position: relative;
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

export default StyledBG
