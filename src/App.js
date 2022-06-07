import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Card from '../src/components/Card';
import { employees } from './db';

export default function App() {
  const cards = employees.map((employee) => {
    return (
      <Card
        key={employee.id}
        img={employee.img}
        icon={employee.icon}
        stats={employee.stats}
        fullName={employee.fullName}
        statsAmount={employee.statsAmount}
        country={employee.country}
        price={employee.price}
        openSpots={employee.openSpots}
      />
    );
  });

  // <Hero/>

  return (
    <div>
      <Navbar />
      <section className="cards-section">{cards}</section>
    </div>
  );
}
