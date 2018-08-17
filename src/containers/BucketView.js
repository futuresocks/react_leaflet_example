import React, { Component } from 'react'
import MapBox from '../components/MapBox.js'

class BucketView extends Component{
  constructor(props){
    super(props)
    this.state = {
      bucketCountries: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/bucketlist")
    .then(response => response.json())
    .then(bucketCountries => this.setState({bucketCountries}))
  }

  render(){
    return null
  }

}

export default BucketView
