import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import GlobeView from './GlobeView'

const GloboBucket = () => (
  <Router>
    <Route exact path="/" component= { GlobeView }/>
  </Router>
)

export default GloboBucket
