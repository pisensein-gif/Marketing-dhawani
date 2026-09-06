"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.04,
            filter: "blur(12px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#05020A] flex flex-col items-center justify-center px-6 overflow-hidden select-none font-sans"
        >
          {/* Ambient Lighting */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#8B12FF]/25 to-[#FFD700]/15 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-[#E5162E]/15 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
            
            {/* Dhwani Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-6"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8B12FF]/30 to-[#FFD700]/30 rounded-full blur-2xl opacity-60 animate-pulse" />
              <img
                src="/dhwani_logo.png"
                alt="Dhwani Logo"
                className="relative h-32 md:h-44 w-auto object-contain drop-shadow-[0_0_35px_rgba(255,215,0,0.4)]"
              />
            </motion.div>

            {/* Dhwani Title SVG */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-10 w-full max-w-[280px] md:max-w-[340px] flex justify-center"
            >
              <img
                src="/dhwani_title.svg"
                alt="Dhwani 2026 Title"
                className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] brightness-110"
              />
            </motion.div>

            {/* Progress Bar & Status */}
            <motion.div 
              className="w-full max-w-xs flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Progress Track */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#8B12FF] via-[#B829FF] to-[#FFD700] rounded-full shadow-[0_0_15px_rgba(255,215,0,0.8)] transition-all duration-200 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Counter & Subtext */}
              <div className="flex justify-between w-full text-[11px] font-mono text-white/60 tracking-widest uppercase mt-1 px-1">
                <span className="text-white/40">Cultural Fest &apos;26</span>
                <span className="text-dhwani-gold font-bold font-mono">{progress}%</span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-8 text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold">
            College of Engineering Trivandrum
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

