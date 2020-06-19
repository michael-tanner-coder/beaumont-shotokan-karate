import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Container } from "react-bootstrap"
import Heading from "../components/text/Heading"
import styled from "styled-components"
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
    <SEO title="Contact us" />
    <Container>
      <FormContainer>
        <Heading center>Contact Us</Heading>
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
