import React from 'react';
import Logo from '../images/airbnb-logo.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" />
    </div>
  );
}
