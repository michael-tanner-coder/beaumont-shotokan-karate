// Dependencies
import React from "react"

// Components
import { Accordion as Acc, Card } from "react-bootstrap"
import StyledAccordion from "./Accordion.styled"

function setActive(e) {
  var target_element = e.target
  var elements = document.getElementsByClassName("card-header")
  Array.prototype.forEach.call(elements, function (el) {
    if (el === target_element) {
      el.classList.add("active")
    } else {
      el.classList.remove("active")
    }
  })
}

const Accordion = (props, { style: Style = StyledAccordion }) => {
  return (
    <Style>
      <Acc>
        {props.items.map(item => {
          return (
            <Card>
              <Acc.Toggle
                variant="link"
                as={Card.Header}
                eventKey={props.items.indexOf(item)}
                onClick={e => setActive(e)}
              >
                {item.label}
              </Acc.Toggle>
              <Acc.Collapse eventKey={props.items.indexOf(item)}>
                <Card.Body>{item.content}</Card.Body>
              </Acc.Collapse>
            </Card>
          )
        })}
      </Acc>
    </Style>
  )
}

export default Accordion
