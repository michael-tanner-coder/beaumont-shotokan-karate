import React from "react"

import GoogleMapReact from "google-map-react"
import StyledMap from "./Map.styled"
import Pin from "../pin/Pin"

const Map = ({ style: Style = StyledMap, location, zoomLevel }, props) => {
  return (
    <Style {...props}>
      <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GATSBY_API_KEY,
            }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
          >
            <Pin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    </Style>
  )
}

export default Map
