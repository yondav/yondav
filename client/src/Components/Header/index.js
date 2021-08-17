import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import Icons from './Icons';
import Yoni from './Yoni';
import ColoringToolBar from './ColoringToolbar';
import './header.css';
import ColorSelector from './ColorSelector';
import Background from './Backgrounds';
import { fillsArr } from './Yoni/fills';

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
      <Background bg={bg} />
      <Yoni
        yoni={yoni}
        customColors={customColors}
        onCustomColor={onCustomColor}
        erase={erase}
        customize={customize}
        setCustomize={setCustomize}
      />
      <ColoringToolBar
        yoni={yoni}
        setYoni={setYoni}
        setCustomColors={setCustomColors}
        setCurrColor={setCurrColor}
        setErase={setErase}
        displayColorPicker={displayColorPicker}
        setDisplayColorPicker={setDisplayColorPicker}
        setBg={setBg}
        customize={customize}
        setCustomize={setCustomize}
      />
      {displayColorPicker && (
        <ColorSelector
          setCurrColor={setCurrColor}
          setErase={setErase}
          setDisplayColorPicker={setDisplayColorPicker}
        />
      )}
    </header>
  );
};

export default Header;
