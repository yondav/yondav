import React from 'react';

const BGSelector = ({ setBg }) => {
  return (
    <div className='bg-selector'>
      <div className='bg-opt' onClick={() => setBg('shea')}>
        <div className='bg-thumb-cont'>
          <img
            className='bg-thumbnail'
            src='https://res.cloudinary.com/yup-schlepp/image/upload/v1628729810/yondav/background_thumbnails/shea_tk2bl8.png'
            alt='shea'
          />
        </div>
        <span>Shea</span>
      </div>
    </div>
  );
};

export default BGSelector;
