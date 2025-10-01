'use client';

import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

function AnimatedCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
}
export default AnimatedCounter;
