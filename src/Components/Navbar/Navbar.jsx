import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className='m-5 '>
            <nav className="navbar d-flex justify-content-between navbar-expand-lg  navbar-light bg-white   ">
  <a className="navbar-brand LogoText  "  href="#">Your Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
    <div className="navbar-nav   d-row gap-5  ">
      <a className="nav-item  TextStyle nav-link  " href="#">Home </a>
      <a className="nav-item   TextStyle nav-link " href="#">About</a>
      <a className="nav-item  TextStyle nav-link " href="#">Service</a>
      <a className="nav-item   TextStyle nav-link  " href="#">Testimonial</a>
      <a className="nav-item   TextStyle nav-link " href="#">Contact</a>
    </div>
  </div>
  <button class="btn btn-sm ButtonColor px-4 py-2" type="button">Sign In</button>
</nav>
        </div>
        
          )}
