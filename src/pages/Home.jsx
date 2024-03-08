import React, { useState } from 'react';
import { ColorInput } from '../components/ColorInput';
import { generateSquares } from '../components/helpers';

import './Home.css';

export const HomePage = () => {
  const [selectedColor, setSelectedColor] = useState('#f89be7');

  return (
    <div className="app">
      <h1  className="app-title">Color Changing Squares Game</h1>
      <ColorInput color={selectedColor} onColorChange={setSelectedColor} />
      <div className="squares-container">{generateSquares(1000, selectedColor)}</div>
    </div>
  );
};