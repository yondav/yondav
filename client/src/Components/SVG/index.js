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
    cx: path.cx,
    cy: path.cy,
    r: path.r,
    rx: path.rx,
    ry: path.ry,
    x: path.x,
    y: path.y,
    width: path.width,
    height: path.height,
  });

  return (
    <>
      {group.map((path, i) => {
        return (
          <Suspense fallback='' key={i}>
            {path.type === 'path' && <motion.path {...attr(path)} />}
            {path.type === 'polygon' && <motion.polygon {...attr(path)} />}
            {path.type === 'polyline' && <motion.polyline {...attr(path)} />}
            {path.type === 'line' && <motion.line {...attr(path)} />}
            {path.type === 'circle' && <motion.circle {...attr(path)} />}
            {path.type === 'ellipse' && <motion.ellipse {...attr(path)} />}
            {path.type === 'rect' && <motion.rect {...attr(path)} />}
          </Suspense>
        );
      })}
    </>
  );
};

export default Path;
