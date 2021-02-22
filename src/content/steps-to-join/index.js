// Icons
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import { faStickyNote } from "@fortawesome/free-solid-svg-icons"

const StepsToJoin = [
  {
    step: "1. Find our location",
    size: "lg",
    icon: faMapMarkedAlt,
    link: "#location",
    content: "View address",
  },
  {
    step: "2. Fill out our form",
    size: "lg",
    icon: faStickyNote,
    link: "/contact",
    content: "Contact us for a form",
  },
  {
    step: "3. Pay a monthly fee",
    size: "lg",
    icon: faDollarSign,
    link: "/classes#rates",
    content: "View our rates",
  },
]

export default StepsToJoin
