import styled from "styled-components"

const StyledButton = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;

  appearance: none;

  .btn {
    background-color: ${({ theme }) => theme.primary_color};
    border-color: ${({ theme }) => theme.primary_color};
    color: ${({ theme }) => theme.secondary_color};
    ${props =>
      props.cta &&
      "background-color: " +
        props.theme.cta_color +
        "; border-color: " +
        props.theme.cta_color};
  }
`

export default StyledButton
