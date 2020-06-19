import React from "react"
import { Card } from "react-bootstrap"
import StyledStep from "./Step.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

const Step = (props, { style: Style = StyledStep }) => {
  return (
    <Style>
      <Card>
        <Link to={props.link}>
          <FontAwesomeIcon icon={props.icon} className="icon" />
        </Link>
        <Card.Body>
          <h2>{props.step}</h2>
        </Card.Body>
      </Card>
    </Style>
  )
}

export default Step
