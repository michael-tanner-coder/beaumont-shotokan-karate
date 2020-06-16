import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Table,
  Jumbotron,
} from "react-bootstrap"
import Apply from "../components/sections/apply/Apply"
import ClassTypes from "../components/sections/classTypes/ClassTypes"
import Rates from "../components/sections/rates/Rates"
import HowTo from "../components/sections/howTo/HowTo"
import Heading from "../components/text/Heading"

const ClassesPage = () => (
  <Layout>
    <SEO title="Classes" />
    <Jumbotron>
      <Heading>Class Information</Heading>
      <p>Sign up for BSK today!</p>
    </Jumbotron>
    <ClassTypes />
    <Rates />
    <HowTo />
    <Apply />
  </Layout>
)

export default ClassesPage
