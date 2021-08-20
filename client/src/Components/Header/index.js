import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import Icons from './Icons';
import './header.css';
import Canvas from './Canvas';

const Header = ({ updateMode }) => {
  const [yoni, setYoni] = useState('start');
  const [customize, setCustomize] = useState(false);
  const [customColors, setCustomColors] = useState(Array(25).fill('#f4f4f4'));
  const [currColor, setCurrColor] = useState('#11CB3C');
  const [erase, setErase] = useState(false);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [bg, setBg] = useState(false);

  const onCustomColor = (i) => {
    let newColor = customColors.slice(0);
    newColor[i] = currColor;
    setCustomColors(newColor);
  };

  useEffect(() => {
    if (erase) {
      setCurrColor('#f4f4f4');
    }

    console.log(bg);
  }, [erase, bg]);

  return (
    <header>
      <Nav />
      <Icons updateMode={updateMode} />
      <Canvas
        bg={bg}
        setBg={setBg}
        yoni={yoni}
        setYoni={setYoni}
        customColors={customColors}
        setCustomColors={setCustomColors}
        onCustomColor={onCustomColor}
        setCurrColor={setCurrColor}
        erase={erase}
        setErase={setErase}
        displayColorPicker={displayColorPicker}
        setDisplayColorPicker={setDisplayColorPicker}
        customize={customize}
        setCustomize={setCustomize}
      />
    </header>
  );
};

export default Header;
