import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Jumbotron } from "react-bootstrap"
import Heading from "../components/text/Heading"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      description="The page you were looking for does not exist."
    />
    <Container>
      <br />
      <Jumbotron>
        <h1>404: PAGE NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
        <p>Were you looking for one of these pages?</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </Jumbotron>
    </Container>
  </Layout>
)

export default NotFoundPage
