import React from "react";

const PartnersLogos = () => {
  const logos = [
    {
      name: "ROYAL SOCIETY OF CHEMISTRY",
      img: "../../assets/partner-logo1.png",
    },
    { name: "FRONTIERS", img: "../../assets/partner-logo2.png" },
    { name: "HINDAWI", img: "../../assets/partner-logo3.png" },
    { name: "ELSEVIER", img: "../../assets/partner-logo4.png" },
    { name: "EMERALD PUBLISHING", img: "../../assets/partner-logo5.png" },
    { name: "KOREA UNIVERSITY", img: "../../assets/partner-logo6.png" },
  ];
  
  return (
    <>
      {/* Gray Section with Logos */}
      <section className="logos-section">
        <div className="container">
          <div className="logos-grid">
            {logos.map((logo, idx) => (
              <div className="logo-item" key={idx} title={logo.name}>
                <img src={logo.img} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersLogos;
