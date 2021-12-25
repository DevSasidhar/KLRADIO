import React from "react";
import "./Homeshows.css";
import show1 from "../../Assets/show1.jpg"
import show2 from "../../Assets/show2.jpg"
import show3 from "../../Assets/show3.jpg"
import show4 from "../../Assets/show4.jpg"
import show5 from "../../Assets/show5.jpg"
import show6 from "../../Assets/show6.jpg"

const Homeshows = () => {
  return (
    <div>
      <div className="box">
        <div className="popshow">Popular Shows</div>
        
         <div className="show-container">
          <div class="row">
            <div class="column">
              <img src={show1} width={253}/>
            </div>
            <div class="column">
              <img src={show2} width={253}/>
            </div>
            <div class="column">
              <img src={show3} width={253}/>
            </div>
            <div class="column">
              <img src={show4} width={253}/>
            </div>
            <div class="column">
              <img src={show5} width={253}/>
            </div>
            <div class="column">
              <img src={show6} width={253}/>
            </div>
          </div>
          <div class="row">
          <div class="column">
              <img src={show1} width={253}/>
            </div>
            <div class="column">
              <img src={show2} width={253}/>
            </div>
            <div class="column">
              <img src={show3} width={253}/>
            </div>
            <div class="column">
              <img src={show4} width={253}/>
            </div>
            <div class="column">
              <img src={show5} width={253}/>
            </div>
            <div class="column">
              <img src={show6} width={253}/>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Homeshows;
