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
    duration: path.duration,
    fill: path.fill,
    strokeMiterlimit: path.strokeMiterlimit,
    strokeWidth: path.strokeWidth,
    strokeLinejoin: path.strokeLinejoin,
    strokeLinecap: path.strokeLinecap,
    opacity: path.opacity,
    x1: path.x1,
    y1: path.y1,
    x2: path.x2,
    y2: path.y2,
  });

  return (
    <>
      {group.map((path, i) => {
        return (
          <Suspense key={i}>
            {path.type === 'path' && <motion.path {...attr(path)} />}
            {path.type === 'polygon' && <motion.polygon {...attr(path)} />}
            {path.type === 'polyline' && <motion.polyline {...attr(path)} />}
            {path.type === 'line' && <motion.line {...attr(path)} />}
          </Suspense>
        );
      })}
    </>
  );
};

export default Path;
