// Dependencies
import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Container } from "react-bootstrap"
import { Link } from "gatsby"
import Heading from "../components/text/Heading"
import Button from "../components/button/Button"

const Asterisk = styled.span`
  &:after {
    color: ${({ theme }) => theme.cta_color};
    content: "*";
  }
`

const FormContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
  min-width: 280px;

  .sub-btn {
    width: fit-content;
  }
`

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact us"
      description="Contact our sensei to get a registration form and join Beaumont Shotokan Karate."
    />
    <Container>
      <FormContainer>
        <Heading center>Contact Us</Heading>

        <p className="text-muted">
          Want to join BSK? Message us to get an application form or ask
          questions about our rates and policies.
          <br />
          <br />
          If you need a quick answer, check out our <Link to="/faq">
            FAQ
          </Link>{" "}
          page.
        </p>

        <Form>
          <Form.Group>
            <Form.Label for="name">
              Name:
              <Asterisk />
            </Form.Label>
            <Form.Control
              required
              type="name"
              id="name"
              placeholder="First and last name"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label for="email">
              Email: <Asterisk />
            </Form.Label>
            <Form.Control
              required
              type="email"
              id="email"
              placeholder="Email address"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label for="phone">Phone:</Form.Label>
            <Form.Control
              type="phone"
              id="phone"
              placeholder="Phone number"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label for="message">
              Message: <Asterisk />
            </Form.Label>
            <Form.Control
              required
              as="textarea"
              id="message"
              placeholder="Your message"
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="sub-btn">
            Submit
          </Button>
        </Form>
      </FormContainer>
    </Container>
  </Layout>
)

export default ContactPage
