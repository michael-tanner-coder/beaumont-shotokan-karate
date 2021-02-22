import React from "react"

import Heading from "../../text/Heading"
import StyledSection from "./Rates.styled"
import { Table, Container } from "react-bootstrap"

const Rates = ({ style: Style = StyledSection }) => {
  return (
    <Style id="rates">
      <Container>
        <Heading>Rates</Heading>
        <Table bordered striped>
          <thead>
            <tr>
              <th>1 PERSON</th>
              <th>2 FAMILY MEMBERS</th>
              <th>3 OR MORE FAMILY MEMBERS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$30/mo</td>
              <td>$50/mo</td>
              <td>$60/mo</td>
            </tr>
          </tbody>
        </Table>
        <Container>
          <h2>No Contracts</h2>
          <hr />
          <h2>
            First month is <span className="red">FREE</span>
          </h2>
        </Container>
      </Container>
    </Style>
  )
}

export default Rates
