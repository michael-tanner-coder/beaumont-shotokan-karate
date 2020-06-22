import React from "react"
import { Icon } from "@iconify/react"
import locationIcon from "@iconify/icons-mdi/map-marker"
import StyledPin from "./Pin.styled"

const Pin = ({ text, style: Style = StyledPin }) => {
  return (
    <Style>
      <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
      </div>
    </Style>
  )
}

export default Pin
