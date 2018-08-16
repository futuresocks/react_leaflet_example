import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './MapBox.css'

class MapBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markers: []
    }
    this.addMarker = this.addMarker.bind(this)
    this.removeMarker = this.removeMarker.bind(this)
  }

  addMarker = function(event){
    this.setState({markers: [...this.state.markers, event.latlng]})
  }

  removeMarker = function(event){
    let markers = this.state.markers.filter(coords => coords !== event.latlng);
    this.setState({markers})
  }


  render(){
    if(!this.props.country) return null

    const markerNodes = this.state.markers.map((coords, index) => {
      return <Marker key={index} position={coords} onClick ={this.removeMarker}/>
    })

    return(
      <Map center={this.props.country.latlng} zoom={1} onClick={this.addMarker}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {markerNodes}
      </Map>
    )
  }

}


export default MapBox
