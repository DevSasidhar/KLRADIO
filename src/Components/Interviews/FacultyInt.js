import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./FacultyInt.css";
const FacultyInt = () => {
  return (
    <div className="App">
      <Navbar />
      <div class="card-row">
        <div className="vid-column">
          <ReactPlayer width={506} url="https://youtu.be/pyVmopYLxxY" />
        </div>
        <div>
          <h2 class="vid-h">
            Faculty Interview: Interview with Surya Kiran by RJ Bhanumathi | KL
            RADIO | KL UNIVERSITY |
          </h2>
          <p className="vid-desc">
            Catch KL Radio's exclusive show "Faculty Interview". you can now
            listen to your favorite faculties other side know about their
            Personal life in our exclusive show "Faculty Interview" only on KL
            RADIO Starts on 29th April 2018
          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="vid-column">
          <ReactPlayer width={506} url="https://youtu.be/tWFfTljK0iA" />
        </div>
        <div>
          <h2 class="vid-h">
            Interview with Dr. Kavya mam | Dept of Alumni | Rj Sanjitha |
          </h2>
          <p className="vid-desc">
            Catch KL Radio's exclusive show "Faculty Interview". you can now
            listen to your favorite faculties other side know about their
            Personal life in our exclusive show "Faculty Interview" only on KL
            RADIO
          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="vid-column">
          <ReactPlayer width={506} url="https://youtu.be/R7xY6Z87hwg" />
        </div>
        <div>
          <h2 class="vid-h">
            FACULTY INTERVIEW | Interview with Dr. P. Polaraju sir by RJ Likitha
            | KL RADIO |
          </h2>
          <p className="vid-desc">
            Interview with Dr.P.Polaraju sir ( Dept. of Civil Engineering, HoD)
            by RJ Likitha. Sir is going to conduct an interesting quiz on the
            auspicious occasion of Engineers Day (15th sep). Thank you all.
          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="vid-column">
          <ReactPlayer width={506} url="https://youtu.be/fnjF38E9Tbk" />
        </div>
        <div>
          <h2 class="vid-h">
            TEACHER'S DAY INTERVIEW | RJ AKHIL | SRI VIDHYA MADAM | YOUNIFY KL
            RADIO | KL UNIVERSITY
          </h2>
          <p className="vid-desc">
            A teacher can ignite thousands of minds. They guide us, support us,
            inspire us and teach us.👩🏼‍🏫 This Teacher's day Younify KL Radio is
            back with a special interview with Sree Vidya Ma'am by RJ Akhil
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyInt;
