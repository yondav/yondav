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
} from 'react-icons/all';
import './coloring_tool_bar.css';
import BGSelector from './BGSelector';

const ColoringToolBar = ({
  clear,
  setClear,
  setCustomColors,
  setErase,
  setDisplayColorPicker,
  setBg,
}) => {
  const [min, setMin] = useState(false);
  const [bgOpt, setBgOpt] = useState(false);

  useEffect(() => console.log(bgOpt), [bgOpt]);
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
              <>
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
                  <motion.button
                    className='btn bg-btn control-btn'
                    onTap={() => (!bgOpt ? setBgOpt(true) : setBgOpt(false))}
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
