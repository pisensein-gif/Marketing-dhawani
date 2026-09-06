"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const heroSectionRef = useRef<HTMLElement | null>(null);

  // Smooth mouse-reactive 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const shiftX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const shiftY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroSectionRef.current) return;
    const rect = heroSectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={heroSectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#0a0216]"
    >
      
      {/* Clean Dark Theme Background with Ambient Glow & Circuit pattern hint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#120524] via-[#1a053a] to-[#0a0216] pointer-events-none"></div>
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(166,0,88,0.15)_0%,_transparent_50%)] pointer-events-none" />

      {/* Decorative Elements Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Clouds */}
        <img src="/elements/CLOUDS.svg" className="absolute bottom-[-10%] left-0 w-full object-cover opacity-20 mix-blend-screen" alt="clouds" />
        
        {/* Static Ferris Wheel at bottom */}
        <motion.img 
          src="/elements/new%20ferris.svg" 
          className="absolute bottom-[-5%] left-[15%] w-[250px] md:w-[450px] opacity-30 drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1.5 }}
          alt="Ferris Wheel" 
        />

        {/* Multiple Floating Music Notes */}
        <motion.img src="/elements/note.svg" className="absolute top-[25%] left-[15%] w-8 md:w-12 opacity-50" animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} alt="Music Note" />
        <motion.img src="/elements/blue%20note.svg" className="absolute top-[15%] right-[40%] w-6 md:w-10 opacity-60" animate={{ y: [0, 25, 0], rotate: [0, -15, 15, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} alt="Blue Music Note" />
        <motion.img src="/elements/note.svg" className="absolute bottom-[40%] left-[5%] w-6 md:w-8 opacity-40" animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }} alt="Music Note" />
        <motion.img src="/elements/blue%20note.svg" className="absolute bottom-[30%] right-[30%] w-8 md:w-12 opacity-50" animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }} alt="Blue Music Note" />
        <motion.img src="/elements/note.svg" className="absolute top-[40%] right-[10%] w-5 md:w-8 opacity-30" animate={{ y: [0, 30, 0], rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }} alt="Music Note" />
        
        {/* Additional Floating Music Notes */}
        <motion.img src="/elements/blue%20note.svg" className="absolute top-[50%] left-[30%] w-10 md:w-14 opacity-40" animate={{ y: [0, -25, 0], rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }} alt="Blue Music Note" />
        <motion.img src="/elements/note.svg" className="absolute bottom-[20%] left-[20%] w-7 md:w-9 opacity-50" animate={{ y: [0, 15, 0], rotate: [0, -8, 8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.3 }} alt="Music Note" />
        <motion.img src="/elements/blue%20note.svg" className="absolute top-[10%] right-[15%] w-5 md:w-7 opacity-35" animate={{ y: [0, -18, 0], rotate: [0, 12, -12, 0] }} transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.2 }} alt="Blue Music Note" />
        <motion.img src="/elements/note.svg" className="absolute bottom-[50%] right-[5%] w-9 md:w-12 opacity-45" animate={{ y: [0, 22, 0], rotate: [0, -18, 18, 0] }} transition={{ repeat: Infinity, duration: 6.2, ease: "easeInOut", delay: 2.5 }} alt="Music Note" />
        <motion.img src="/elements/blue%20note.svg" className="absolute bottom-[10%] right-[10%] w-6 md:w-8 opacity-55" animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.6 }} alt="Blue Music Note" />
      </div>

      {/* Main Two-Column Content */}
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between relative z-10 px-4 sm:px-6 lg:px-16 pt-20 pb-12">
        
        {/* Left Column: Text & Logo */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 w-full z-20 xl:pl-12 -mt-40 sm:-mt-32 lg:mt-0">
          
          <motion.h2 
            className="font-sans text-white text-xs sm:text-sm md:text-xl lg:text-2xl font-bold uppercase tracking-[0.15em] mb-6 drop-shadow-md z-30 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            KERALA&apos;S LARGEST CULTURAL FEST
          </motion.h2>

          <motion.div 
            className="w-full flex justify-center lg:justify-start mb-12"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Logo perfectly sized for the left column */}
            <img 
              src="/dhwani_og_26.png" 
              alt="Dhwani '26" 
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-[55vw] h-auto object-contain drop-shadow-[0_15px_35px_rgba(229,22,46,0.4)]"
            />
          </motion.div>
          
          <motion.h3
            className="font-sans text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 font-bold uppercase tracking-wide drop-shadow-md z-30 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            THE CULTURAL LEGACY OF CET
          </motion.h3>
          
          <motion.div 
            className="mt-6 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => { const el = document.getElementById('sponsorship'); if(el) el.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-2 lg:px-10 lg:py-3 bg-[#A60058] text-white font-bold text-base lg:text-xl uppercase tracking-wider shadow-[0_0_20px_rgba(166,0,88,0.5)] hover:shadow-[0_0_40px_rgba(166,0,88,0.8)] transition-all duration-300 inline-block transform -skew-x-12 hover:scale-105 cursor-pointer"
            >
              <span className="inline-block transform skew-x-12">Sponsorship Tiers</span>
            </button>
          </motion.div>

        </div>

        {/* Right Column: Mascot */}
        <motion.div 
          className="lg:w-1/2 w-full mt-16 translate-y-12 lg:translate-y-0 lg:mt-0 flex justify-center lg:justify-end items-end relative z-10 xl:pr-12"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-[45vw] z-10 flex justify-center items-center pointer-events-none">
            
            {/* Glowing Ground / Pedestal Base */}
            <div className="absolute bottom-[8%] md:bottom-[12%] left-1/2 transform -translate-x-[45%] w-[120%] md:w-[140%] h-[60px] md:h-[80px] bg-[radial-gradient(ellipse,_rgba(166,0,88,0.6)_0%,_rgba(100,0,200,0.3)_40%,_transparent_70%)] rounded-[100%] blur-[15px] z-0"></div>
            
            {/* Base Platform Shape */}
            <div className="absolute bottom-[8%] md:bottom-[12%] left-1/2 transform -translate-x-[45%] w-[100%] md:w-[120%] h-[40px] md:h-[60px] border-t-2 border-[#A60058]/60 bg-gradient-to-b from-[#A60058]/20 to-transparent rounded-[100%] z-0 shadow-[0_-10px_40px_rgba(166,0,88,0.5)]"></div>

            {/* Torii Gate carefully positioned to match the reference image */}
            <motion.img 
              src="/elements/torii%20new.svg" 
              className="absolute bottom-[10%] md:bottom-[15%] left-1/2 transform -translate-x-[45%] md:-translate-x-[42%] w-[130%] md:w-[150%] h-auto opacity-100 z-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              alt="Torii Gate Frame" 
            />

            {/* Mascot with smooth floating & mouse-interactive 3D parallax tilt */}
            <motion.div
              style={{
                rotateX: tiltX,
                rotateY: tiltY,
                x: shiftX,
                y: shiftY,
                transformPerspective: 1000,
              }}
              className="relative z-10 flex justify-center items-center pointer-events-auto w-full pt-[10%] md:pt-[15%] transform translate-x-[6%] md:translate-x-[12%]"
            >
              <motion.img 
                src="/MASCOT front transp.png" 
                alt="Dhwani Mascot"
                className="w-[55%] sm:w-[50%] md:w-[60%] lg:w-[65%] max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] drop-shadow-[0_0_40px_rgba(166,0,88,0.35)] cursor-pointer hover:scale-[1.03] transition-transform duration-500"
                animate={{ y: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-40 bg-gradient-to-b from-transparent to-[#020004] pointer-events-none z-10"></div>

    </section>
  );
}
