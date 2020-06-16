import styled from "styled-components"

const StyledStep = styled.div`
  h2,
  h3 {
    color: ${({ theme }) => theme.primary_color};
    text-align: center;
  }

  a {
    text-align: center;
  }

  .icon {
    color: ${({ theme }) => theme.primary_color};
    font-size: 3em;
    text-align: center;
    margin: auto;
    margin-top: 1em;

    &:hover {
      color: ${({ theme }) => theme.cta_color};
      cursor: pointer;
    }
  }
`

export default StyledStep
