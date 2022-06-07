import React from 'react';

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div className="card" key={props.id}>
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../public/${props.img}`} className="card--image" alt="" />
      <div className="card--stats">
        <img src={props.icon} alt="" />
        <span>{props.stats}</span>
        <span className="gray">({props.statsAmount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">Life Lessons with {props.fullName}</p>
      <p>
        <b>From ${props.price}</b> / Person
      </p>
    </div>
  );
}
