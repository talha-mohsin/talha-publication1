import React from "react";

const Services = () => {
  return (
    <section className="about-services-section">
      <div className="container services-container">
        {/* Main Content Area */}
        <div className="about-services-head">
          <div className="about-services-content">
            <h1 className="title-section">Whom Do We Serve?</h1>
            <p className="about-services-desc">
              Journal Publishers is an organization catering to research papers
              in general, so we serve the clientele from various fields and
              subject areas. The clientele that we serve is:
            </p>
          </div>

          <div className="about-services-img">
            <img src="../assets/team-sq.png" alt="Team" />
          </div>
        </div>

        {/* Overlaying Services Card */}
        <div className="about-services-foot">
          <div className="service-item">
            <h3>PhD Research Fellows</h3>
            <h3>Masters Degree Holders</h3>
            <h3>Beginner Researchers</h3>
            <h3>University Professors</h3>
            <h3>Individual Academicians</h3>
            <h3>Foreign Researchers</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;