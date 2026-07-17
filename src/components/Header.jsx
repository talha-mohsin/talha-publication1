import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <div className="topbar" id="header-topbar">
      <div className="container topbar-content">
          <div className="topbar-item">
            <Mail size={14} />
            <a href="mailto:info@example.com">info@example.com</a>
          </div>
          <div className="topbar-item desktop-only-text">
            <span>Welcome To  </span>
          </div>
          <div className="topbar-item">
            <Phone size={14} />
            <a href="tel:+0000000000">+00 000 00000</a>
          </div>
      </div>
    </div>
  );
}