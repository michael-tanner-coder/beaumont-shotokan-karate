import styled from "styled-components"

const StyledNav = styled.div`
  background-color: ${props => props.theme.primary_color};

  .navbar-brand,
  .navbar-nav a {
    color: ${props => props.theme.secondary_color}!important;
    text-decoration: none;

    &:hover {
      &:after {
        border-bottom: 1px solid ${props => props.theme.select_color};
        opacity: 1;
      }
    }

    &:after {
      border-bottom: 1px solid #0000;
      content: "";
      display: block;
      height: 8px;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
    }
  }

  .navbar-brand {
    font-family: "Edo SZ";
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(245,245,245, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
`

export default StyledNav
