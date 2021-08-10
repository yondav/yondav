import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import {
  VscChromeMinimize,
  AiOutlineExpandAlt,
  BiEraser,
  BiColorFill,
  MdDoNotDisturb,
  MdSettingsBackupRestore,
  GrClear,
} from 'react-icons/all';
import './coloring_tool_bar.css';

const ColoringToolBar = ({
  clear,
  setClear,
  setCustomColors,
  setErase,
  setDisplayColorPicker,
}) => {
  const [min, setMin] = useState(false);

  return (
    <>
      {clear === 'customize' ? (
        <Draggable>
          <div className='tool-bar'>
            <div className='controls'>
              {!min ? (
                <motion.div
                  onClick={() => setMin(true)}
                  onTap={() => setMin(true)}
                >
                  <VscChromeMinimize style={{ cursor: 'pointer' }} />
                </motion.div>
              ) : (
                <motion.div
                  onClick={() => setMin(false)}
                  onTap={() => setMin(false)}
                >
                  <AiOutlineExpandAlt style={{ cursor: 'pointer' }} />
                </motion.div>
              )}
            </div>
            {!min && (
              <div className='control-panel'>
                <motion.button
                  onClick={() => setClear('color')}
                  onTap={() => setClear('color')}
                  className='btn original-btn control-btn'
                  title='back to original'
                >
                  <MdSettingsBackupRestore />
                </motion.button>
                <motion.button
                  onClick={() => setCustomColors(Array(26).fill('#f4f4f4'))}
                  onTap={() => setCustomColors(Array(26).fill('#f4f4f4'))}
                  className='btn clear-btn control-btn'
                  title='clear'
                >
                  <MdDoNotDisturb />
                </motion.button>
                <motion.button
                  onClick={() => setErase(true)}
                  onTap={() => setErase(true)}
                  className='btn eraser-btn control-btn'
                  title='eraser'
                >
                  <BiEraser />
                </motion.button>
                <motion.button
                  onClick={() => {
                    setDisplayColorPicker(true);
                    setErase(false);
                  }}
                  onTap={() => {
                    setDisplayColorPicker(true);
                    setErase(false);
                  }}
                  className='btn fill-btn control-btn'
                  title='fill'
                >
                  <BiColorFill />
                </motion.button>
              </div>
            )}
          </div>
        </Draggable>
      ) : (
        <motion.button
          whileHover={{
            boxShadow: 'var(--shadow)',
            backgroundColor: 'var(--orange)',
          }}
          onTap={() => setClear('customize')}
          onClick={() => setClear('customize')}
          className='btn customize-btn'
        >
          <b>crayon</b>
        </motion.button>
      )}
    </>
  );
};

export default ColoringToolBar;
