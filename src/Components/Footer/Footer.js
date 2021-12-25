import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p>
          Subscribe to our weekly newsletter for latest offers
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button buttonStyle="btn--outline">Subscribe</button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Quick Navigate</h2>
            <Link to="/sign-up">ADVERTISE WITH US</Link>
            <Link to="/">PRIVACY POLICY</Link>
            <Link to="/">TERMS & CONDITIONS</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Career</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/sasidhar._.reddy/">Instagram</a>
            <a href="https://www.facebook.com/SasidharReddy11/">Facebook</a>
            <a href="https://www.youtube.com/c/Worksaftercollege">Youtube</a>
            <a href="https://www.linkedin.com/in/sasidhar-reddy-0b2446178/">LinkedIn</a>
          </div>
          <div class="footer-link-items">
              <h2>Address</h2>
              <p>E004, KL University, Green Fields, Vaddeswaram, Andhra Pradesh 522502</p>
              <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6708424754306!2d80.62064361468941!3d16.441535188651837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f164f9501715%3A0xe83b6041c085d06d!2sKL%20Radio!5e0!3m2!1sen!2sin!4v1640438574024!5m2!1sen!2sin"></iframe></div>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              KL Radio
              <i className="fas fa-globe-asia"></i>
            </Link>
          </div>
          <small class="website-rights">KL Radio © 2021</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
