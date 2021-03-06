// Dependencies
import React from "react"

// Components
import Heading from "../../text/Heading"
import Jump from "react-reveal/Jump"
import Step from "../../cards/step/Step"
import StyledSection from "./HowTo.styled"
import { Container, Row, Col } from "react-bootstrap"

// Content
import StepsToJoin from "../../../content/steps-to-join"

const HowTo = ({ style: Style = StyledSection }) => {
  return (
    <Style>
      <Container>
        <Heading>How to Join</Heading>
        <Row xs={1} md={3} lg={3}>
          {StepsToJoin.map((step, index) => {
            return (
              <Jump delay={125 * index + 125}>
                <Col>
                  <Step {...step} />
                </Col>
              </Jump>
            )
          })}
        </Row>
      </Container>
    </Style>
  )
}

export default HowTo
