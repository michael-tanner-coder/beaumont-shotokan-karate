import React, { useState } from "react"
import BlackBelt from "../../images/BlackBelt.svg"
import WhiteBelt from "../../images/WhiteBelt.svg"
import { icon } from "@fortawesome/fontawesome-svg-core"

const ThemeBtn = () => {
  const [imgIcon, setImgIcon] = useState(BlackBelt)
  return (
    <div>
      <img
        src={imgIcon}
        onClick={() => {
          setImgIcon(imgIcon === BlackBelt ? WhiteBelt : BlackBelt)
        }}
        height="21px"
        width="59px"
        alt=""
      />
    </div>
  )
}

export default ThemeBtn
