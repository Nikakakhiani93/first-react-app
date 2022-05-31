import React from 'react';
import Card1 from '../images/image-1.svg';
import Star from '../images/star-icon.svg';

export default function Card(props) {
  return (
    <section className="card">
      <img src={Card1} className="card--image" />
      <div className="card--stats">
        <img src={Star} />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <b>From $136</b> / Person
      </p>
    </section>
  );
}
