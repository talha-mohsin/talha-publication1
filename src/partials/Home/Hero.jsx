import React from "react";
import Button from "../../components/Button.jsx";
import { Sparkles, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="section-title">
            Take Your Research to <br />
            Leading <span>Journals | Publish</span> <br />
            with  
          </h1>
          <p className="hero-desc">
            Struggling with research paper publication? Stop worrying, you have
            got reliable experts to back you—Hire  
            today. We help scholars publish research in the top journals,
            employing our years of field experience and professional expertise.
            Consult with us today for an effortless publication process.
          </p>
          <div className="btn-group">
            <Button
              text="Submit Your Manuscript"
              variant="red"
            />
            <Button
              text="Live Chat"
              variant="outline-white"
              icon={<MessageSquare size={16} />}
            />
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/public/assets/group-books.png" alt="" />
        </div>
      </div>
    </section>
  );
}
