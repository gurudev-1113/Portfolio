import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6"
    >
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase font-outfit mb-4">
            K K GURUDEV<span className="text-secondary">.</span>
          </h1>
          <p className="text-secondary font-mono font-black text-sm tracking-[0.4em] uppercase">
            Data Science & ML Portfolio
          </p>
        </motion.div>

        {/* Huge Counter */}
        <div className="relative mb-8 h-32 md:h-48 flex items-center justify-center overflow-hidden">
          <motion.span
            className="text-[8rem] md:text-[12rem] font-black text-black leading-none tracking-tighter"
          >
            {Math.floor(progress)}
          </motion.span>
          <span className="text-4xl md:text-6xl font-black text-secondary mt-12 md:mt-20 ml-2">%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-secondary"
          />
        </div>

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-8 text-black font-black uppercase tracking-widest text-sm"
        >
          Training intelligent systems…
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
