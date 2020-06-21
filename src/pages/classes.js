// Dependencies
import React from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Apply from "../components/sections/apply/Apply"
import ClassTypes from "../components/sections/classTypes/ClassTypes"
import Rates from "../components/sections/rates/Rates"
import HowTo from "../components/sections/howTo/HowTo"
import Heading from "../components/text/Heading"
import BGImg from "../components/bgImg/BGImg"
import Fade from "react-reveal"

// Images
import ClassImg from "../images/thao-le-hoang.jpg"

const ClassesPage = () => (
  <Layout>
    <SEO
      title="Class Times and Pricing"
      description="Learn more about our karate class times and affordable family rates. Join BSK today!"
    />
    <BGImg image={ClassImg} x="center" y="center">
      <Heading>Class Information</Heading>
      <p>Sign up for BSK today!</p>
    </BGImg>
    <ClassTypes />

    <Fade>
      <Rates />
    </Fade>
    <Fade>
      <HowTo />
    </Fade>
    <Apply />
  </Layout>
)

export default ClassesPage
