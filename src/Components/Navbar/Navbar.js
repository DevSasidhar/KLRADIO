import React from "react";
import "./Navbar.css";
import logo from "../../Assets/klr-logo.png";
import {Link} from "react-router-dom";
const Navbar = () => {
 
  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <a href="/"><img src={logo}/></a>          
        </div>
        <nav>
          <ul>
            <li className="list-item">
				<div class="dropdown">
					<button class="dropbtn">
            <a href="/" class="dropbtn">KL Radio</a>						
					</button>
				</div>
			</li>
            <li className="list-item">
              <div class="dropdown">
                <button class="dropbtn">
                  Shows
                </button>
                <div class="dropdown-content">
                  <a href="/all-shows">All Shows</a>
                  <a href="upcoming-shows">Upcoming</a>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div class="dropdown">
                <button class="dropbtn">
                  Interviews
                </button>
                <div class="dropdown-content">
                  <a href="/faculty-interviews">Faculty Interviews</a>
                  <a href="celeb-interviews">Celeb Interviews</a>
                </div>
              </div>
            </li>
            <li className="list-item">
				<div class="dropdown">
					<button class="dropbtn">
            <a class="dropbtn" href="/campus-updates">Campus Updates</a>						
					</button>
				</div>
			</li>
            <li className="list-item">
				<div class="dropdown">
					<button class="dropbtn">
            <a href="/upcoming-events" class="dropbtn">Upcoming Events</a>						
					</button>
				</div>
			</li>
			<li className="list-item">
				<div class="dropdown">
					<button class="dropbtn">
            <a href="/our-team" class="dropbtn">Our Team</a>						
					</button>
				</div>
			</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
