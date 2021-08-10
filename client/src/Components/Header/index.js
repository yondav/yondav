import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import Icons from './Icons';
import Yoni from './Yoni';
import ColoringToolBar from './ColoringToolbar';
import './header.css';

const Header = ({ updateMode }) => {
  const [clear, setClear] = useState('start');
  const [customColors, setCustomColors] = useState(Array(25).fill('#f4f4f4'));
  const [currColor, setCurrColor] = useState('#11CB3C');
  const [erase, setErase] = useState(false);

  const onCustomColor = (i) => {
    let newColor = customColors.slice(0);
    newColor[i] = currColor;
    setCustomColors(newColor);
  };

  useEffect(() => {
    if (erase) {
      setCurrColor('#f4f4f4');
    }
  }, [erase]);

  console.log(customColors);

  return (
    <header>
      <Nav />
      <Icons updateMode={updateMode} />
      <Yoni
        clear={clear}
        customColors={customColors}
        onCustomColor={onCustomColor}
        erase={erase}
      />
      <ColoringToolBar
        clear={clear}
        setClear={setClear}
        setCustomColors={setCustomColors}
        setCurrColor={setCurrColor}
        setErase={setErase}
      />
    </header>
  );
};

export default Header;
