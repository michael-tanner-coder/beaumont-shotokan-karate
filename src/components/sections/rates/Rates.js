import React from "react"
import StyledSection from "./Rates.styled"
import { Table, Container } from "react-bootstrap"
import Heading from "../../text/Heading"

const Rates = (props, { style: Style = StyledSection }) => {
  return (
    <Style>
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
          <h4>No Contracts</h4>
          <hr />
          <h4>
            First month is <span className="red">FREE</span>
          </h4>
        </Container>
      </Container>
    </Style>
  )
}

export default Rates
