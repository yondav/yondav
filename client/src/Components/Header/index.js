import React, { useState, useEffect, Suspense } from 'react';
import Nav from '../Nav';
import Loading from '../Loading';
import './header.css';

const Icons = React.lazy(() => import('../Icons/Icons'));
const Canvas = React.lazy(() => import('./Canvas'));

const Header = ({ updateMode }) => {
  const [yoni, setYoni] = useState('start');
  const [customize, setCustomize] = useState(false);
  const [customColors, setCustomColors] = useState(
    JSON.parse(localStorage.getItem('custom_colors')) ||
      Array(25).fill('#f4f4f4')
  );
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

    localStorage.setItem('custom_colors', JSON.stringify(customColors));
    bg && localStorage.setItem('bg', JSON.stringify(bg));
  }, [erase, bg, customColors]);

  return (
    <header>
      <Nav />
      <Suspense fallback={<Loading />}>
        <Icons updateMode={updateMode} className='icons' />
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
      </Suspense>
    </header>
  );
};

export default Header;
