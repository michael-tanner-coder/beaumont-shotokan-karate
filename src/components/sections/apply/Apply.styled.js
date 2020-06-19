import styled from "styled-components"

const StyledSection = styled.section`
  margin-top: 2em;

  h2 {
    @media (max-width: 1000px) {
      font-size: 1.4em;
    }
    @media (max-width: 450px) {
      font-size: 1.3em;
    }
  }

  .row {
    align-items: center;
  }

  .join {
    color: ${({ theme }) => theme.secondary_color};
    width: 60%;

    &__header {
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      background-color: ${({ theme }) => theme.primary_color};
      text-align: center;
      margin-bottom: 0;
      margin: 0 1em;
      height: 10%;
      border-radius: 8px 8px 0px 0px;
    }

    &__body {
      margin-top: 0;
      margin: 0 1em;
      background-color: #797676;

      height: 90%;
      border-radius: 0px 0px 8px 8px;
      padding: 0.5em;

      ul {
        padding: 1em;
        list-style: none;

        li {
          margin: 2em auto;
          text-align: center;
        }
      }

      a {
        color: ${({ theme }) => theme.secondary_color};
        &:hover {
          text-decoration: none;
        }

        .btn {
          padding-top: 0.5em;
          padding-bottom: 0.5em;
          font-size: 28px;
          border-radius: 0px;
          color: ${({ theme }) => theme.secondary_color};
          border-radius: 8px;

          &:hover {
            background-color: ${({ theme }) => theme.primary_color};
            border-color: ${({ theme }) => theme.primary_color};
          }
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

  .footer {
    background-color: ${({ theme }) => theme.primary_color};
    color: ${({ theme }) => theme.secondary_color};
    height: 50px;
    margin-top: -1.45em;
    margin-bottom: 5em;
    text-align: center;
    padding-top: 0.1em;
  }
`

export default StyledSection
