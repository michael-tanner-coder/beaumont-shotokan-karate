import styled from "styled-components"

const StyledClass = styled.div`
  .card {
    width: 100%;
    height: auto;
    box-shadow: 5px 8px 15px #888888;
    box-shadow: 5px 8px 15px #88888899;
  }
  .card-header {
    background-color: ${({ theme }) => theme.primary_color};
    color: ${({ theme }) => theme.secondary_color};
    text-align: center;
    font-size: 2em;
  }

  .card-img-top {
    border-radius: 0;
  }

  .bold {
    font-weight: bold;
  }
`

export default StyledClass
