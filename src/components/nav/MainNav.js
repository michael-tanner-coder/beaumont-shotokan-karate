import React from "react"

import StyledNav from "./MainNav.styled"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const MainNav = (props, { style: Style = StyledNav }) => {
  return (
    <Style>
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand href="/">BSK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav justify className="mx-auto w-100">
            <Nav.Item>
              <Link activeClassName="active" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClassName="active" to="/classes">
                Classes
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClassName="active" to="/resources">
                Student Resources
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClassName="active" to="/contact">
                Contact Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link activeClassName="active" to="/faq">
                FAQ
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Style>
  )
}

export default MainNav
