import styled from "styled-components"

const StyledQuote = styled.div`
  border-radius: 8px;
  box-shadow: 5px 6px 12px #999999;
  box-shadow: 5px 6px 12px #99999999;
  padding: 0.3em;

  p,
  cite {
    text-align: center;
  }

  p {
    font-weight: bold;
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
