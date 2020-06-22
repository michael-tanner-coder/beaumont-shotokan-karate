import styled from "styled-components"

const StyledAccordion = styled.div`
  .card-header {
    cursor: pointer;
    transition: background-color 0.4s, color 0.4s;
  }

  .card-header:not(.active) {
    background-color: ${({ theme }) => theme.secondary_color};

    &:hover {
      background-color: ${({ theme }) => theme.primary_color};
      color: ${({ theme }) => theme.secondary_color};
    }
  }

  .active {
    background-color: ${({ theme }) => theme.primary_color};
    color: ${({ theme }) => theme.secondary_color};
  }
`

export default StyledAccordion
