import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./FacultyInt.css";
const CelebInt = () => {
  return (
    <div className="App">
      <Navbar />
      <div class="card-row">
        <div className="vid-column">
          <ReactPlayer width={506} url="https://youtu.be/R4gF2Po1HUM" />
        </div>
        <div>
          <h2 class="vid-h">
            Exclusive Interview with Swamy | RJ Praharshini |
          </h2>
          <p className="vid-desc">
            Surya web Series Fame Swamy aka Ravi Shiva Teja Exclusive Interview.
            In this Exclusive Interview Swamy revealed many interesting things
            about his career, life and Personal Things also. Here is the
            Hilarious Interview with the most happening digital platform actor
            who aimed to seen himself on the Silver Screen.
          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="vid-column">
          <ReactPlayer width={506} url="https://youtu.be/td0s7eCKSJQ" />
        </div>
        <div>
          <h2 class="vid-h">
            HIT MOVIE EXCLUSIVE INTERVIEW| Vishwek Sen | Younify Klradio
          </h2>
          <p className="vid-desc">
            Here's the exclusive interview of the HIT cast Vishwek Sen on
            Younify KL Radio. In this exclusive interview Vishwek Sen talks
            about their film Hit, about the movie script and characters in the
            film. Watch the full interview to know more! If you like the video,
            please subscribe, like and share the video.
          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="vid-column">
          <ReactPlayer width={506} url="https://youtu.be/KTU6V8c1xEg" />
        </div>
        <div>
          <h2 class="vid-h">
            Raja Vaaru Rani Garu Exclusive Interview | Kiran Abbavaram | Rahasya
            Gorak | Younify KL Radio
          </h2>
          <p className="vid-desc">
            Here's the exclusive interview of the RVRG cast Kiran Abbavaram &
            Rahasya Gorak on Younify KL Radio. Raja Vaaru Rani Gaaru is the
            story of Raju who falls in love with Rani but is unable to express
            his emotions. Set in a beautiful village, watch as Raju and two of
            his friends deal with the toils and troubles of romance. In this
            exclusive interview, Kiran Abbavaram & Rahasya Gorak talks about
            their film Raja Vaaru Rani Garu, about the movie script and
            characters in the film. Watch the full interview to know more!
          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="vid-column">
          <ReactPlayer width={506} url="https://youtu.be/BVCRs92N2Bo" />
        </div>
        <div>
          <h2 class="vid-h">
            Celeb talk : Interview with Hyper Aadi & Raising Raju | KL RADIO |
            RJ Pavithra
          </h2>
          <p className="vid-desc">
            In this interview with RJ Pavithra, Hyper Aadi & Raising Raju of
            'Jabardasth' fame talks about His College Days & his perspectives in
            his visit to KL University on 8th March 2018..
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CelebInt;
