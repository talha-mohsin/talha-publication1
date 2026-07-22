import React from 'react';
import ComplianceCard from './ComplianceCard.jsx';
import { ShieldAlert, BookCheck, ClipboardCheck } from 'lucide-react';

export default function StandardCompliance({cards}) {

  return (
    <section className="compliance-section" id="compliance">
      <div className="container">
        <div className="compliance-grid">
          {cards.map((card, index) => (
            <ComplianceCard
              key={index}
              title={card.title}
              description={card.description}
              Icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
