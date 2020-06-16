import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Jumbotron } from "react-bootstrap"
import Heading from "../components/text/Heading"
import Accordion from "../components/accordion/Accordion"
import QandA from "../components/q-a/QandA"

const FAQPage = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />
    <Jumbotron>
      <Heading>FAQ</Heading>
      <p>Learn more here</p>
    </Jumbotron>

    <Container>
      <Accordion items={QandA.items} />
    </Container>
    <br />
  </Layout>
)

export default FAQPage
