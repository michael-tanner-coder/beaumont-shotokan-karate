import React from "react"

// Page data
import Equipment from "../components/resources/Equipment"
import Terms from "../components/resources/Terms"
import Testing from "../components/resources/Testing"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/text/Heading"
import Tabs from "../components/tabs/Tabs"
import BGImg from "../components/bgImg/BGImg"
import { Container, Tab } from "react-bootstrap"
import Accordion from "../components/accordion/Accordion"

// Images
import StudentImg from "../images/charlein-gracia.jpg"

const ResourcesPage = () => (
  <Layout>
    <SEO
      title="Student Resources"
      description="Prepare yourself for training at BSK! Learn about the dojo terms, belt testing requirements, and where to buy your uniform and sparring equipment."
    />
    <BGImg image={StudentImg} x="center" y="25%">
      <Heading>Student Resources</Heading>
      <p>Become a better BSK student!</p>
    </BGImg>
    <Container as="section">
      <Tabs>
        <Tab eventKey="equipment" title="Equipment">
          <Accordion items={Equipment.items} />
        </Tab>
        <Tab eventKey="terms" title="Terms">
          <Accordion items={Terms.items} />
        </Tab>
        <Tab eventKey="testing" title="Testing">
          <Accordion items={Testing.items} />
        </Tab>
      </Tabs>
    </Container>
  </Layout>
)

export default ResourcesPage
