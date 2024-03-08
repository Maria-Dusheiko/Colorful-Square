import React, { useState, useCallback } from 'react';
import './Square.css';

export const Square = ({ color }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <div
      className="square"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: hovered ? color : 'rgb(18,18,18)',
        transition: hovered ? 'background-color' :  'background-color 2s ease, border-radius 1s ease',
        transform: hovered ? 'scale(1.1)' : 'none',
        borderRadius: hovered ? '40%' : '0',
      }}
    ></div>
  );
};