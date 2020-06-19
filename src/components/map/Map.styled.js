import styled from "styled-components"

const StyledMap = styled.div`
  .map-h2 {
    text-transform: uppercase;
    font-size: 1rem;
    padding: 20px;
    padding-left: 10px;
    text-align: center;
  }

  .google-map {
    width: 100%;
    height: 60vh;
  }

  .pin {
    display: flex;
    align-items: center;
    width: 180px;
    color: ${({ theme }) => theme.primary_color};
  }

  .pin-icon {
    font-size: 4rem;
  }

  .pin-text {
    font-size: 1.3em;
    color: ${({ theme }) => theme.primary_font_color};
  }

  @media screen and (min-width: 799px) {
    .google-map {
      height: 80vh;
    }

    .map-h2 {
      font-size: 1.3rem;
      font-weight: 400;
    }

    .pin {
      width: 15vw;
    }

    .pin-icon {
      font-size: 10vw;
    }
  }
`

export default StyledMap
