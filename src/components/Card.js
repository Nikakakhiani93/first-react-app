import React from 'react';
// import img from '../images/image-1.svg';
import { employees } from '../db';

export default function Card() {
  return employees.map((employee) => (
    <section className="card">
      <img src={`../public/${employee.img}`} className="card--image" alt="" />
      <div className="card--stats">
        <img src={employee.icon} alt="" />
        <span>{employee.stats}</span>
        <span className="gray">({employee.statsAmount}) • </span>
        <span className="gray">{employee.country}</span>
      </div>
      <p>Life Lessons with {employee.fullName}</p>
      <p>
        <b>From ${employee.price}</b> / Person
      </p>
    </section>
  ));
}
