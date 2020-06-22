import styled from "styled-components"

const StyledQuote = styled.div`
  background-color: ${({ theme }) => theme.secondary_color};
  border-radius: 8px;
  box-shadow: 5px 8px 12px #888888;
  box-shadow: 5px 8px 12px #88888899;
  padding: 0.3em;

  p,
  cite {
    text-align: center;
  }

  .quote-mark {
    color: ${({ theme }) => theme.primary_color};
    font-size: 2em;
    font-weight: bold;
  }

  .quotes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export default StyledQuote
