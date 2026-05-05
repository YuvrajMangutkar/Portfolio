import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 500);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center"
        >
          {/* Glowing orb */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 30px #00f5ff, 0 0 60px #00f5ff',
                '0 0 60px #bf5fff, 0 0 120px #bf5fff',
                '0 0 30px #00f5ff, 0 0 60px #00f5ff',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00f5ff] to-[#bf5fff] mb-8"
          />

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-2xl font-black gradient-text mb-2"
          >
            Yuvraj Mangutkar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-8"
          >
            Initializing Portfolio...
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ width: `${Math.min(progress, 100)}%`, background: 'linear-gradient(90deg, #00f5ff, #bf5fff)' }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <motion.p
            className="font-mono text-xs text-slate-600 mt-2"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
