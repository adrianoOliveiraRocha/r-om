import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import HomeAdmin from './components/HomeAdmin'
import Logout from './components/Logout'


function App() {

  const [data, setData] = useState({
    email: 'example@email.com',
    pwd: '123'
  })

  function changeData(newData) {
    setData(newData)
  }

  return (
    <div className="container">

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
            <Route path="/login" exact={true}>
              <Login data={data} onChangeData={changeData}/>
            </Route>
            <Route path="/admin" exact={true}>
              <HomeAdmin />
            </Route>
            <Route path="/logout" exact={true}>
              <Logout />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default App
