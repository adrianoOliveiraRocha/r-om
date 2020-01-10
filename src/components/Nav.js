import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {

  return (

    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      
      <NavLink className="navbar-brand" to="/">Logo</NavLink>

     
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about-us">Sobre Nós</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contato</NavLink>
        </li>

        
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" id="navbardrop" data-toggle="dropdown">
            Dropdown link
          </NavLink>
          <div className="dropdown-menu">
            <NavLink className="dropdown-item" to="/category?id=1">Categoria 1</NavLink>
            <NavLink className="dropdown-item" to="/category?id=2">Categoria 2</NavLink>
            <NavLink className="dropdown-item" to="/category?id=3">Categoria 3</NavLink>
          </div>
        </li>
      </ul>
    </nav> 

  )

 }

export default Nav