import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`} id={`faq-${question.toLowerCase().replace(/\s+/g, '-')}`}>
      <button className="faq-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className="faq-icon-arrow">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div className="faq-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}
