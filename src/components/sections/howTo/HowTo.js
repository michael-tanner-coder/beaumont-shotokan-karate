import React from "react"
import Heading from "../../text/Heading"
import { Container, Row, Col } from "react-bootstrap"
import StyledSection from "./HowTo.styled"
import Step from "../../cards/step/Step"

import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import { faStickyNote } from "@fortawesome/free-solid-svg-icons"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import Jump from "react-reveal/Jump"

const HowTo = (props, { style: Style = StyledSection }) => {
  return (
    <Style>
      <Container>
        <Heading>How to Join</Heading>
        <Row xs={1} md={3} lg={3}>
          <Jump delay={125}>
            <Col>
              <Step
                step="1. Find our location"
                size="lg"
                icon={faMapMarkedAlt}
                link="#location"
                content="View address"
              />
            </Col>
          </Jump>
          <Jump delay={250}>
            <Col>
              <Step
                step="2. Fill out our form"
                size="lg"
                icon={faStickyNote}
                link="/contact"
                content="Contact us for a form"
              />
            </Col>
          </Jump>
          <Jump delay={500}>
            <Col>
              <Step
                step="3. Pay a monthly fee"
                size="lg"
                icon={faDollarSign}
                link="/classes#rates"
                content="View our rates"
              />
            </Col>
          </Jump>
        </Row>
      </Container>
    </Style>
  )
}

export default HowTo
