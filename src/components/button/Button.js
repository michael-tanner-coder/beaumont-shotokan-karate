import React from "react"
import { Button as Btn } from "react-bootstrap"
import StyledButton from "./Button.styled"

const Button = (props, { style: Style = StyledButton }) => {
  return (
    <Style {...props}>
      <Btn {...props}>{props.children}</Btn>
    </Style>
  )
}

export default Button
