import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link to="/" className="nav-link active" aria-current="page">Home</Link> */}
              <a href="#" className="nav-link active" aria-current="page">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li> */}
          </ul>
          <div className={`text-${props.mode==='dark'?'light':'dark'}`}>
              <input className="form-input" type="color" id="head" name="head" value={props.color} onChange={props.colorPicker} />
              <label className="form-check-label" htmlFor="head">Select Body Color</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.prototype = { 
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here"
}