import React, {useState} from "react";
import { Phone, MessageSquare } from "lucide-react";
import Form from "@/src/components/Form";
import Button from "@/src/components/Button";

const ResearchBanner = ({ title, desc, btn1, btn2 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="researchBanner-section">
      <div className="container">
        <div className="researchBanner">
          <div className="researchBanner-col-left">
            <h1 className="section-title">{title}</h1>
            <p className="researchBanner-desc">{desc}</p>

            <div className="researchBanner-col-left-foot">
              <Button
                text="Get Started"
                onClick={() => setIsModalOpen(true)}
                variant="red"
              />
              <button className="btn-outline">
                <MessageSquare size={18} />
                {btn2}
              </button>
            </div>
          </div>
          <div className="researchBanner-col-right">
            <img
              src="../assets/researchbanner.png"
              alt="Research Support Illustration"
            />
          </div>
        </div>
      </div>

      <Form
        isModal={true}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ResearchBanner;
