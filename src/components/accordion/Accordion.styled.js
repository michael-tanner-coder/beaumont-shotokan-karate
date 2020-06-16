import styled from "styled-components"

const StyledAccordion = styled.div`
  .accordion .card-header:not(.active) {
    background-color: ${({ theme }) => theme.secondary_color};
    transition: background-color 0.4s, color 0.4s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.primary_color};
      color: ${({ theme }) => theme.secondary_color};
    }
  }

  .active {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary_color};
    color: ${({ theme }) => theme.secondary_color};
  }
`

export default StyledAccordion
