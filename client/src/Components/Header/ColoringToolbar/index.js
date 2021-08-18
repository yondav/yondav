import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import {
  VscChromeMinimize,
  AiOutlineExpandAlt,
  BiEraser,
  BiColorFill,
  MdDoNotDisturb,
  MdSettingsBackupRestore,
  FiImage,
  RiDragMoveFill,
} from 'react-icons/all';
import './coloring_tool_bar.css';
import BGSelector from './BGSelector';

const ColoringToolBar = ({
  setYoni,
  setCustomColors,
  setErase,
  setDisplayColorPicker,
  setBg,
  setCustomize,
  customize,
}) => {
  const [min, setMin] = useState(false);
  const [bgOpt, setBgOpt] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => console.log(bgOpt), [bgOpt]);
  return (
    <>
      {edit ? (
        <Draggable handle='.controls'>
          <div className='tool-bar'>
            <div className='controls'>
              {!min ? (
                <motion.div onTap={() => setMin(true)}>
                  <VscChromeMinimize style={{ cursor: 'pointer' }} />
                </motion.div>
              ) : (
                <motion.div onTap={() => setMin(false)}>
                  <AiOutlineExpandAlt style={{ cursor: 'pointer' }} />
                </motion.div>
              )}
            </div>
            {!min && (
              <>
                <div className='control-panel'>
                  <motion.button
                    onTap={() => {
                      // setBgOpt(false);
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
                    className='btn bg-btn control-btn'
                    onTap={() => {
                      setDisplayColorPicker(true);
                      !bgOpt ? setBgOpt(true) : setBgOpt(false);
                      customize ? setCustomize('color') : setCustomize(false);
                    }}
                  >
                    <FiImage />
                  </motion.button>
                </div>
                {bgOpt ? <BGSelector setBg={setBg} /> : null}
              </>
            )}
          </div>
        </Draggable>
      ) : (
        <motion.button
          whileHover={{
            boxShadow: 'var(--shadow)',
            backgroundColor: 'var(--orange)',
          }}
          onTap={() => setEdit(true)}
          className='btn customize-btn'
        >
          <b>crayon</b>
        </motion.button>
      )}
    </>
  );
};

export default ColoringToolBar;
