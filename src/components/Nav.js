import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">


  <div className="container-md">

    <div className="logo">
    <a  className="navbar-brand" href="#">Modic.</a>
    </div>

        
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign In</a>
        </li>
      </ul>


  </div>
  
</nav>
    )
}

export default Nav
