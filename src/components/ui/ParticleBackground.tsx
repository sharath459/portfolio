'use client';

import { motion } from 'framer-motion';

// The 2D canvas ParticleBackground was replaced by the WebGL scene in
// components/three/Scene3D.tsx. AnimatedOrbs remains as ambient color wash
// (and as the fallback when WebGL is unavailable).
export const AnimatedOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-30 blur-[100px]">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/20"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 rounded-full bg-purple-500/20"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-1/4 left-1/2 w-1/2 h-1/2 rounded-full bg-emerald-500/20"
      />
    </div>
  );
};
