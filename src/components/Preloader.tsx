/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers } from 'lucide-react';

// How long the splash stays fully visible before it begins fading out (ms).
const HOLD_MS = 800;

/**
 * Full-screen loading splash shown on every page load / reload.
 * Holds for ~0.8s while a progress bar fills, then fades the site in.
 */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#F8F9FA] flex flex-col items-center justify-center gap-7"
          aria-hidden="true"
        >
          {/* Logo mark with a soft pulse */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-12 h-12 rounded-sm bg-black flex items-center justify-center text-white shadow-sm"
          >
            <Layers className="w-6 h-6" />
          </motion.div>

          <div className="flex flex-col items-center gap-3">
            <span className="font-display font-medium text-base tracking-tight text-slate-950">
              KRAFT <span className="text-slate-400">//</span> WEB
            </span>

            {/* Progress bar fills over the 0.8s hold */}
            <div className="w-40 h-[3px] bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: HOLD_MS / 1000, ease: 'easeInOut' }}
              />
            </div>

            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
              Loading
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
