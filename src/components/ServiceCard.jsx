import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ 
  title, 
  description, 
}) {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
    </div>
  );
}