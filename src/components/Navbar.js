import React from 'react';
import Logo from '../images/airbnb-logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" />
    </nav>
  );
}
