import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import GlobeView from './GlobeView'
import Navbar from '../components/Navbar'

const GloboBucket = () => (

  <Router>
    <React.Fragment>
      <Navbar/>
      <Route exact path="/" component= { GlobeView }/>
    </React.Fragment>
  </Router>

)

export default GloboBucket
