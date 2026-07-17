import React from "react";

const Hero = ({ title, description }) => {
  return (
    <section className="about-hero-section">
      <div className="container">
        <div className="about-hero-content">
          <h1 className="title-section">{title}</h1>
          <p className="about-hero-desc">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
