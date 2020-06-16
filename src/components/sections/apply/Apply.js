import React from "react"
import StyledSection from "./Apply.styled"
import CTAImage from "../../../images/stock.jpg"
import { Container, Row, Col } from "react-bootstrap"
import Button from "../../button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const Apply = (props, { style: Style = StyledSection }) => {
  return (
    <Style id="apply">
      <Row fluid xs={1} sm={1} md={2} lg={2}>
        <Col className="join">
          <div className="join__header">
            <h1>JOIN TODAY!</h1>
          </div>
          <div className="join__body">
            <ul>
              <li>
                <h3>
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;Family-friendly <FontAwesomeIcon icon={faStar} />
                </h3>
              </li>
              <li>
                <h3>
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;Timeless lessons <FontAwesomeIcon icon={faStar} />
                </h3>
              </li>
              <li>
                <h3>
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;Low price <FontAwesomeIcon icon={faStar} />
                </h3>
              </li>
            </ul>
            <Button cta block>
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>
        </Col>
        <Col>
          <img src={CTAImage} className="image"></img>
        </Col>
      </Row>

      <div className="footer">
        <h2>
          First month is
          <span className="cta"> FREE</span>
        </h2>
      </div>
    </Style>
  )
}

export default Apply
