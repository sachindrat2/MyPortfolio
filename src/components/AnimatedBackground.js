import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => (
  <div className="animated-bg">
    <ul className="circles">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  </div>
);

export default AnimatedBackground;
