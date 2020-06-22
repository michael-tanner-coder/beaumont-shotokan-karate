import styled from "styled-components"

const StyledMap = styled.div`
  .google-map {
    height: 60vh;
    width: 100%;
  }

  @media screen and (min-width: 799px) {
    .google-map {
      height: 80vh;
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
