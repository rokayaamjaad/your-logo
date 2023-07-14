import React from "react";
import "./Home.css";
import Dots from './Homeimages/Dots.png';

export default function Home() {
    return ( 

<div className="row  m-4 ">
  <div className="col-lg-4 ">
    <div className="card  mt-5 " >
<div className="card-body mt-5">
<p className="card-text1">Futur Insurance </p>
    <h1 className="card-title mb-3">Kids Happyness <br></br>for family life.</h1>
    <p className="card-text2 ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
    <a href="#" className="btn  ButtonCard mt-3 px-4 py-2">Get Started</a>
  </div>
</div>
  </div>
  
  <div className="col-lg-8 d-flex justify-content-lg-end justify-content-center ml-lg-5 ">
    <div className=" d-flex align-items-center justify-content-center mt-5 ">
    <div className="d-flex align-items-start justify-content-center "><img src={Dots} alt="" className="DotCircle1 mt-5 ml-5"/></div>
    <div className='circle1 d-flex '>
    
    </div>  
    
    <div className='circle2  '>
    
    </div> 
    <div className='circle3 bg-cover '>
    
    </div> 
    </div>
    <div className="d-flex  justify-content-end mt-5  "><img src={Dots} alt="" className="DotCircle2  mt-5"/></div>
  </div>
 
  
</div>

    )}