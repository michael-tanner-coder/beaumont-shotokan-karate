// Dependencies
import React from "react"

// Components
import Class from "../../cards/class/Class"
import Fade from "react-reveal/Fade"
import Heading from "../../text/Heading"
import StyledSection from "./ClassTypes.styled"
import { Container, Row, Col } from "react-bootstrap"

// Images
import adults from "../../../images/adults.jpg"
import bigKids from "../../../images/bigKids.jpg"
import karateKid from "../../../images/karatekid.jpg"

const ClassTypes = (props, { style: Style = StyledSection }) => {
  return (
    <Style>
      {" "}
      <Container>
        <Heading center>Classes</Heading>
        <Row xs={1} sm={1} md={2} lg={3}>
          <Fade delay={125}>
            <Col>
              <Class
                classType="LITTLE KIDS"
                ageRange="4 - 6 year-olds"
                time="Tu/Th: 5pm"
                length="30 min"
                image={karateKid}
                alt="Small girl in a karate uniform, standing next to a tree at daytime"
              />
            </Col>
          </Fade>
          <Fade delay={250}>
            <Col>
              <Class
                classType="BIG KIDS"
                ageRange="7 - 12 year-olds"
                time="Tu/Th: 5:30pm"
                length="1 hour"
                image={bigKids}
                alt="Two children, a boy and a girl, practicing karate outside. The girl is punching toward the camera."
              />
            </Col>
          </Fade>

          <Fade delay={500}>
            <Col>
              <Class
                classType="ADULTS"
                ageRange="13 and up"
                time="Tu/Th: 7:30pm"
                length="1 hour and 30 minutes"
                image={adults}
                alt="Two men sparring outdoors. One man is leaping to punch the other. The other man is raising his leg to kick."
              />
            </Col>
          </Fade>
        </Row>
      </Container>
    </Style>
  )
}

export default ClassTypes
