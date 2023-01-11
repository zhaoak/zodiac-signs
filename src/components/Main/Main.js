import React from 'react';
import './Main.css';
import { zodiac } from '../../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard';

export default function Main() {
  return (
    <main>
      {zodiac.map((sign) => (
        <ZodiacCard key={sign.id} prop={sign} />
      ))}
      ;
    </main>
  );
}
