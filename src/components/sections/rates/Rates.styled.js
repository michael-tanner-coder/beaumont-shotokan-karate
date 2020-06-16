import styled from "styled-components"

const StyledSection = styled.section`
  height: 100vh;

  .red {
    color: ${({ theme }) => theme.cta_color};
  }

  thead {
    background-color: ${({ theme }) => theme.primary_color};
    color: ${({ theme }) => theme.secondary_color};
  }
`

export default StyledSection
