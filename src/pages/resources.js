import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Table,
  Tab,
  Card,
  Button,
} from "react-bootstrap"
import Accordion from "../components/accordion/Accordion"
import Equipment from "../components/resources/Equipment"
import Terms from "../components/resources/Terms"
import Testing from "../components/resources/Testing"
import Heading from "../components/text/Heading"
import Tabs from "../components/tabs/Tabs"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Student Resources" />
    <Jumbotron>
      <Heading>Student Resources</Heading>
      <p>Become a better BSK student!</p>
    </Jumbotron>
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
    <br />
  </Layout>
)

export default ResourcesPage
