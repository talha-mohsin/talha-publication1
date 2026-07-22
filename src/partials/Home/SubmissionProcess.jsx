import React from "react";

export default function SubmissionProcess() {
  const leftSteps = [
    {
      step: "Step 01",
      title: "Send Draft/Idea",
      desc: "Send us your research paper draft/idea along with all the required details.",
    },
    {
      step: "Step 02",
      title: "Editing & Formatting",
      desc: "The paper will be written, edited and formatted by our experts.",
    },
  ];

  const rightSteps = [
    {
      step: "Step 03",
      title: "Journal Submission",
      desc: "We assist you with the writing of a cover letter and compliance.",
    },
    {
      step: "Step 04",
      title: "Publication",
      desc: "We provide feedback assistance and monitor your submission status.",
    },
  ];

  return (
    <section className="process-section section-padding" id="process">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title ">
            How Our <span> Service Works | Getting </span> Your Research Paper
            Published in 4 Simple Steps
          </h2>
          <p className="section-subtitle">
            Wondering how we manage to secure such amazing success in journal publishing? The key is our carefully monitored, systematic and impeccable service process. No matter whether we help you with the research paper draft or final stages of publication, we always try to provide best-in-class services to our clients. Let’s take a look at our streamlined service process and understand what our approach is all about.
          </p>
        </div>

        <div className="process-grid">
          {/* Left Column Steps */}
          <div className="process-col">
            {leftSteps.map((s, idx) => (
              <div className="process-card" key={idx}>
                <span className="process-badge">{s.step}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Showcase: Books Glittering Stars & Night Castle */}
          <div className="process-center-image">
            <img src="/assets/nightcastle-books.png" alt="" />
          </div>

          {/* Right Column Steps */}
          <div className="process-col">
            {rightSteps.map((s, idx) => (
              <div className="process-card" key={idx}>
                <span className="process-badge">{s.step}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
