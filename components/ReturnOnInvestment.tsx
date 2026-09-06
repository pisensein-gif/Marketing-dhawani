"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ReturnOnInvestment() {
  const deliverables = [
    {
      title: "High-Velocity Consumer Scale",
      highlight: "100K+ Weekend Footfall",
    },
    {
      title: "Hyper-Targeted Demographic Access",
      highlight: "1000+ Campus Network",
    },
    {
      title: "High-Conversion Experiential Branding",
      highlight: "100% Activation & Market Monopoly",
    },
    {
      title: "High-Impact Digital Content Amplification",
      highlight: "10M+ Social media Impressions",
    },
  ];

  return (
    <section className="bg-[#05020A] relative overflow-hidden text-dhwani-white py-24 md:py-32 flex flex-col items-center border-t border-dhwani-highlight/20 font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-50 pointer-events-none flex justify-center items-center">
        <div className="w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-[radial-gradient(circle,_rgba(255,215,0,0.1)_0%,_transparent_60%)] blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-[100px] font-block leading-[0.85] uppercase tracking-tighter drop-shadow-2xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white block">RETURN</span>
            <span className="text-dhwani-gold block">ON INVESTMENT</span>
          </motion.h2>
          <motion.p 
            className="text-white/60 text-lg md:text-2xl font-bold tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Core Value Deliverables
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 mt-4">
          
          {/* Left Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3 lg:-mr-16 z-20">
            {deliverables.slice(0, 2).map((item, idx) => (
              <motion.div 
                key={`left-${idx}`}
                className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl hover:border-dhwani-gold/40 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group text-center lg:text-right"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.2) }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-dhwani-gold/0 to-dhwani-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                <h3 className="text-white font-block text-2xl md:text-3xl mb-4 leading-none group-hover:text-dhwani-gold transition-colors">{item.title}</h3>
                <div className="w-16 h-[2px] bg-white/20 mb-4 group-hover:w-full group-hover:bg-dhwani-gold/50 transition-all duration-500 mx-auto lg:ml-auto lg:mr-0"></div>
                <p className="text-white/70 font-sans font-bold tracking-widest text-xs md:text-sm uppercase">{item.highlight}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Mascot */}
          <motion.div 
            className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] relative z-10 flex-shrink-0 lg:my-0 my-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 40 }}
            viewport={{ once: true }}
          >
            {/* Glowing orb behind mascot */}
            <div className="absolute inset-0 bg-dhwani-gold/20 blur-[120px] rounded-full mix-blend-screen animate-pulse pointer-events-none"></div>
            
            <motion.img 
              src="/masscot_cap.png" 
              alt="Dhwani Mascot in Cap" 
              className="w-full h-full object-contain relative z-20 drop-shadow-[0_20px_50px_rgba(255,215,0,0.3)] hover:scale-105 transition-transform duration-700"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3 lg:-ml-16 z-20">
            {deliverables.slice(2, 4).map((item, idx) => (
              <motion.div 
                key={`right-${idx}`}
                className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl hover:border-dhwani-gold/40 hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (idx * 0.2) }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-dhwani-gold/0 to-dhwani-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                <h3 className="text-white font-block text-2xl md:text-3xl mb-4 leading-none group-hover:text-dhwani-gold transition-colors">{item.title}</h3>
                <div className="w-16 h-[2px] bg-white/20 mb-4 group-hover:w-full group-hover:bg-dhwani-gold/50 transition-all duration-500 mx-auto lg:mr-auto lg:ml-0"></div>
                <p className="text-white/70 font-sans font-bold tracking-widest text-xs md:text-sm uppercase">{item.highlight}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
