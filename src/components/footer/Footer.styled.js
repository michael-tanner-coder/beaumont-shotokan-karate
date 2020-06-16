import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.primary_color};
  color: ${props => props.theme.secondary_color};
  padding: 0.5em;

  .row {
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 1.5em;
    }

    .col {
      margin-bottom: 1em;
    }
  }
`

export default StyledFooter
