import React from "react";

export default function SubmissionProcess() {
  const leftSteps = [
    {
      step: "Step 01",
      title: "Manuscript Submission",
      desc: "Please share your story or ideas with our team. Our professional book writers will bring your vision to life, whether it's fiction, non-fiction, children's books, or audiobooks.",
    },
    {
      step: "Step 02",
      title: "Peer Review & Critique",
      desc: "Our experts conduct a rigorous initial screening to identify structural improvements, analytical accuracy, and key conceptual strengths.",
    },
    {
      step: "Step 03",
      title: "Editorial & Polishing",
      desc: "Domain-specific editors proofread, format, and enhance technical phrasing and grammar to align with high standards.",
    },
  ];

  const rightSteps = [
    {
      step: "Step 04",
      title: "Journal Match Selection",
      desc: "We analyze and pinpoint the perfect target, high-impact journals suited exactly to your research scope and guidelines.",
    },
    {
      step: "Step 05",
      title: "Compliance Check",
      desc: "Ensuring your manuscript, figures, references, and citations conform precisely to target formatting guidelines.",
    },
    {
      step: "Step 06",
      title: "Slick Submission Support",
      desc: "We facilitate the full submission process and seamlessly handle rebuttals, letters, and revisions with publisher editors.",
    },
  ];

  return (
    <section className="process-section section-padding" id="process">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title ">
            FOR WRITERS WHO DREAM BIG
            <span> SELF- <br /> PUBLISHING SERVICES
            </span>
          </h2>
          <p className="section-subtitle">
            Ready to publish paper in journal? Choose our holistic research
            paper publishing services, handling all your concerns efficiently
            and with satisfactory outcomes.
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
            <img src=" assets/nightcastle-books.png" alt="" />
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
