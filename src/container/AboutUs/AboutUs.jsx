import React from "react";

import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="home">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Sanskar Restaurant, where every dish is a masterpiece, and
          every visit is a memorable experience. We're passionate about culinary
          excellence and dedicated to creating unforgettable moments for you.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          At Sanskar Restaurant, our journey began with a shared passion for
          fine cuisine and exceptional hospitality. we've
          strived to create an unforgettable dining experience for our
          guests.Explore our story, and join us as we continue to craft culinary
          memories that last a lifetime.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
