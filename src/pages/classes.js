import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Apply from "../components/sections/apply/Apply"
import ClassTypes from "../components/sections/classTypes/ClassTypes"
import Rates from "../components/sections/rates/Rates"
import HowTo from "../components/sections/howTo/HowTo"
import Heading from "../components/text/Heading"
import BGImg from "../components/bgImg/BGImg"
import ClassImg from "../images/thao-le-hoang.jpg"
import Fade from "react-reveal"

const ClassesPage = () => (
  <Layout>
    <SEO title="Classes" />
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
