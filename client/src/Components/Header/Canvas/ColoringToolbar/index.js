import React, { useState, Suspense } from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import {
  VscChromeMinimize,
  VscArrowLeft,
  AiOutlineExpandAlt,
} from 'react-icons/all';
import Loading from '../../../Loading';
import './coloring_tool_bar.css';

const ControlPanel = React.lazy(() => import('../ControlPanel'));
const BGSelector = React.lazy(() => import('../BGSelector'));
const ColorSelector = React.lazy(() => import('../ColorSelector'));

const ColoringToolBar = ({
  setYoni,
  setCustomColors,
  setErase,
  setCurrColor,
  setDisplayColorPicker,
  displayColorPicker,
  setBg,
  setCustomize,
  customize,
  edit,
  setEdit,
}) => {
  const [min, setMin] = useState(false);
  const [bgOpt, setBgOpt] = useState(false);

  return (
    <>
      {edit ? (
        <Draggable handle='.controls'>
          <motion.div
            layout
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3, ease: 'anticipate' }}
            className='tool-bar'
          >
            <div className='controls'>
              {!min ? (
                <motion.div
                  onTap={() =>
                    !bgOpt && !displayColorPicker
                      ? setMin(true)
                      : bgOpt
                      ? setBgOpt(false)
                      : setDisplayColorPicker(false)
                  }
                >
                  {!bgOpt && !displayColorPicker ? (
                    <VscChromeMinimize style={{ cursor: 'pointer' }} />
                  ) : (
                    <VscArrowLeft style={{ cursor: 'pointer' }} />
                  )}
                </motion.div>
              ) : (
                <motion.div onTap={() => setMin(false)}>
                  <AiOutlineExpandAlt style={{ cursor: 'pointer' }} />
                </motion.div>
              )}
            </div>
            {!min && (
              <div className='control-panel-btns'>
                <div className='control-panel'>
                  <ControlPanel
                    setDisplayColorPicker={setDisplayColorPicker}
                    setCustomize={setCustomize}
                    customize={customize}
                    setYoni={setYoni}
                    setBgOpt={setBgOpt}
                    setCustomColors={setCustomColors}
                    setErase={setErase}
                  />
                </div>
                <Suspense fallback=''>
                  {bgOpt && <BGSelector setBg={setBg} />}
                  {displayColorPicker && (
                    <ColorSelector
                      setCurrColor={setCurrColor}
                      setErase={setErase}
                    />
                  )}
                </Suspense>
              </div>
            )}
          </motion.div>
        </Draggable>
      ) : (
        <motion.button
          whileHover={{
            boxShadow: 'var(--shadow)',
            backgroundColor: 'var(--orange)',
          }}
          onTap={() => {
            setEdit(true);
            setBg(JSON.parse(localStorage.getItem('bg')));
          }}
          className='btn customize-btn'
        >
          <b>crayon</b>
        </motion.button>
      )}
    </>
  );
};

export default ColoringToolBar;
