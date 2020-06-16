import React from "react"
import StyledTabs from "./Tabs.styled"

import { Tabs as BootStrapTabs } from "react-bootstrap"

const Tabs = (props, { style: Style = StyledTabs }) => {
  return (
    <Style>
      <BootStrapTabs>{props.children}</BootStrapTabs>
    </Style>
  )
}

export default Tabs
