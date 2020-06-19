import styled from "styled-components"

const StyledQuote = styled.div`
  background-color: ${({ theme }) => theme.secondary_color};
  padding: 0.3em;
  border-radius: 8px;
  box-shadow: 5px 8px 12px #888888;
  box-shadow: 5px 8px 12px #88888899;

  .quote {
    color: ${({ theme }) => theme.primary_color};
    font-weight: bold;
    font-size: 2em;
  }

  .quotes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  p,
  cite {
    text-align: center;
  }
`

export default StyledQuote
