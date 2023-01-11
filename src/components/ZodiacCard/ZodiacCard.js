import React from 'react';
import './ZodiacCard.css';

export default function ZodiacCard({ prop }) {
  return (
    <div className="zodiac-card">
      <h3>{prop.name}</h3>
      <p>{prop.dates}</p>
      <img src={`./zodiac_images/${prop.name}.png`} />
      <p>{prop.symbol}</p>
    </div>
  );
}
