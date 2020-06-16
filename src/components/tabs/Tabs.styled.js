import styled from "styled-components"
import theme from "../theme"

const StyledTabs = styled.div`
  .nav-link {
    color: ${({ theme }) => theme.primary_color};
  }
`

export default StyledTabs
