import React from "react"
import StyledSection from "./Details.styled"
import { Container, Row, Col, Image } from "react-bootstrap"
import Heading from "../../text/Heading"
import communityImage from "../../../images/ashima-pargal.jpg"
import selfDefenseImage from "../../../images/soon-santos.jpg"
import Fade from "react-reveal/Fade"

const Details = (props, { style: Style = StyledSection }) => {
  return (
    <Style>
      <Container>
        <Fade left duration={1100}>
          <Row xs={1} md={2} lg={2}>
            <Col>
              <Heading as="h2">SELF-DEFENSE</Heading>
              <p>
                BSK teaches self-defense to students of all ages. No matter your
                age or ability, you can learn to stay safe and strong!
              </p>
            </Col>
            <Col>
              <Image
                fluid
                className="mr-3"
                src={selfDefenseImage}
                alt="Two men practicing karate in a park"
              />
            </Col>
          </Row>
        </Fade>

        <Fade right duration={1100}>
          <Row xs={1} md={2} lg={2}>
            <Col>
              <Image
                fluid
                className="mr-3"
                src={communityImage}
                alt="Two young girls practicing karate outdoors. The rightmost girl is kicking toward the camera."
              />
            </Col>
            <Col>
              <Heading as="h2">COMMUNITY</Heading>
              <p>
                You're never alone at BSK! With a community of dedicated
                learners at your side, you'll always have people who will push
                you to be your best self.
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Style>
  )
}

export default Details
