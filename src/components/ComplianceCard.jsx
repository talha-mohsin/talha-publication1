import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function ComplianceCard({ title = 'Standard Compliance', description = 'Whether you want to publish a paper in a science journal or the arts, we ensure compliance with standards.', Icon }) {
  return (
    <div className="compliance-card">
      <div className="compliance-icon">
        <img src={Icon} alt="" />
      </div>
      <h3 className="compliance-title">{title}</h3>
      <p className="compliance-desc">{description}</p>
    </div>
  );
}
