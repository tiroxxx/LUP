import { useState } from 'react';
import { act } from 'react-dom/test-utils';
import './Navbar.css';

export default function Navbar() {

    const [active , setActive] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className={`nav-links ${active? "active" : ""}`}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="burger" onClick={() => setActive(!active)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
