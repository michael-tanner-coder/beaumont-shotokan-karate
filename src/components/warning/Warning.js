import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import StyledWarning from "./Warning.styled.js"

const Warning = ({ style: Style = StyledWarning }) => {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Style>
        <Alert
          variant="danger"
          dismissible
          onClose={() => {
            setShow(false)
          }}
        >
          <Alert.Heading>COVID-19 Update</Alert.Heading>
          Due to the COVID-19 pandemic, BSK has temporarily moved all classes to
          remote Zoom sessions. No new student applications can be accepted at
          this time.
          <br />
          <br />
          Contact Sensei Patty at{" "}
          <a href="mailto:patty_tanner@sbcglobal.net">
            patty_tanner@sbcglobal.net
          </a>{" "}
          to learn how to join us online.
        </Alert>
      </Style>
    )
  } else {
    return <></>
  }
}

export default Warning
