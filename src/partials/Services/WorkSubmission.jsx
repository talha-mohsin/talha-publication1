import WorkSubmissionCard from "@/src/components/WorkSubmissionCard";
import React from "react";

const steps = [
  { id: "01", title: "Order Placement", desc: "Simply fill out our order form with your manuscript details, journal requirements, and deadlines to get started." },
  { id: "02", title: "Document Review", desc: "Our experts carefully analyze your document to identify areas for improvement and academic alignment." },
  { id: "03", title: "Refining & Editing", desc: "We enhance your work by refining language, formatting, and structuring for journal compliance." },
  { id: "04", title: "Final Delivery", desc: "Your polished, publication-ready manuscript is delivered back to you, ready for submission." }
];

const WorkSubmission = () => {
  return (
    <section className="workSubmission-section">
      <div className="container">
        <div className="workSubmission-head">
          <h1 className="section-title">Submit Your Work Today—Get Expert Peer Review in Just 4 Steps!</h1>
          <p>Want to know how we actually work? Our pre-submission peer review services for journals and articles are designed to simplify your publication journey.</p>
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