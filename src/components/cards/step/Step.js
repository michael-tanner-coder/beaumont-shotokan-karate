import React from "react"
import { Card } from "react-bootstrap"
import StyledStep from "./Step.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import Button from "../../button/Button"

const Step = (props, { style: Style = StyledStep }) => {
  return (
    <Style>
      <Card>
        <FontAwesomeIcon icon={props.icon} className="icon" />

        <Card.Body>
          <h2>{props.step}</h2>
          <Link to={props.link}>
            {" "}
            <Button>{props.content}</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </Style>
  )
}

export default Step
