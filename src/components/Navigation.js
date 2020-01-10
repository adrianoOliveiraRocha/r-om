import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import AboutUs from './AboutUs'
import Home from './Home'
import Contact from './Contact'


function Navigation(props) {
  
  return (
    <Router>

      <Nav />
      <div className="container">
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about-us" exact={true}>
          <AboutUs />
        </Route>
        <Route path="/contact" exact={true}>
          <Contact />
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default Navigation