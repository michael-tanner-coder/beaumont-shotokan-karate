import React from "react"
import StyledSection from "./Details.styled"
import { Container, Row, Col, Image } from "react-bootstrap"
import Heading from "../../text/Heading"
import communityImage from "../../../images/ashima-pargal.jpg"
import selfDefenseImage from "../../../images/soon-santos.jpg"

const Details = (props, { style: Style = StyledSection }) => {
  return (
    <Style>
      <Container>
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
              alt="Generic placeholder"
            />
          </Col>
        </Row>

        <Row xs={1} md={2} lg={2}>
          <Col>
            <Image
              fluid
              className="mr-3"
              src={communityImage}
              alt="Generic placeholder"
            />
          </Col>
          <Col>
            <Heading as="h2">COMMUNITY</Heading>
            <p>
              You're never alone at BSK! With a community of dedicated learners
              at your side, you'll always have people who will push you to be
              your best self.
            </p>
          </Col>
        </Row>
      </Container>
    </Style>
  )
}

export default Details
