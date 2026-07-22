import React from "react";

const Benefits = ({
  l_title,
  l_heading,
  l_desc,
  r_title,
  r_point1,
  r_point2,
  r_point3,
  r_point4,
  r_point5,
  r_point6,
}) => {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-col-left">
          <div className="benefits-col-left-icon">
            <img src="../assets/worksubmission-icon.png" alt="" />
          </div>
          <p>{l_title}</p>
          <h2>{l_heading}</h2>
          <div className="horizontal-border">
            <span className="horizontal-border-limited"></span>
          </div>
          <p className="benefits-col-left-bottom">{l_desc}</p>
        </div>
        <div className="benefits-col-right">
          <h1 className="section-title">{r_title}</h1>

          <div className="benefits-col-right-lists">
            <span className="list-circle"></span>
            <p>{r_point1}</p>
          </div>
          <div className="benefits-col-right-lists">
            <span className="list-circle"></span>
            <p>{r_point2}</p>
          </div>
          <div className="benefits-col-right-lists">
            <span className="list-circle"></span>
            <p>{r_point3}</p>
          </div>
          <div className="benefits-col-right-lists">
            <span className="list-circle"></span>
            <p>{r_point4}</p>
          </div>
          <div className="benefits-col-right-lists">
            <span className="list-circle"></span>
            <p>{r_point5}</p>
          </div>
          <div className="benefits-col-right-lists">
            <span className="list-circle"></span>
            <p>{r_point6}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
