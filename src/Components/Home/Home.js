import React from "react";
import Navbar from "../Navbar/Navbar";
import Sticky from "../Sticky/Sticky";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Homeshows from "../Home/Homeshows";
import Homevideos from "../Home/Homevideos";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Homeshows />
      <Homevideos />
      <Sticky />
      <div class="announcement">
        <p>
          Campus Updates
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
