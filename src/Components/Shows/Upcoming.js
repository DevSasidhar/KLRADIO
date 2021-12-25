import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Allshows.css";
import show1 from "../../Assets/show1.jpg";
import show2 from "../../Assets/show2.jpg";
import show3 from "../../Assets/show3.jpg";
import show4 from "../../Assets/show4.jpg";
import show5 from "../../Assets/show5.jpg";
import show6 from "../../Assets/show6.jpg";
const Upcoming = () => {
  return (
    <div className="App">
      <Navbar />
      <div class="card-row">
        <div class="container-glass">
          <img class="img" src={show1} alt="" />
          <p class="text">
            We all have a huge number of friends but there are only a few from
            whom we learn stuff😎. It is rightly said that "Quality is more
            important than Quantity" and spending quality time with friends is
            also a boon✨. Younify KL Radio 📻 presents a show on"Things we
            learn from friends" by RJ Vyshnavi on 21st August at 10 AM and 5 PM.
            Stay tuned for more updates 😁
          </p>
          <button class="btn">Listen Now</button>
        </div>

        <div class="container-glass">
          <img class="img" src={show2} alt="" />
          <p class="text">
            At times we do a lot of stuff without even knowing why are we
            exactly doing them🤨. Like studying a subject without knowing the
            actual application of it in our real life😂. Isn't it?? We hope you
            too have such experiences. We at Younify KL Radio 📻 are hosting a
            show on "Things we do for no reason" with RJ Sruthi on 25th August
            at 10AM and 5PM. Do share your incidents with us☺️. Stay tuned for
            more updates 🤠.
          </p>
          <button class="btn">Listen Now</button>
        </div>

        <div class="container-glass">
          <img class="img" src={show3} alt="" />
          <p class="text">
            Shree Vakratunda mahakaya Suryakoti Samaprabha Nirvighnam Kuru Me
            Deva Sarva-Kaaryeshu Sarvada🕉️🙏🏻 Let us get ready with RJ Likitha to
            welcome Lord Ganesha into our lives with great celebrations and
            festivities to make this Ganesh Chaturthi the most beautiful one✨
            Don't miss out! Only on Younify KL Radio at 10 am and 5 pm on
            September 10, 2021. Stay tuned📻
          </p>
          <button class="btn">Listen Now</button>
        </div>
        <div class="container-glass">
          <img class="img" src={show4} alt="" />
          <p class="text">
            Online 🛍 shopping for 3 hours and then closing❌ all the tabs and
            not buying anything is one of our favorite hobbies. You know it's
            going to be a good day when your orders📦 are on the way, getting
            cute little morning texts like "Your order has been shipped"🚚 Share
            your online shopping experiences and stories with RJ Shruthi on 14th
            September, at 10AM and 5PM sharp⏰ Stay tuned for more updates 😁
          </p>
          <button class="btn">Listen Now</button>
        </div>
        <div class="container-glass">
          <img class="img" src={show5} alt="" />
          <p class="text">
            "Engineers" are the one who can create anything with their
            brains🧠and creativity⭐. Engineers surprise us everyday by creating
            unique innovations by putting their heart and soul into it👨‍💻.
            Younify KL Radio📻 presents a special show on "Engineers" by RJ
            Likitha on 15th September at 10AM and 5PM . Stay tuned for more
            updates.
          </p>
          <button class="btn">Listen Now</button>
        </div>
        <div class="container-glass">
          <img class="img" src={show6} alt="" />
          <p class="text">
            It's not always easy to succeed in business. We need to work hard to
            the most of our potential✍️. When it comes to business startups, the
            work load, pressure and other problems become unbearable😖. These
            are the times when one needs to stand upright and firm😎.We present
            you with an inspiring show on "Successful Startups" by RJ Reshmi on
            20th August at 10PM and 5PM. Stay tuned for more updates
          </p>
          <button class="btn">Listen Now</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Upcoming;
