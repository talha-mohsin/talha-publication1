import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ 
  title, 
  description, 
  linkText = 'View Details', 
  href = '#', 
  onLinkClick 
}) {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
      <a href={href} className="service-card-link" onClick={onLinkClick}>
        {linkText} <ArrowRight size={14} />
      </a>
    </div>
  );
}