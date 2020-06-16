import React from "react"
import { Card } from "react-bootstrap"
import StyledStep from "./Step.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Step = (props, { style: Style = StyledStep }) => {
  return (
    <Style>
      <Card>
        <FontAwesomeIcon icon={props.icon} className="icon" />
        <Card.Body>
          <h3>{props.step}</h3>
        </Card.Body>
      </Card>
    </Style>
  )
}

export default Step
