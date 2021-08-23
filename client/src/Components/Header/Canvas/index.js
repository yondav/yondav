import React, { useState, Suspense } from 'react';
import './canvas.css';
const Background = React.lazy(() => import('./Backgrounds'));
const Yoni = React.lazy(() => import('./Yoni'));
const ColoringToolBar = React.lazy(() => import('./ColoringToolbar'));

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

  return (
    <div className='canvas-container'>
      <div className='canvas'>
        <div className='bg-wrapper'>
          <Suspense>
            <Background bg={bg} />
          </Suspense>
        </div>
        <Suspense>
          <Yoni
            yoni={yoni}
            customColors={customColors}
            onCustomColor={onCustomColor}
            erase={erase}
            customize={customize}
            setCustomize={setCustomize}
          />
        </Suspense>
        <Suspense>
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
      </div>
    </div>
  );
};

export default Canvas;
