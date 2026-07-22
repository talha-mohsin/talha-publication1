import React from "react";
import Button from "../../components/Button.jsx";
import { MessageSquare } from "lucide-react";

export default function SelfPublishing({title, desc, desc2, btn1, btn2}) {
  return (
    <section className="self-publishing-section section-padding" id="about">
      <div className="container self-pub-grid">
        <div className="self-pub-content">
          <h2 className="self-pub-subtitle section-title">{title}
          </h2>
          <p className="self-pub-text">
            {desc}
          </p>
          <p className="self-pub-text">
            {desc2}
          </p>

          <div className="btn-group">
            <Button text={btn1} variant="navy" />
            <Button
              text={btn2}
              variant="outline"
              icon={<MessageSquare size={16} />}
            />
          </div>
        </div>

        <div className="books-showcase">
          {/* Book 1: JANGE JOST BOLLE */}
          <img src="/assets/writter-books.png" alt="" />
        </div>
      </div>
    </section>
  );
}
