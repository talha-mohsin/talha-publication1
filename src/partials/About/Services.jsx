import React from "react";

const Services = () => {
  return (
    <section className="about-services-section">
      <div className="container services-container">
        {/* Main Content Area */}
        <div className="about-services-head">
          <div className="about-services-content">
            <h1 className="title-section">
              Lorem ipsum dolor sit amet <br /> 
              <span className="text-red">Consectetur Rearmet</span><br />
              partur traiger ipsum dolor
            </h1>
            <p className="about-services-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper...
            </p>
          </div>
          
          <div className="about-services-img">
            <img src="../ assets/team-sq.png" alt="Team" />
          </div>
        </div>

        {/* Overlaying Services Card */}
        <div className="about-services-foot">
          <div className="service-item">
            <h3>Journal Article Writing Services</h3>
            <p>Our journal article writing services ensure the creation of high-quality and original articles...</p>
          </div>
          <div className="service-item">
            <h3>Journal Publication Support Services</h3>
            <p>Let us handle the complexities of submission, formatting, plus communication...</p>
          </div>
          <div className="service-item">
            <h3>Resubmission Services</h3>
            <p>We turn your rejections into approvals by carefully revising your manuscript...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;