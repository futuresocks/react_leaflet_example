import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import './MapBox.css'
import MarkerView from './MarkerView'

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

  removeMarker = function(coordsToRemove){
    let markers = this.state.markers.filter(coords => coords !== coordsToRemove);
    this.setState({markers})
  }


  render(){
    if(!this.props.country) return null

    return(
      <Map center={this.props.country.latlng} zoom={1} onClick={this.addMarker}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <MarkerView markers={this.state.markers} handleMarkerClick={this.removeMarker}/>
      </Map>
    )
  }

}


export default MapBox
