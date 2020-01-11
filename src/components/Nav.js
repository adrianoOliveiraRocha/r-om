import React from 'react'
import { NavLink } from 'react-router-dom'
import './../css/bootstrap.min.css'
function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Logo</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">Sobre Nós</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink class="dropdown-item" to="/">Action</NavLink>
              <NavLink class="dropdown-item" to="/">Another action</NavLink>
              <NavLink class="dropdown-item" to="#">Something else here</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contato</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email" />
          <input className="form-control mr-sm-2" type="password" placeholder="Senha" aria-label="Senha" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </form>
      </div>
    </nav>
  )

 }

export default Nav