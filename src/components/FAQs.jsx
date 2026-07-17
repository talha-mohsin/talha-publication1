import React, { useState } from 'react';
import FAQItem from '../components/FAQItem.jsx';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: '1. What services do you offer?',
      answer: 'An AI Music Generator is a tool that uses artificial intelligence to create original music tracks based on user inputs like genre, mood, instruments, or tempo.'
    },
    {
      question: '2. How long does a website project take?',
      answer: 'Depending on the scope and complexity, a standard website project typically takes between 2 to 6 weeks, which includes discovery, design, development, content integration, and thorough testing.'
    },
    {
      question: '3. How long does a website project take?',
      answer: 'Depending on the scope and complexity, a standard website project typically takes between 2 to 6 weeks, which includes discovery, design, development, content integration, and thorough testing.'
    },
    {
      question: '4. How long does a website project take?',
      answer: 'Depending on the scope and complexity, a standard website project typically takes between 2 to 6 weeks, which includes discovery, design, development, content integration, and thorough testing.'
    },
    {
      question: '5. How long does a website project take?',
      answer: 'Depending on the scope and complexity, a standard website project typically takes between 2 to 6 weeks, which includes discovery, design, development, content integration, and thorough testing.'
    },
    {
      question: '6. How long does a website project take?',
      answer: 'Depending on the scope and complexity, a standard website project typically takes between 2 to 6 weeks, which includes discovery, design, development, content integration, and thorough testing.'
    }
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
            Have any queries or concerns regarding our service practices? Review our FAQ section or chat with us directly. We are available 24/7 to talk to you.
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
