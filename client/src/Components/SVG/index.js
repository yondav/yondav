import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

const Path = ({ group }) => {
  const attr = (path) => ({
    className: path.className,
    variants: path.variants,
    transform: path.transform,
    initial: path.initial,
    onTap: path.tap,
    stroke: path.stroke,
    d: path.d,
    points: path.points,
    animate: path.animate,
    transition: path.transition,
    fill: path.fill,
    strokeMiterlimit: path.strokeMiterlimit,
  });

  return (
    <>
      {group.map((path, i) => {
        return (
          <Suspense key={i}>
            {path.type === 'polygon' && <motion.polygon {...attr(path)} />}
            {path.type === 'path' && <motion.path {...attr(path)} />}
            {path.type === 'polyline' && <motion.polyline {...attr(path)} />}
          </Suspense>
        );
      })}
    </>
  );
};

export default Path;
