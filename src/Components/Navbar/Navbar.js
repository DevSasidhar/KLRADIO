import React from "react";
import "./Navbar.css";
import logo from "../../Assets/klr-logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} />
        </div>
        <nav>
          <ul>
            <li className="list-item">
				<div class="dropdown">
					<button class="dropbtn">
						KL Radio
					</button>
				</div>
			</li>
            <li className="list-item">
              <div class="dropdown">
                <button class="dropbtn">
                  Shows
                </button>
                <div class="dropdown-content">
                  <a href="#">All Shows</a>
                  <a href="#">Upcoming</a>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div class="dropdown">
                <button class="dropbtn">
                  Interviews
                </button>
                <div class="dropdown-content">
                  <a href="#">Faculty Interviews</a>
                  <a href="#">Celeb Interviews</a>
                </div>
              </div>
            </li>
            <li className="list-item">
				<div class="dropdown">
					<button class="dropbtn">
						Campus Updates
					</button>
				</div>
			</li>
            <li className="list-item">
				<div class="dropdown">
					<button class="dropbtn">
						Upcoming Events
					</button>
				</div>
			</li>
			<li className="list-item">
				<div class="dropdown">
					<button class="dropbtn">
						Our Team
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
