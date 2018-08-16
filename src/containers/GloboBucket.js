import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import GlobeView from './GlobeView'
import Navbar from '../components/Navbar'
import BucketView from './BucketView'

const GloboBucket = () => (

  <Router>
    <React.Fragment>
      <Navbar/>
      <Route exact path="/" component= { GlobeView }/>
      <Route path="/bucketlist" component= { BucketView }/>
    </React.Fragment>
  </Router>

)

export default GloboBucket
