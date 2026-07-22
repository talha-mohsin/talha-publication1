import React, { useState } from "react";
import ServiceCard from "./ServiceCard.jsx";

export default function HolisticServices({ title, desc, services }) {
  const [activePage, setActivePage] = useState(0);

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
    activePage * itemsPerPage + itemsPerPage,
  );

  return (
    <section
      className="holistic-services-section section-padding"
      id="services"
    >
      <div className="container text-center">
        <h2 className="section-title ">{title}</h2>
        <p className="section-subtitle">{desc}</p>

        {/* CSS grid for 6 cards */}
        <div className="services-grid">
          {currentServices.map((srv, idx) => (
            <ServiceCard
              key={idx}
              title={srv.title}
              description={srv.description}
              onLinkClick={(e) => {
                e.preventDefault();
                if (onContactClick) onContactClick();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
