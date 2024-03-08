import React, { useCallback } from 'react';
import './ColorInput.css';

export const ColorInput = ({ color, onColorChange }) => {
  const handleColorChange = useCallback((event) => {
    onColorChange(event.target.value);
  }, [onColorChange]);

  return (
    <div  className='input-text'>
      <label htmlFor='color'> Choose your color: </label>
      <input
        type="color"
        id='color'
        value={color}
        onChange={handleColorChange}
        className='input-color'
      />
    </div>
  );
};