import React, { Component } from 'react'
import GoogleMap from 'google-map-react'

import Marker from './Marker'
const API_KEY = 'AIzaSyApEtV91SUCYB87pFpQCOYtcwxrfxnY6_A'

class Map extends Component {
  static defaultProps = {
    center: {lat: 4.70, lng: -74.07},
    zoom: 15
  }

  render() {
    return (
      <div className='map'>
        <GoogleMap
          bootstrapURLKeys={{key: API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={4.70} lng={-74.07}/>
        </GoogleMap>
      </div>
    )
  }
}

export default Map
