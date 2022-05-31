import React from 'react';
import Logo from '../airbnb-logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" />
    </nav>
  );
}
