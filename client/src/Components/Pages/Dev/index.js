import React, { useEffect, useRef, useState } from 'react';
import Title from '../../Title';

const Dev = () => {
  const ref = useRef();
  const [position, setPosition] = useState(100);
  useEffect(() => {
    ref.current !== 100 &&
      setPosition(
        (ref.current.offsetTop / document.body.clientHeight).toFixed(2) - 0
      );
  }, [position, setPosition, ref]);
  return (
    <section ref={ref} id='dev'>
      <Title
        word={['d', 'e', 'v']}
        y={position}
        start={position / 1.2}
        align={'flex-end'}
      />
    </section>
  );
};

export default Dev;
