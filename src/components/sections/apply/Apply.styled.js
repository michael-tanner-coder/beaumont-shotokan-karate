import styled from "styled-components"

const StyledSection = styled.section`
  margin-top: 2em;
  color: ${({ theme }) => theme.secondary_color};

  h2 {
    @media (max-width: 1000px) {
      font-size: 1.4em;
    }
    @media (max-width: 450px) {
      font-size: 1.3em;
    }
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }

  .row {
    align-items: center;
  }

  .join {
    width: 60%;

    &__header {
      background-color: ${({ theme }) => theme.primary_color};
      border-radius: 8px 8px 0px 0px;
      height: 10%;
      margin: 0 1em;
      padding: 0.5em 0;
      text-align: center;
      box-shadow: 5px 6px 12px #999999;
      box-shadow: 5px 6px 12px #99999999;
    }

    &__body {
      background-color: #f5f5f5;
      border-radius: 0px 0px 8px 8px;
      height: 90%;
      margin: 0 1em 1.2em;
      padding: 0.5em;
      box-shadow: 5px 6px 12px #999999;
      box-shadow: 5px 6px 12px #99999999;

      ul {
        list-style: none;
        margin: auto;
        padding: 1em;

        li {
          margin: 2em auto;
          text-align: center;
          color: ${({ theme }) => theme.primary_font_color};
        }

        .icon {
          color: ${({ theme }) => theme.primary_color};
        }
      }

      .btn {
        border-radius: 8px;
        font-size: 28px;
        padding: 0.5em 0;

        &:hover {
          background-color: ${({ theme }) => theme.primary_color};
          border-color: ${({ theme }) => theme.primary_color};
        }
      }
    }
  }

  .image {
    width: 100%;

    @media (max-width: 450px) {
      height: 0;
    }
  }

  .banner {
    background-color: ${({ theme }) => theme.primary_color};
    height: 50px;
    margin: -1.45em 0 5em 0;
    text-align: center;
    padding-top: 0.1em;

    @media (max-width: 450px) {
      margin-top: 1em;
      padding-top: 0.8em;
    }

    @media (max-width: 1000px) {
      padding-top: 0.5em;
    }
  }
`

export default StyledSection
