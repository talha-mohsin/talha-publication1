import React, {useState} from "react";
import Button from "../../components/Button.jsx";
import { Sparkles, MessageSquare } from "lucide-react";
import Form from "@/src/components/Form.jsx";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="section-title">
            Publish Your Research Papers in Leading{" "}
            <span> Journals | Publishing </span>
            Made Simple by The Journal Publishers
          </h1>
          <p className="hero-desc">
            Getting worried about the publication of your research papers? Do
            not worry anymore because you have the solution now as you can hire
            the best experts in the market. We help the researchers publish
            their research papers in top journals with our experience and expert
            guidance. Feel free to contact us for making your publication
            process simple and easy. Live Chat Send Your Paper For Publication
            10+ Years of Expertise in Publishing Assistance Professional
            Guidance Professional Experts Cost Effective Solutions Journal of
            International Economic Law International Journal of Development
            Research Journal of Skin & Stem Cell
          </p>
          <div className="btn-group">
            <Button
              text="Get Started"
              onClick={() => setIsModalOpen(true)}
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
          <img src="/assets/group-books.png" alt="" />
        </div>
      </div>
      <Form
              isModal={true}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
    </section>
  );
}
