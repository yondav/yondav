import React, { useState, useEffect } from 'react';
import Shea from './Shea';

const Background = () => {
  const [viewPort, setViewPort] = useState(false);

  const updateMedia = () => {
    if (window.innerWidth > 989) {
      setViewPort('desktop');
    }
    if (window.innerWidth > 767) {
      setViewPort({ width: 767, height: 767, rect: 1060 });
    }
    if (window.innerWidth < 767) {
      setViewPort({ width: 415, height: 415, rect: 1060 });
    }
  };

  const specs = {
    width: 415,
    height: 415,
    rect: 1060,
  };

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', updateMedia);
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className='background-container'>
      <div className='background'>
        <Shea
          width={viewPort.width}
          height={viewPort.height}
          rect={viewPort.rect}
        />
      </div>
    </div>
  );
};

export default Background;
