import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { VscChromeMinimize, AiOutlineExpandAlt } from 'react-icons/all';
import ColorSelector from '../ColorSelector';
import './coloring_tool_bar.css';

const ColoringToolBar = ({
  clear,
  setClear,
  setCustomColors,
  setCurrColor,
  setErase,
}) => {
  const [min, setMin] = useState(false);

  return (
    <Draggable>
      <div className='tool-bar'>
        <div className='controls'>
          {!min ? (
            <VscChromeMinimize
              style={{ cursor: 'pointer' }}
              onClick={() => setMin(true)}
            />
          ) : (
            <AiOutlineExpandAlt
              style={{ cursor: 'pointer' }}
              onClick={() => setMin(false)}
            />
          )}
        </div>
        {!min && (
          <div>
            {clear !== 'customize' ? (
              <button onClick={() => setClear('customize')}>customize</button>
            ) : (
              <>
                <button onClick={() => setClear('color')}>color</button>
                <button
                  onClick={() => setCustomColors(Array(26).fill('#f4f4f4'))}
                >
                  clear
                </button>
                <button onClick={() => setErase(true)}>erase</button>
                <ColorSelector
                  setCurrColor={setCurrColor}
                  setErase={setErase}
                />
              </>
            )}
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default ColoringToolBar;
