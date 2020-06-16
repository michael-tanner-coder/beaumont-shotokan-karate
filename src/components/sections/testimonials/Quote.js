import React from "react"
import StyledQuote from "./Quote.styled"

const Quote = (props, { style: Style = StyledQuote }) => {
  return (
    <Style>
      <div className="quotes">
        {" "}
        <span className="quote">"</span>
        <span className="quote">"</span>
      </div>

      <p>{props.text}</p>
      <cite> - {props.citation}</cite>
    </Style>
  )
}

export default Quote
