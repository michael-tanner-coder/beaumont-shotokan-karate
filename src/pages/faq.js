import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Heading from "../components/text/Heading"
import Accordion from "../components/accordion/Accordion"
import QandA from "../components/q-a/QandA"
import BGImg from "../components/bgImg/BGImg"
import BeltImg from "../images/leslie-jones.jpg"

const FAQPage = () => (
  <Layout>
    <SEO
      title="Frequently Asked Questions"
      description="Want to know more about BSK? Read on about our monthly costs, contracts, and karate tournament policies."
    />
    <BGImg image={BeltImg} x="center" y="65%">
      <Heading>FAQ</Heading>
      <p>Learn more here</p>
    </BGImg>

    <Container>
      <Accordion items={QandA.items} />
    </Container>
    <br />
  </Layout>
)

export default FAQPage
