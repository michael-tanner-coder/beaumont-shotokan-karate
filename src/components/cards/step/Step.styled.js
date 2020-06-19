import styled from "styled-components"

const StyledStep = styled.div`
  box-shadow: 5px 8px 15px #888888;
  box-shadow: 5px 8px 15px #88888899;
  border-radius: 8px;
  h2,
  h3 {
    color: ${({ theme }) => theme.primary_color};
    text-align: center;
    font-size: 1.5em;
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
