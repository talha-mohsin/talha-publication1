import React from 'react';
import Button from './Button.jsx';
import { CheckCircle2, MessageSquare } from 'lucide-react';

export default function PeerReview() {
  // 24 tags as shown in the design
  const tags = Array(24).fill('MEDICINE SCIENCES');

  return (
    <section className="peer-review-section section-padding" id="peer-review">
      <div className="container text-center">
        <h2 className="section-title">
          Refine The Quality of Your Journal <br />
          Publications With Pre Submission Manuscript <br />Peer Review Services
        </h2>
        <p className="section-subtitle">
          Not quite satisfied with the quality of your peer-reviewed research article? Don't worry, as we offer Editorial and Peer Review Services across various domains. From identifying structural issues to enhancing the overall quality of your research papers, our experts ensure your work is polished, error-free, and ready for publication in top journals.
        </p>

        <div className="tags-grid">
          {tags.map((tag, idx) => (
            <div className="tag-item" key={idx}>
              <CheckCircle2 className="tag-icon" size={16} />
              <span>{tag}</span>
            </div>
          ))}
        </div>

        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Button
            text="Slick Your Submission"
            variant="navy"
          />
          <Button
            text="Live Chat"
            variant="outline"
            icon={<MessageSquare size={16} />}
          />
        </div>
      </div>
    </section>
  );
}
