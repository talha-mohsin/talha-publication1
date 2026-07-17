import React from "react";
import { Phone, MessageSquare } from "lucide-react";

const ResearchBanner = () => {
  return (
    <section className="researchBanner-section">
      <div className="container">
        <div className="researchBanner">
          <div className="researchBanner-col-left">
            <h1 className="section-title">
              Your Research Deserves Global Recognition <br /> - Let’s Make It Happen
            </h1>
            <p className="researchBanner-desc">
              Don't let your hard work go unnoticed. With our expert peer review
              services for journal articles, selection guidance, flawless
              editing and end-to-end publishing support, we transform your
              manuscript into a publication ready success story. Backed by
              trusted peer-review experts, we ensure your research reaches the
              right journals.
            </p>

            <div className="researchBanner-col-left-foot">
              <button className="btn-red">Seek Help!</button>
              <button className="btn-outline">
                <Phone size={18} /> +0000000000
              </button>
              <button className="btn-outline">
                <MessageSquare size={18} /> Live Chat
              </button>
            </div>
          </div>
          <div className="researchBanner-col-right">
            <img src="../../../assets/researchbanner.png" alt="Research Support Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchBanner;