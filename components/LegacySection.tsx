"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LegacySection() {
  return (
    <section className="py-12 lg:py-0 bg-[#05020A] relative overflow-hidden text-dhwani-white border-t border-dhwani-highlight/20 min-h-screen flex items-center">
      
      {/* Massive Background Typography Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-60">
        <img 
          src="/athiradi-text.png"
          alt="Athiradi Text Background"
          className="w-auto h-[100%] md:h-[120%] max-w-none object-contain opacity-80 drop-shadow-2xl transform rotate-90 scale-[0.4] md:scale-150 -translate-x-[15vw] -translate-y-[35vh] md:-translate-x-[20vw] md:translate-y-0"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Basil Joseph */}
          <div className="flex-1 flex flex-col relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="z-20 relative"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-block tracking-tighter mb-4 uppercase text-white drop-shadow-2xl">
                BASIL JOSEPH
              </h2>
              
              <ul className="flex flex-col gap-1 font-sans text-base md:text-lg font-medium tracking-wide mb-8 drop-shadow-md bg-black/30 p-4 rounded-xl backdrop-blur-sm w-fit border border-white/5">
                <li>
                  <span className="text-dhwani-white/60 mr-2">-</span> 
                  CET Alumnus & <span className="text-dhwani-gold font-bold">Dhwani Convener 2010</span>
                </li>
                <li>
                  <span className="text-dhwani-white/60 mr-2">-</span> 
                  Actor & Award-Winning Filmmaker
                </li>
              </ul>
            </motion.div>

            {/* Portrait */}
            <motion.div 
              className="relative w-[70%] md:w-[50%] lg:w-[65%] xl:w-[70%] max-h-[65vh] mx-auto lg:mx-0 z-10 mt-[-20px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Note: User should replace this URL with the actual Basil cutout png */}
              <img 
                src="/basil.png" 
                alt="Basil Joseph" 
                className="w-full h-full object-contain rounded-2xl transition-all duration-700 shadow-2xl relative z-20"
              />

              {/* Decorative Hand-Drawn Arrow Pointing Right */}
              <svg className="absolute bottom-[-20px] right-[-60px] w-24 h-24 text-dhwani-gold drop-shadow-lg hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 20 80 Q 50 90 80 50" />
                <path d="M 60 50 L 80 50 L 75 70" />
                <path d="M 20 80 Q 50 90 80 50" fill="currentColor" fillOpacity="0.2"/>
              </svg>

            </motion.div>
          </div>

          {/* Right Column: Athiradi */}
          <div className="flex-1 flex flex-col items-center lg:items-end justify-center relative">
            
            {/* Title / Logo Placeholder */}


            {/* Poster Image */}
            <motion.div 
              className="relative w-[90%] md:w-[70%] bg-[#E8C064] p-3 pb-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer z-20"
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img 
                src="/Aathirradi.webp" 
                alt="Athiradi Movie Poster" 
                className="w-full h-auto max-h-[30vh] object-contain border-2 border-black/10"
              />
            </motion.div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center lg:text-left bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl relative z-10 max-w-lg lg:ml-auto"
            >
              <p className="font-sans text-sm md:text-base leading-relaxed text-dhwani-white/80">
                <span className="text-dhwani-gold font-bold">A Dhwani Legacy on Screen</span> – In his latest film Athiradi, Basil revealed that the fictional college fest Arohan was inspired by his experiences with Dhwani, highlighting the festival's lasting impact on his creative journey.
              </p>
            </motion.div>

            {/* Vintage Polaroid Photo */}
            <motion.div 
              className="relative mt-12 w-[80%] md:w-[60%] bg-[#E8C064] p-3 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer z-30 lg:self-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <img 
                src="/basils-dhwani.jpeg" 
                alt="Basil's Dhwani" 
                className="w-full h-auto max-h-[20vh] object-cover filter sepia-[0.3] contrast-125 border-2 border-black/10"
              />
              <div className="absolute bottom-3 left-0 w-full text-center">
                <span className="font-sans text-black/80 font-bold tracking-wider text-lg">Basil's DHWANI</span>
              </div>
              
              {/* Decorative Hand-Drawn Arrow Pointing Up */}
              <svg className="absolute top-[-60px] right-[-40px] w-20 h-20 text-dhwani-gold drop-shadow-lg hidden lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 80 80 Q 50 60 30 20" />
                <path d="M 50 20 L 30 20 L 35 40" />
                <path d="M 80 80 Q 50 60 30 20" fill="currentColor" fillOpacity="0.2"/>
              </svg>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
