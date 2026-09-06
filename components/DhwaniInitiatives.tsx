"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper component for the automated 3D stack carousel
function StackedCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-sm aspect-[4/5] mx-auto perspective-1000">
      <AnimatePresence>
        {images.map((src, index) => {
          // Calculate offset relative to current index (0 is front, 1 is behind, 2 is further behind)
          const offset = (index - currentIndex + images.length) % images.length;
          
          // Only show up to 3 cards in the stack
          if (offset > 2 && offset !== images.length - 1) return null;

          // For the card sliding off, we treat it as offset -1 temporarily
          const isSlidingOff = offset === images.length - 1;

          return (
            <motion.div
              key={src} // use src as key for stable exit animations
              className={`absolute top-0 left-0 w-full h-full rounded-2xl border-4 border-white/10 shadow-2xl overflow-hidden bg-white/5 ${offset === 0 ? 'grayscale-0' : 'grayscale'}`}
              initial={false}
              animate={{
                x: isSlidingOff ? 300 : 0,
                y: isSlidingOff ? -50 : offset * 25,
                rotate: isSlidingOff ? 15 : 0,
                scale: isSlidingOff ? 1.05 : 1 - offset * 0.05,
                opacity: isSlidingOff ? 0 : 1 - offset * 0.3,
                zIndex: isSlidingOff ? 0 : 50 - offset,
                filter: offset === 0 ? "grayscale(0%)" : "grayscale(100%)",
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              <img 
                src={src} 
                alt={`Initiative image`} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none"></div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}


export default function DhwaniInitiatives() {
  const societyImages = [
    "/df-society/1.jpeg",
    "/df-society/2.jpeg",
    "/df-society/3.jpeg",
    "/df-society/4.jpeg",
  ];

  const juniorImages = [
    "/df-juniors/1.jpeg",
    "/df-juniors/2.jpeg",
    "/df-juniors/3.jpeg",
    "/df-juniors/4.jpeg",
    "/df-juniors/5.jpeg",
    "/df-juniors/6.jpeg",
  ];

  return (
    <section className="bg-[#05020A] relative text-dhwani-white py-24 min-h-screen overflow-hidden font-sans border-t border-dhwani-highlight/20">
      
      {/* Abstract Purple Fluid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-60">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#4A00E0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8E2DE2" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="grad2" cx="20%" cy="80%" r="60%" fx="20%" fy="80%">
              <stop offset="0%" stopColor="#1A0B2E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#grad2)" />
          
          <path d="M 0 50 Q 25 10, 50 50 T 100 50 L 100 100 L 0 100 Z" fill="#2A0845" opacity="0.2" className="animate-pulse" />
          <path d="M 0 80 Q 30 40, 70 80 T 100 60 L 100 100 L 0 100 Z" fill="#B829FF" opacity="0.1" />
        </svg>
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-[#B829FF]/20 rounded-full blur-[120px] mix-blend-screen transform rotate-45"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[80%] bg-[#4A00E0]/30 rounded-full blur-[100px] mix-blend-screen transform -rotate-12"></div>
        <div className="absolute top-[20%] left-[40%] w-[30%] h-[100%] bg-[#2D165E]/40 rounded-[100%] blur-[80px] transform rotate-[30deg]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-4 items-stretch justify-between w-full">
          
          {/* ================= LEFT COLUMN: DHWANI FOR SOCIETY ================= */}
          <div className="lg:w-[45%] flex flex-col items-center justify-start">
            
            <div className="flex justify-between w-full items-start mb-6 pl-4">
              <span className="text-white/50 text-xs font-bold tracking-widest uppercase">/Dhwani26</span>
            </div>

            <motion.h2 
              className="text-4xl sm:text-6xl md:text-[80px] lg:text-[90px] font-block leading-[0.85] text-center mb-16 drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-dhwani-gold block tracking-tighter">DHWANI</span>
              <span className="text-white block">FOR SOCIETY</span>
            </motion.h2>

            {/* Stacked Carousel */}
            <StackedCarousel images={societyImages} />
            
          </div>


          {/* ================= CENTER DIVIDER ================= */}
          <div className="hidden lg:flex lg:w-[10%] flex-col items-center justify-center relative py-20 min-h-[600px]">
            <div className="w-[1px] h-[35%] bg-gradient-to-b from-transparent via-dhwani-gold/50 to-dhwani-gold/50 absolute top-0"></div>
            
            <div className="flex items-center justify-center h-full">
              <motion.div 
                className="transform -rotate-90 whitespace-nowrap text-dhwani-gold text-2xl font-sans tracking-widest uppercase border-l-2 border-dhwani-gold pl-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                "Beyond celebrations, creating meaningful impact."
              </motion.div>
            </div>
            
            <div className="w-[1px] h-[35%] bg-gradient-to-t from-transparent via-dhwani-gold/50 to-dhwani-gold/50 absolute bottom-0"></div>
          </div>

          {/* Mobile Divider */}
          <div className="lg:hidden w-full flex justify-center items-center py-4 flex-col gap-4">
            <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-dhwani-gold/50 to-transparent"></div>
            <p className="text-dhwani-gold text-center text-sm font-sans tracking-widest uppercase px-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
              "Beyond celebrations, creating meaningful impact."
            </p>
            <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-dhwani-gold/50 to-transparent"></div>
          </div>


          {/* ================= RIGHT COLUMN: DHWANI FOR JUNIORS ================= */}
          <div className="lg:w-[45%] flex flex-col items-center justify-start">
            
            <div className="flex justify-end w-full items-start mb-6 pr-4">
              <span className="text-white/50 text-xs font-bold tracking-widest uppercase">/Brochure</span>
            </div>

            <motion.h2 
              className="text-5xl md:text-[70px] lg:text-[80px] font-block leading-[0.85] text-center mb-6 drop-shadow-2xl flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-dhwani-gold tracking-tighter">DHWANI</span>
              <span className="text-white">FOR JUNIORS</span>
            </motion.h2>

            <motion.p 
              className="text-white/80 font-sans text-sm md:text-base leading-relaxed text-center px-4 max-w-md mx-auto mb-16 shadow-black/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Dhwani champions educational growth by actively mentoring local students while extending its commitment to inclusivity through dedicated programs for differently abled youth, ensuring that the spark of curiosity reaches everyone.
            </motion.p>

            {/* Stacked Carousel */}
            <StackedCarousel images={juniorImages} />
            
          </div>

        </div>

        {/* Bottom Cinematic Banner */}
        <motion.div 
          className="mt-32 max-w-6xl mx-auto flex flex-col items-center bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-[40px] p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Subtle flare behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#B829FF]/20 blur-[60px] pointer-events-none"></div>

          <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-12 relative z-10">
            Driven by a legacy of culture and creativity, Dhwani stands as Kerala's largest campus cultural festival. Dhwani brings together 1000+ colleges, draws a footfall of <span className="text-white font-bold">75,000+</span>, and creates a dynamic student-led platform with unparalleled opportunities for brands to connect with young minds across culture, creativity, and celebration.
          </p>

          <div className="flex flex-col items-center gap-6 relative z-10">
            <h3 className="font-block text-3xl md:text-5xl text-dhwani-gold uppercase drop-shadow-md tracking-wider">
              "BE PART OF THIS LEGACY"
            </h3>
            <div className="bg-[#B829FF] text-white font-block text-xl md:text-2xl px-10 py-4 rounded-full shadow-[0_0_30px_rgba(184,41,255,0.4)] hover:scale-105 hover:bg-white hover:text-[#B829FF] transition-all duration-300 cursor-default">
              YOUR BRAND . OUR LEGACY
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
