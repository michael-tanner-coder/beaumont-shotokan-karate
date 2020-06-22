import styled from "styled-components"

const StyledBG = styled.div`
  h1,
  p {
    color: ${({ theme }) => theme.secondary_color};
  }

  .jumbo {
    background: url(${props => props.image}) no-repeat scroll bottom;
    background-position: ${props => props.x} ${props => props.y};
    background-size: cover;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    bottom: 0;
    left: 0;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`

export default StyledBG
