import React from 'react';
import { motion } from 'framer-motion';
import {
  BiEraser,
  BiColorFill,
  MdDoNotDisturb,
  MdSettingsBackupRestore,
  FiImage,
  RiDragMoveFill,
} from 'react-icons/all';

const ControlPanel = ({
  setDisplayColorPicker,
  setCustomize,
  setYoni,
  setBgOpt,
  setCustomColors,
  setErase,
  customize,
}) => {
  const buttons = [
    {
      name: 'original',
      onTap: () => {
        setDisplayColorPicker(false);
        setCustomize(false);
        setYoni('color');
      },
      el: MdSettingsBackupRestore,
    },
    {
      name: 'yoni',
      onTap: () => {
        setBgOpt(false);
        setCustomColors(Array(25).fill('#f4f4f4'));
        setYoni('clear');
      },
      el: MdDoNotDisturb,
    },
    {
      name: 'move',
      onTap: () => {
        setBgOpt(false);
        setDisplayColorPicker(false);
        setCustomize('move');
      },
      el: RiDragMoveFill,
    },
    {
      name: 'eraser',
      onTap: () => {
        setBgOpt(false);
        setCustomize('color');
        setErase(true);
      },
      el: BiEraser,
    },
    {
      name: 'fill',
      onTap: () => {
        setBgOpt(false);
        setCustomize('color');
        setDisplayColorPicker(true);
        setErase(false);
      },
      el: BiColorFill,
    },
    {
      name: 'bg',
      onTap: () => {
        setBgOpt(true);
        customize ? setCustomize('color') : setCustomize(false);
        setDisplayColorPicker(false);
      },
      el: FiImage,
    },
  ];

  return (
    <div className='control-panel-btns'>
      <div className='control-panel'>
        {buttons.map((btn, i) => (
          <motion.button
            key={i}
            onTap={btn.onTap}
            className={`btn ${btn.name}-btn control-btn`}
            title={btn.name}
          >
            {React.createElement(btn.el)}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
