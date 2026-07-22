import React from "react";
import { Phone, MessageSquare } from "lucide-react";

const ResearchBanner = ({title, desc, btn1, btn2}) => {
  return (
    <section className="researchBanner-section">
      <div className="container">
        <div className="researchBanner">
          <div className="researchBanner-col-left">
            <h1 className="section-title">
              {title}
            </h1>
            <p className="researchBanner-desc">
              {desc}
            </p>

            <div className="researchBanner-col-left-foot">
              <button className="btn-red">{btn1}</button>
              <button className="btn-outline">
                <MessageSquare size={18} />{btn2} 
              </button>
            </div>
          </div>
          <div className="researchBanner-col-right">
            <img src="../assets/researchbanner.png" alt="Research Support Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchBanner;