import React, { useState, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import './canvas.css';
const Background = React.lazy(() => import('./Backgrounds'));
const Yoni = React.lazy(() => import('./Yoni'));
const ColoringToolBar = React.lazy(() => import('./ColoringToolbar'));
const BGInfo = React.lazy(() => import('./BGInfo'));

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
  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState(false);

  return (
    <div className='canvas-container'>
      <div className='canvas'>
        <div className='bg-wrapper'>
          <Suspense fallback=''>
            <Background bg={bg} info={info} setInfo={setInfo} />
          </Suspense>
        </div>
        <Suspense fallback=''>
          <Yoni
            yoni={yoni}
            customColors={customColors}
            onCustomColor={onCustomColor}
            erase={erase}
            customize={customize}
            setCustomize={setCustomize}
          />
        </Suspense>
        <Suspense fallback=''>
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
            edit={edit}
            setEdit={setEdit}
          />
        </Suspense>
        <AnimatePresence>
          {info && <BGInfo bg={bg} setInfo={setInfo} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Canvas;
