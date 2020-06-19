import React from "react"
import StyledSection from "./Apply.styled"
import CTAImage from "../../../images/stock.jpg"
import { Container, Row, Col } from "react-bootstrap"
import Button from "../../button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

const Apply = (props, { style: Style = StyledSection }) => {
  return (
    <Style id="apply">
      <Row fluid xs={1} sm={1} md={2} lg={2}>
        <Col className="join">
          <Fade left duration={800}>
            <div>
              <div className="join__header">
                <h1>JOIN TODAY!</h1>
              </div>
              <div className="join__body">
                <ul>
                  <li>
                    <h2>
                      <FontAwesomeIcon icon={faStar} />
                      &nbsp;Family-friendly <FontAwesomeIcon icon={faStar} />
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <FontAwesomeIcon icon={faStar} />
                      &nbsp;Timeless lessons <FontAwesomeIcon icon={faStar} />
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <FontAwesomeIcon icon={faStar} />
                      &nbsp;Family Rates <FontAwesomeIcon icon={faStar} />
                    </h2>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button cta block>
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </Fade>
        </Col>
        <Col>
          <Fade right duration={800}>
            <img
              src={CTAImage}
              className="image"
              alt="A small, smiling girl wearing a karate uniform. She is holding her fists up in a fighting stance."
            ></img>
          </Fade>
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
