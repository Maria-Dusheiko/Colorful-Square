import {Square} from '../components/Square'

export const generateSquares = (count, selectedColor = '#f89be7') => {
   
    const squares = [];
    for (let i = 0; i < count; i++) {
      squares.push(<Square key={i} color={selectedColor} />);
    }
    return squares;
  };