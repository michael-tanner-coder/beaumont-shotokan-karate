import styled from "styled-components"

const StyledPin = styled.div`
  .pin {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.primary_color};
    width: 180px;
  }

  .pin-icon {
    font-size: 4rem;
  }

  .pin-text {
    color: ${({ theme }) => theme.primary_font_color};
    font-size: 1.3em;
  }
`

export default StyledPin
