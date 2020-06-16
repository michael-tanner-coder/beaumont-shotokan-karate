import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import StyledSection from "./Testimonials.styled"
import Heading from "../../text/Heading"
import Quote from "./Quote"

const Testimonials = (props, { style: Style = StyledSection }) => {
  return (
    <Style>
      {" "}
      <Container as="section">
        <Heading>What Our Students Say</Heading>
        <Container>
          <Row xs={1} md={1} lg={3}>
            <Col>
              <Quote
                text="BSK helped me grow as a person. I'm more confident than ever!"
                citation="Zachary, green belt"
              ></Quote>
            </Col>
            <Col>
              <Quote
                text="I learned so much and made so many friends!"
                citation="Eliza, brown belt"
              ></Quote>
            </Col>
            <Col>
              <Quote
                text="Our sensei trains us hard, but it's always worth the effort!"
                citation="Rajat, purple belt"
              ></Quote>
            </Col>
          </Row>
        </Container>
      </Container>
    </Style>
  )
}

export default Testimonials
