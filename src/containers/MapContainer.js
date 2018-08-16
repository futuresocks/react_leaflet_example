import React from 'react'
import MapBox from '../components/MapBox.js'
import CountrySelector from '../components/CountrySelector.js'

class MapContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      selectedCountry: null
    }
    this.handleCountrySelected = this.handleCountrySelected.bind(this)
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(countries => this.setState({countries}))
  }


  handleCountrySelected(index){
    const selectedCountry = this.state.countries[index];
    this.setState({selectedCountry});
  }


  render(){
    return(
      <React.Fragment>
        <h1>React Leaflet</h1>
        <CountrySelector countries = {this.state.countries} onCountrySelect={this.handleCountrySelected}/>
        <MapBox country = {this.state.selectedCountry}/>
      </React.Fragment>
    )
  }
}

export default MapContainer
