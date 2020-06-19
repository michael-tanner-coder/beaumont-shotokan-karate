import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Button,
  Container,
  Col,
  Row,
  Jumbotron,
  Media,
  Image,
} from "react-bootstrap"
import Hero from "../components/hero/Hero"
import heroImage from "../images/hero.jpg"
import Testimonials from "../components/sections/testimonials/Testimonials"
import Details from "../components/sections/details/Details"
import Apply from "../components/sections/apply/Apply"
import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <Layout>
    <section>
      <Hero image={heroImage}>
        <h1 className="title">
          Beaumont <br />
          Shotokan <br />
          Karate
        </h1>
      </Hero>
    </section>

    <Details />

    <Fade>
      <Testimonials />
    </Fade>

    <Apply />
  </Layout>
)

export default IndexPage
