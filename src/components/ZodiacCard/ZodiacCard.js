import React from 'react';
import './ZodiacCard.css';

export default function ZodiacCard({ prop }) {
  console.log(prop.id, prop.name, prop.dates, prop.symbol);
  return (
    <div className="zodiac-card">
      <h2>{prop.name}</h2>
      <p>{prop.dates}</p>
      <p>{prop.symbol}</p>
    </div>
  );
}
