// Dependencies
import React from "react"

// Components
import Heading from "../../text/Heading"
import Jump from "react-reveal/Jump"
import Quote from "./Quote"
import StyledSection from "./Testimonials.styled"
import { Container, Row, Col } from "react-bootstrap"

const Testimonials = (props, { style: Style = StyledSection }) => {
  return (
    <Style {...props}>
      {" "}
      <Container as="section">
        <Heading>What Our Students Say</Heading>
        <Container>
          <Row xs={1} md={1} lg={3}>
            <Jump delay={125}>
              <Col>
                <Quote
                  text="BSK helped me grow as a person. I'm more confident than ever!"
                  citation="Zachary, green belt"
                ></Quote>
              </Col>
            </Jump>
            <Jump delay={250}>
              <Col>
                <Quote
                  text="I learned so much and made so many friends!"
                  citation="Eliza, brown belt"
                ></Quote>
              </Col>
            </Jump>
            <Jump delay={500}>
              <Col>
                <Quote
                  text="Our sensei trains us hard, but it's always worth the effort!"
                  citation="Rajat, purple belt"
                ></Quote>
              </Col>
            </Jump>
          </Row>
        </Container>
      </Container>
    </Style>
  )
}

export default Testimonials
