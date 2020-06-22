// Dependencies
import React, { useState } from "react"
import PropTypes from "prop-types"

// Styles
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { default as theme } from "./theme"
import { default as theme_alt } from "./theme_night"
import StyledLayout from "./layout.styled"

// Components
import { ThemeProvider } from "styled-components"
import Footer from "./footer/Footer"
import MainNav from "./nav/MainNav"

const Layout = ({ children, style: Style = StyledLayout }) => {
  const [activeTheme, setActiveTheme] = useState(theme)

  return (
    <>
      <ThemeProvider theme={activeTheme}>
        <Style>
          <MainNav />
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </Style>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
