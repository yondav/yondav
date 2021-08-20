import React from 'react';
import Background from './Backgrounds';
import ColoringToolBar from './ColoringToolbar';
import Yoni from './Yoni';
import './canvas.css';

const Canvas = ({
  bg,
  setBg,
  yoni,
  setYoni,
  customColors,
  setCustomColors,
  onCustomColor,
  setCurrColor,
  erase,
  setErase,
  displayColorPicker,
  setDisplayColorPicker,
  customize,
  setCustomize,
}) => {
  return (
    <div className='canvas-container'>
      <div className='canvas'>
        <div className='bg-wrapper'>
          <Background bg={bg} />
        </div>
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
      </div>
    </div>
  );
};

export default Canvas;
