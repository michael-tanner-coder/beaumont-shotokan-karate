import React from "react"
import StyledHeading from "./Heading.styled"
import PropTypes from "prop-types"

const Heading = (props, { style: Style = StyledHeading }) => {
  return (
    <Style>
      <props.as>{props.children}</props.as>
    </Style>
  )
}

Heading.propTypes = {
  as: PropTypes.string,
}

Heading.defaultProps = {
  as: "h1",
}

export default Heading
