import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './MapBox.css'

const MapBox = (props) => {

  if(!props.country) return null

  return(
  <Map center={props.country.latlng} zoom={1}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={props.country.latlng}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>
)

}


export default MapBox
