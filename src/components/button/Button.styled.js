import styled from "styled-components"

const StyledButton = styled.div`
  .btn {
    background-color: ${({ theme }) => theme.primary_color};
    color: ${({ theme }) => theme.secondary_color};
    border-color: ${({ theme }) => theme.primary_color};

    ${props => props.cta && "background-color: " + props.theme.cta_color};
    ${props => props.cta && "border-color: " + props.theme.cta_color};
  }
`

export default StyledButton
