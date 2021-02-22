// Dependencies
import React from "react"

// Components
import Heading from "../../text/Heading"
import Jump from "react-reveal/Jump"
import Quote from "./Quote"
import StyledSection from "./Testimonials.styled"
import { Container, Row, Col } from "react-bootstrap"

// Content
import StudentTestimonials from "../../../content/testimonials/StudentTestimonials"

const Testimonials = (props, { style: Style = StyledSection }) => {
  return (
    <Style {...props}>
      <Container as="section">
        <Heading>What Our Students Say</Heading>
        <Container>
          <Row xs={1} md={1} lg={3}>
            {StudentTestimonials.map((student, index) => {
              return (
                <Jump delay={125 * index + 125}>
                  <Col>
                    <Quote
                      text={student.quote}
                      citation={student.citation}
                    ></Quote>
                  </Col>
                </Jump>
              )
            })}
          </Row>
        </Container>
      </Container>
    </Style>
  )
}

export default Testimonials
