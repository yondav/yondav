import React, { useState, useEffect, Suspense } from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import {
  VscChromeMinimize,
  VscArrowLeft,
  AiOutlineExpandAlt,
  BiEraser,
  BiColorFill,
  MdDoNotDisturb,
  MdSettingsBackupRestore,
  FiImage,
  RiDragMoveFill,
} from 'react-icons/all';
import './coloring_tool_bar.css';

const BGSelector = React.lazy(() => import('./BGSelector'));
const ColorSelector = React.lazy(() => import('./ColorSelector'));

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
  // const [edit, setEdit] = useState(false);

  useEffect(() => console.log(bgOpt), [bgOpt]);
  return (
    <>
      {edit ? (
        <Draggable handle='.controls'>
          <motion.div
            layout
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
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
                  <motion.button
                    onTap={() => {
                      setDisplayColorPicker(false);
                      setCustomize(false);
                      setYoni('color');
                    }}
                    className='btn original-btn control-btn'
                    title='back to original'
                  >
                    <MdSettingsBackupRestore />
                  </motion.button>
                  <motion.button
                    onTap={() => {
                      setBgOpt(false);
                      setCustomColors(Array(25).fill('#f4f4f4'));
                      setYoni('clear');
                    }}
                    className='btn yoni-btn control-btn'
                    title='yoni'
                  >
                    <MdDoNotDisturb />
                  </motion.button>
                  <motion.button
                    onTap={() => {
                      setBgOpt(false);
                      setDisplayColorPicker(false);
                      setCustomize('move');
                    }}
                    className='btn move-btn control-btn'
                    title='move and resize'
                  >
                    <RiDragMoveFill />
                  </motion.button>
                  <motion.button
                    onTap={() => {
                      setBgOpt(false);
                      setCustomize('color');
                      setErase(true);
                    }}
                    className='btn eraser-btn control-btn'
                    title='eraser'
                  >
                    <BiEraser />
                  </motion.button>
                  <motion.button
                    onTap={() => {
                      setBgOpt(false);
                      setCustomize('color');
                      setDisplayColorPicker(true);
                      setErase(false);
                    }}
                    className='btn fill-btn control-btn'
                    title='fill'
                  >
                    <BiColorFill />
                  </motion.button>
                  <motion.button
                    onTap={() => {
                      setBgOpt(true);
                      customize ? setCustomize('color') : setCustomize(false);
                      setDisplayColorPicker(false);
                    }}
                    className='btn bg-btn control-btn'
                    title='backgrounds'
                  >
                    <FiImage />
                  </motion.button>
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
