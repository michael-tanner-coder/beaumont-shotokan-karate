import React from "react"

import StyledBG from "./BGImg.styled"
import { Jumbotron, Container } from "react-bootstrap"

const BGImg = (props, { style: Style = StyledBG }) => {
  return (
    <Style {...props}>
      <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>{props.children}</Container>
      </Jumbotron>
    </Style>
  )
}

export default BGImg
