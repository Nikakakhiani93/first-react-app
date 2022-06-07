import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Card from '../src/components/Card';
import { employees } from './db';

export default function App() {
  const cards = employees.map((employee) => {
    return <Card key={employee.id} {...employee} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-section">{cards}</section>
    </div>
  );
}
