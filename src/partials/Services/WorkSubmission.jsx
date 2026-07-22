import WorkSubmissionCard from "@/src/components/WorkSubmissionCard";
import React from "react";


const WorkSubmission = ({title, desc, steps}) => {
  return (
    <section className="workSubmission-section">
      <div className="container">
        <div className="workSubmission-head">
          <h1 className="section-title">{title}</h1>
          <p>{desc}</p>
        </div>
        <div className="workSubmission-grid">
          {steps.map((step, index) => (
            <WorkSubmissionCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSubmission;