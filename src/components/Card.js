import React from 'react';

export default function Card(props) {
  return (
    <div className="card" key={props.id}>
      <img src={`../public/${props.img}`} className="card--image" alt="" />
      <div className="card--stats">
        <img src={props.icon} alt="" />
        <span>{props.stats}</span>
        <span className="gray">({props.statsAmount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="card-title">Life Lessons with {props.fullName}</p>
      <p>
        <b>From ${props.price}</b> / Person
      </p>
    </div>
  );
}
