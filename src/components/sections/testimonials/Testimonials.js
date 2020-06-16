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
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                citation="Person"
              ></Quote>
            </Col>
            <Col>
              <Quote
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                citation="Person"
              ></Quote>
            </Col>
            <Col>
              <Quote
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                citation="Person"
              ></Quote>
            </Col>
          </Row>
        </Container>
      </Container>
    </Style>
  )
}

export default Testimonials
