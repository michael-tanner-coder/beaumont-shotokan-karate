import styled from "styled-components"

const StyledSection = styled.div`
  margin-top: 50vh;
  margin-bottom: 50vh;

  h1 {
    margin-bottom: 0.5em;
    text-align: center;
  }

  q {
    margin-top: 50%;
    margin-bottom: 50%;
  }

  @media (max-width: 995px) {
    .col {
      margin-bottom: 1.2em;
    }
  }
`

export default StyledSection
