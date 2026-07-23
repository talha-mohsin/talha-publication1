import React, {useState} from "react";
import Button from "./Button.jsx";
import { CheckCircle2, MessageSquare } from "lucide-react";
import Form from "./Form.jsx";

export default function PeerReview({ title, desc, papers, btn1, btn2 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="peer-review-section section-padding" id="peer-review">
      <div className="container text-center">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{desc}</p>

        <div className="tags-grid">
          {papers.map((paper, idx) => (
            <div className="tag-item" key={idx}>
              <CheckCircle2 className="tag-icon" size={16} />
              <span>{paper}</span>
            </div>
          ))}
        </div>

        <div className="btn-group" style={{ justifyContent: "center" }}>
          <Button
            text={btn1}
            onClick={() => setIsModalOpen(true)}
            variant="navy"
          />
          <Button
            text={btn2}
            variant="outline"
            icon={<MessageSquare size={16} />}
          />
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
