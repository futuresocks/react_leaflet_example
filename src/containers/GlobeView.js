import React from 'react'
import MapBox from '../components/MapBox'
import Header from '../components/Header'
import CountrySelector from '../components/CountrySelector'

class GlobeView extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      selectedCountry: null
    }
    this.handleCountrySelected = this.handleCountrySelected.bind(this)
    this.addCountry = this.addCountry.bind(this)
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

  addCountry(event){
    event.preventDefault()
    if(!this.state.selectedCountry) return;

    fetch('http://localhost:3001/bucketlist', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify(this.state.selectedCountry)})
    .catch(err => console.log(err))
  }


  render(){
    return(
      <React.Fragment>
        <Header title="React Leaflet"/>
        <CountrySelector countries = {this.state.countries} onCountrySelect={this.handleCountrySelected}/>
        <MapBox country = {this.state.selectedCountry}/>
        <button onClick = {this.addCountry} value = "Add a country"/>
      </React.Fragment>
    )
  }
}

export default GlobeView
