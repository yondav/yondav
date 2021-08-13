import React, { useState, useEffect } from 'react';
import Shea from './Shea';

const Background = ({ bg }) => {
  const [viewPort, setViewPort] = useState(false);

  const updateMedia = () => {
    if (window.innerWidth > 989) {
      setViewPort({ width: 990, height: 990, rect: 1060 });
    }
    if (window.innerWidth > 767) {
      setViewPort({ width: 767, height: 767, rect: 1060 });
    }
    if (window.innerWidth < 767) {
      setViewPort({ width: 415, height: 415, rect: 1060 });
    }
  };

  useEffect(() => {
    if (window.innerWidth) {
      updateMedia();
    }

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className='background-container'>
      <div className='background'>
        {!bg && (
          <div
            style={{
              width: '100vw',
              height: '30rem',
            }}
          />
        )}
        {bg === 'shea' && (
          <Shea
            width={viewPort.width}
            height={viewPort.height}
            rect={viewPort.rect}
          />
        )}
      </div>
    </div>
  );
};

export default Background;
