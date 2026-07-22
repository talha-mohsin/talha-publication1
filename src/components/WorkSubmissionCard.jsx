import React from 'react';

const WorkSubmissionCard = ({ id, title, desc }) => {
  return (
    <div className="workSubmission-card">
        <div className="workSubmission-icon">
            <img src="/assets/worksubmission-icon.png" alt="" />
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}
export default WorkSubmissionCard;