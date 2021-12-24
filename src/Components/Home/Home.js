import React from "react";
import Navbar from "../Navbar/Navbar";
import Sticky from "../Sticky/Sticky";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Homeshows from "../Home/Homeshows";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Carousel />  
      <Homeshows />
      <Sticky />   
      <Footer />
    </div>
  );
};

export default Home;
