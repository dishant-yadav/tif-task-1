import React from "react";
import aboutImage from "./../assets/about.png";
import "./../stylesheets/about.css";

type Props = {};

function About({}: Props) {
  return (
    <div className="wrapper">
      <section className="main">
        <img id="about-img" src={aboutImage} alt="about Image" />
        <div className="textual-content">
          <h3 className="about-heading">About Us</h3>
          <p className="about-para">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
            standard dummy text ever since the 1500s, when an unknown <br />{" "}
            printer took a galley of type and scrambled it to make a type <br />{" "}
            specimen book. t has survived not only five centuries.
          </p>
          <button className="about-read-more-btn">Read More</button>
        </div>
      </section>
    </div>
  );
}

export default About;
