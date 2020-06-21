// Dependencies
import React from "react"
import PropTypes from "prop-types"
import { default as theme } from "./theme"

// Styles
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

// Components
import { ThemeProvider } from "styled-components"
import Footer from "./footer/Footer"
import MainNav from "./nav/MainNav"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainNav />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
