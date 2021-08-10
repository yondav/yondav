import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SketchPicker } from 'react-color';
import Draggable from 'react-draggable';
import { AiOutlineClose } from 'react-icons/ai';

const ColorSelector = ({ setCurrColor, setErase, setDisplayColorPicker }) => {
  const [background, setBackground] = useState('#bd867');

  const handleChangeComplete = (color) => setBackground(color.hex);

  const handleChange = (color, e) => {
    setCurrColor(color.hex);
    setErase(false);
    setBackground(color.hex);
  };

  return (
    <Draggable>
      <div className='color-selector'>
        <div className='controls'>
          <motion.div
            onClick={() => setDisplayColorPicker()}
            onTap={() => setDisplayColorPicker()}
          >
            <AiOutlineClose className='min' />
          </motion.div>
        </div>
        <div>
          <div />
          <SketchPicker
            className='color-selector-pop'
            color={background}
            onChangeComplete={handleChangeComplete}
            onChange={handleChange}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default ColorSelector;
