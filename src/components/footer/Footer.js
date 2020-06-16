import React from "react"
import StyledFooter from "./Footer.styled"
import { Container, Col, Row, Button } from "react-bootstrap"
import Map from "../map/Map"
import { FacebookProvider, Page } from "react-facebook"

const location = {
  address: "5115 Eastex Freeway, Beaumont, TX 77706",
  lat: 30.122415,
  lng: -94.15207,
}

const Footer = ({ style: Style = StyledFooter }) => {
  return (
    <Style>
      <Container fluid>
        <Row xs={1} md={2} lg={3}>
          <Col>
            <h2>Find us on Facebook!</h2>
            <FacebookProvider appId="2620566434877428">
              <Page
                href="https://www.facebook.com/BeaumontShotokan/"
                tabs="timeline"
              />
            </FacebookProvider>
          </Col>
          <Col>
            <h2 id="location">Location</h2>
            <Map location={location} zoomLevel={17} />
          </Col>
          <Col>
            {" "}
            <h2>Contact</h2>
            <ul>
              <li>(832) 492-2220</li>
              <li>patty_tanner@sbcglobal.net</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Style>
  )
}

export default Footer
