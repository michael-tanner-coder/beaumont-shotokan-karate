import styled from "styled-components"

const StyledStep = styled.div`
  border-radius: 8px;
  box-shadow: 2px 3px 12px #999999;
  box-shadow: 2px 3px 12px #99999999;

  h2,
  h3,
  a {
    color: ${({ theme }) => theme.primary_color};
    font-size: 1.5em;
    text-align: center;
  }

  .icon {
    color: ${({ theme }) => theme.primary_color};
    font-size: 3em;
    margin: 1em auto auto auto;
    text-align: center;

    &:hover {
      color: ${({ theme }) => theme.cta_color};
    }
  }

  .btn {
    &:hover {
      background-color: ${({ theme }) => theme.cta_color};
      border-color: ${({ theme }) => theme.cta_color};
    }
  }
`

export default StyledStep
