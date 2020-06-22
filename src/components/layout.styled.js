import styled from "styled-components"

const StyledLayout = styled.div`
  body,
  main {
    background-color: ${({ theme }) => theme.background_color};
  }
`

export default StyledLayout
