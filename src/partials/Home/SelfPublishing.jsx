import React from "react";
import Button from "../../components/Button.jsx";
import { MessageSquare } from "lucide-react";

export default function SelfPublishing() {
  return (
    <section className="self-publishing-section section-padding" id="about">
      <div className="container self-pub-grid">
        <div className="self-pub-content">
          <h2 className="self-pub-subtitle section-title">
            FOR WRITERS WHO DREAM <br />
            BIG <span>SELF-PUBLISHING <br /> SERVICES</span>
          </h2>
          <p className="self-pub-text">
            Frustrated with the endless chain of publishing tasks? Need expert
            guidance handling rebuttals? Pair with  , a
            reliable   with an exemplary team of helpers
            and publishing mavens.
          </p>
          <p className="self-pub-text">
            We provide holistic support in getting your paper to publication
            success. From enhancing and refining manuscripts to concluding
            submission preparations, we are professionals through and through.
          </p>
          <p className="self-pub-text" style={{ marginBottom: "2.5rem" }}>
            Our editor, proofreaders, and technical helpers are well informed
            about various journals' requirements based on disciplines and
            deliver accordingly. So, why stress out when you have us? Connect
            with us today and see your paper in the top journal soon.
          </p>

          <div className="btn-group">
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

        <div className="books-showcase">
          {/* Book 1: JANGE JOST BOLLE */}
          <img src="../../assets/writter-books.png" alt="" />
        </div>
      </div>
    </section>
  );
}
