import React from 'react';
import { Marker, Popup } from 'react-leaflet'

const MarkerView = (props) => {

  function removeMarker(event){
    props.handleMarkerClick(event.latlng)
  }

  const markerNodes = props.markers.map((coords, index) => {
    return <Marker key={index} position={coords} onClick ={removeMarker}/>
  })

  return(
    <React.Fragment>
      {markerNodes}
    </React.Fragment>
  )

}

export default MarkerView
