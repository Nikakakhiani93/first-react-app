import React from 'react';
import MainPicture from '../images/main-pic.svg';

export default function Hero() {
  return (
    <main className="hero">
      <img src={MainPicture} alt="MainPicture" className="main-pic" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
}
