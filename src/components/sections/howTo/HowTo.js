import React from "react"
import Heading from "../../text/Heading"
import { Container, Row, Col } from "react-bootstrap"
import StyledSection from "./HowTo.styled"
import Step from "../../cards/step/Step"

import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import { faStickyNote } from "@fortawesome/free-solid-svg-icons"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"

const HowTo = (props, { style: Style = StyledSection }) => {
  return (
    <Style>
      <Container>
        <Heading>How to Join</Heading>
        <Row xs={1} md={3} lg={3}>
          <Col>
            <Step
              step="1. Find our location"
              size="lg"
              icon={faMapMarkedAlt}
              link="#location"
            />
          </Col>
          <Col>
            <Step
              step="2. Fill out our form"
              size="lg"
              icon={faStickyNote}
              link="#apply"
            />
          </Col>
          <Col>
            <Step
              step="3. Pay a monthly fee"
              size="lg"
              icon={faDollarSign}
              link="/classes#rates"
            />
          </Col>
        </Row>
      </Container>
    </Style>
  )
}

export default HowTo
