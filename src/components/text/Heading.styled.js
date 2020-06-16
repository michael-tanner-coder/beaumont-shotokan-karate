import styled from "styled-components"

const StyledHeading = styled.div`
  color: ${({ theme }) => theme.primary_color};

  ${props => props.center && "text-align: center"};
`

export default StyledHeading
