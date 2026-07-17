import React, { useState } from "react";
import ServiceCard from "./ServiceCard.jsx";

export default function HolisticServices() {
  const [activePage, setActivePage] = useState(0);

  // Example data: 12 items so we can see 2 pages of 6 cards looping
  const services = [
    { title: "Publication", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Peer Review", description: "Phasellus pharetra tortor eget lacus ullamcorper." },
    { title: "Formatting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Editing", description: "Phasellus pharetra tortor eget lacus ullamcorper." },
    { title: "Analytics", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Journal Advice", description: "Phasellus pharetra tortor eget lacus ullamcorper." },
    // --- Page 2 Data ---
    { title: "Plagiarism Check", description: "Ensure your research paper is 100% original and authentic." },
    { title: "Indexing Support", description: "Get your journals indexed in Scopus, Web of Science, etc." },
    { title: "Cover Letter Design", description: "Create a compelling cover letter for your journal submission." },
    { title: "Citation Formatting", description: "Format references perfectly in APA, MLA, Chicago, etc." },
    { title: "Figure Illustration", description: "High-quality scientific figures and graphical abstracts." },
    { title: "Data Collection", description: "Assistance in gathering and structuring qualitative data." },
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  // Previous Logic: Agar page 0 hai, toh last page pe jao, warna prev page
  const handlePrev = () => {
    setActivePage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Next Logic: Agar last page hai, toh page 0 pe jao, warna next page
  const handleNext = () => {
    setActivePage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Slice data based on active page
  const currentServices = services.slice(
    activePage * itemsPerPage,
    activePage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="holistic-services-section section-padding" id="services">
      <div className="container text-center">
        <h2 className="section-title ">
            FOR WRITERS WHO DREAM BIG
            <span> SELF- <br /> PUBLISHING SERVICES
            </span>
          </h2>
        <p className="section-subtitle">
          Ready to publish paper in journal? Choose our holistic research paper
          publishing services, handling all your concerns efficiently and with
          satisfactory outcomes.
        </p>

        {/* CSS grid for 6 cards */}
        <div className="services-grid">
          {currentServices.map((srv, idx) => (
            <ServiceCard
              key={idx}
              title={srv.title}
              description={srv.description}
              linkText="View Details"
              onLinkClick={(e) => {
                e.preventDefault();
                if (onContactClick) onContactClick();
              }}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="slider-controls">
          <button
            className="slider-btn slider-btn-active"
            onClick={handlePrev}
            aria-label="Previous services"
          >
            <img src="../../assets/leftarrow-icon.png" alt="Prev" />
          </button>
          <button
            className="slider-btn slider-btn-active"
            onClick={handleNext}
            aria-label="Next services"
          >
            <img src="../../assets/rightarrow-icon.png" alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
}