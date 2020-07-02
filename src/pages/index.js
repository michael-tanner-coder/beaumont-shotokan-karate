// Dependencies
import React from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import Testimonials from "../components/sections/testimonials/Testimonials"
import Details from "../components/sections/details/Details"
import Apply from "../components/sections/apply/Apply"
import Warning from "../components/warning/Warning"
import Fade from "react-reveal/Fade"

// Images
import heroImage from "../images/hero.jpg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Traditional, family-friendly karate lessons in Beaumont, Texas."
    />
    <Warning />
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
