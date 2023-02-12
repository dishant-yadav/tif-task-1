import React from "react";
import "./../stylesheets/hero.css";
import logo from "./../assets/logo.png";

type Props = {};

function Hero({}: Props) {
  return (
    <section>
      <header className="header">
        <img src={logo} id="company-logo" />
        <button className="header-cta">
          <p className="ctaBtn-text">Get in touch</p>
        </button>
      </header>
      <section className="hero-section-text">
        <p className="hero-section-first">
          Discover the <br />
          <span id="highlight-text">Best</span> Food <br /> and Drinks
        </p>
        <p className="secondary-text">
          Naturally made Healthcare Products for the <br /> better care &
          support of your body.
        </p>
        <button className="cta-btn">Explore Now!</button>
      </section>
    </section>
  );
}

export default Hero;
