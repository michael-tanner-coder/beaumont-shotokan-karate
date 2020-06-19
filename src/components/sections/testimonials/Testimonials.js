import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import StyledSection from "./Testimonials.styled"
import Heading from "../../text/Heading"
import Quote from "./Quote"
import Jump from "react-reveal/Jump"
import Fade from "react-reveal/Fade"

const Testimonials = (props, { style: Style = StyledSection }) => {
  return (
    <Style {...props}>
      {" "}
      <Container as="section">
        <Heading>What Our Students Say</Heading>
        <Container>
          <Row xs={1} md={1} lg={3}>
            <Fade left>
              <Col>
                <Quote
                  text="BSK helped me grow as a person. I'm more confident than ever!"
                  citation="Zachary, green belt"
                ></Quote>
              </Col>
            </Fade>
            <Fade top>
              <Col>
                <Quote
                  text="I learned so much and made so many friends!"
                  citation="Eliza, brown belt"
                ></Quote>
              </Col>
            </Fade>
            <Fade right>
              <Col>
                <Quote
                  text="Our sensei trains us hard, but it's always worth the effort!"
                  citation="Rajat, purple belt"
                ></Quote>
              </Col>
            </Fade>
          </Row>
        </Container>
      </Container>
    </Style>
  )
}

export default Testimonials
