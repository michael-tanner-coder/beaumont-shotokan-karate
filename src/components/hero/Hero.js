import React from "react"

import StyledHero from "./Hero.styled"
import { Jumbotron, Container } from "react-bootstrap"

const Hero = (props, { style: Style = StyledHero }) => {
  return (
    <Style {...props}>
      <Jumbotron fluid className="jumbo">
        <Container>{props.children}</Container>
      </Jumbotron>
    </Style>
  )
}

export default Hero
