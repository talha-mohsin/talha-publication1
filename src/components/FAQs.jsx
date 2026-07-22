import React, { useState } from 'react';
import FAQItem from '../components/FAQItem.jsx';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: '1. Which type of journals you support?',
      answer: 'The Journal Publishers offers publishing assistance for different kinds of Journal like Scopus, SCI, Web of Science, UGC-CARE, and other peer-reviewed International and National Journals. We also provide services for research papers from all the fields.'
    },
    {
      question: '2. What do I do if my paper is already rejected by a journal?',
      answer: 'Yes, we do take on clients with rejected papers. Our expert team check the comments and edit the content as per the comments and also suggest the best matched journals for re-submission.'
    },
    {
      question: '3. Will my work be kept confidential and secure?',
      answer: 'Yes, we take client protection and privacy very seriously. All your information and research work are kept confidential and our helpers sign an NDA. Also, we will not pass on your research to any third party and we have encryption technology for communication platforms.'
    },
    {
      question: '4. Are you guaranteed to publish?',
      answer: 'No, we are not able to guarantee publication, the decision is with the editorial board for the journal. By improving the quality of the paper, however, improving the content and making it more in line with the journal standards would give you a better chance of success.'
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">
            Frequently Asked <span>Question</span>
          </h2>
          <p className="section-subtitle">
            Are you at any time experiencing concern or questions about our services? Check our FAQ's or speak to us personally. We are here to discuss with you 24/7.
          </p>
        </div>

        <div className="faq-container">
          {faqData.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
