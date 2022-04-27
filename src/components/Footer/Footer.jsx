import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h4>General</h4>
          <a href="">About</a>
          <a href="">Our Work</a>
          <a href="">Contact Us</a>
        </div>
        <div className="footer-info">
          <h4>Services</h4>
          <a href="">Logo Design</a>
          <a href="">Website Design</a>
          <a href="">SEO Packages</a>
        </div>
        <div className="footer-info">
          <h4>Social Media</h4>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
        </div>
      </div>
    </div>
  );
}
