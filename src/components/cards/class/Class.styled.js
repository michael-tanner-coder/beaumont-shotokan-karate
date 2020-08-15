import styled from "styled-components"

const StyledClass = styled.div`
  .card {
    box-shadow: 2px 3px 12px #999999;
    box-shadow: 2px 3px 12px #99999999;
    height: auto;
    width: 100%;
  }

  .card-header {
    background-color: ${({ theme }) => theme.primary_color};
    color: ${({ theme }) => theme.secondary_color};
    font-size: 2em;
    text-align: center;
  }

  .card-img-top {
    border-radius: 0;
  }

  .bold {
    font-weight: bold;
  }
`

export default StyledClass
