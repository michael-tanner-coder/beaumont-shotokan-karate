import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import StyledClass from "./Class.styled"

const Class = (props, { style: Style = StyledClass }) => {
  return (
    <Style>
      <Card>
        <Card.Header>{props.classType}</Card.Header>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="bold"> Age Range: </span> {props.ageRange}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="bold"> Time: </span> {props.time}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="bold"> Length: </span> {props.length}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Style>
  )
}

export default Class
