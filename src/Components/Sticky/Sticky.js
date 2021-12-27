import React from "react";
import './Sticky.css';
import live from "../../Assets/live.png"
const Sticky = () => {
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="icon-bar">
        <a href="https://www.facebook.com/KLRadio/" class="facebook">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#" class="twitter">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/company/klradio/about/" class="linkedin">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCse4FD6zAmrEl8Xz2y1aaug" class="youtube">
          <i class="fa fa-youtube"></i>
        </a>
        
      </div>
      <div class="playbtn">
        <a  href="https://www.youtube.com/channel/UCse4FD6zAmrEl8Xz2y1aaug" >
        <img src={live} class="liveicon"/>      
        <div className="listen">Listen Now</div>  
        </a>
      </div>
    </div>
  );
};

export default Sticky;
