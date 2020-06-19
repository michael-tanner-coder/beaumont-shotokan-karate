import styled from "styled-components"

const StyledSection = styled.div`
  margin-top: 50vh;
  margin-bottom: 50vh;

  .entered {
    opacity: 1;
    transition: opacity, 0.4s ease-in-out;
  }

  .entering {
    opacity: 0;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    75% {
      opacity: 0.75;
    }

    100% {
      opacity: 1;
    }
  }

  h1 {
    margin-bottom: 0.5em;
    text-align: center;
  }

  q {
    margin-top: 50%;
    margin-bottom: 50%;
  }

  @media (max-width: 995px) {
    .col {
      margin-bottom: 1.2em;
    }
  }
`

export default StyledSection
