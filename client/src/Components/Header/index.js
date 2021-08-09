import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import Icons from './Icons';
import Yoni from './Yoni';
import './header.css';
import ColorSelector from './ColorSelector';

const Header = ({ updateMode }) => {
  const [clear, setClear] = useState('start');
  const [customColors, setCustomColors] = useState(Array(25).fill('#ffffff'));
  const [currColor, setCurrColor] = useState('#11CB3C');

  const onCustomColor = (i) => {
    let newColor = customColors.slice(0);
    newColor[i] = currColor;
    setCustomColors(newColor);
  };

  console.log(customColors);

  useEffect(() => console.log(clear), [clear]);
  return (
    <header>
      <button onClick={() => setCustomColors(Array(26).fill('#ffffff'))}>
        clear
      </button>
      <button onClick={() => setClear('color')}>color</button>
      <button onClick={() => setClear('customize')}>customize</button>
      <Nav />
      <Icons updateMode={updateMode} />
      <Yoni
        clear={clear}
        customColors={customColors}
        onCustomColor={onCustomColor}
      />
      <ColorSelector setCurrColor={setCurrColor} />
    </header>
  );
};

export default Header;
