import React from "react"

import StyledQuote from "./Quote.styled"

const Quote = (props, { style: Style = StyledQuote }) => {
  return (
    <Style>
      <div className="quotes">
        {" "}
        <span className="quote-mark">"</span>
        <span className="quote-mark">"</span>
      </div>

      <p>{props.text}</p>
      <cite> - {props.citation}</cite>
    </Style>
  )
}

export default Quote
