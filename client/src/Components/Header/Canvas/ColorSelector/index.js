import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorSelector = ({ setCurrColor, setErase }) => {
  const [background, setBackground] = useState('#bd867');

  const handleChangeComplete = (color) => setBackground(color.hex);

  const handleChange = (color, e) => {
    setCurrColor(color.hex);
    setErase(false);
    setBackground(color.hex);
  };

  return (
    <SketchPicker
      className='color-selector-pop'
      color={background}
      onChangeComplete={handleChangeComplete}
      onChange={handleChange}
    />
  );
};

export default ColorSelector;
