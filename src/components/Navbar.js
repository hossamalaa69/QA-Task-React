import React from 'react';
//import {Link} from "react-router-dom";
const Navbar = (props) => {

  return (
    <nav 
    className="nav-wrapper red darken-3" 
    style={{  position: 'sticky', top: '0', 'zIndex': '2'}}
    >
      <div className="container">
        <div className="left">
          <a className="brand-logo" href="/">Questions</a>
        </div>
      </div>
    </nav> 
  )
}

export default (Navbar)