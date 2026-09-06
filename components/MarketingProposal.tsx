"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MarketingProposal() {
  return (
    <section className="bg-[#05020A] relative overflow-hidden text-dhwani-white py-24 border-t border-dhwani-highlight/20 font-sans">
      
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A0B2E]/50 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-block tracking-tighter">
            <span className="text-dhwani-gold drop-shadow-md">MARKETING</span> <span className="text-white">PROPOSAL</span>
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16 lg:gap-24 mb-16">
          
          {/* Left Column: The Purple Card */}
          <motion.div 
            className="w-full max-w-md bg-gradient-to-b from-[#31085C] to-[#1E043A] rounded-[40px] p-10 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(49,8,92,0.6)] border border-white/5 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay"></div>

            <div className="relative z-10 flex flex-col items-center">
              <span className="font-sans text-white/80 text-sm mb-1 tracking-wider">CET Presents</span>
              <h3 className="font-block text-2xl md:text-3xl text-dhwani-gold mb-10 drop-shadow-md">Title Sponsor</h3>
              
              {/* Dhwani Logo Graphic */}
              <div className="relative w-48 h-64 mb-10">
                <Image 
                  src="/dhwani_logo_og.png" 
                  alt="Dhwani Logo" 
                  fill 
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              <span className="font-sans text-white/80 text-sm mb-2 tracking-wider">in association with</span>
              <h3 className="font-block text-2xl md:text-3xl text-white mb-2 drop-shadow-md">Associate Sponsor</h3>
              
              <h3 className="font-block text-2xl md:text-3xl text-dhwani-gold mb-4 drop-shadow-md">Powered by</h3>
              
              <span className="font-sans text-white/80 text-sm tracking-wider">
                co-sponsored by: <span className="font-bold text-white">co-sponsors</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Other Opportunities */}
          <motion.div 
            className="w-full flex-1 flex flex-col items-center text-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-sans text-3xl md:text-4xl text-white/90 font-light mb-6">
              Other Marketing opportunites include
            </h3>
            
            <div className="flex flex-col items-center w-full">
              <h2 className="font-block text-3xl sm:text-5xl md:text-7xl lg:text-[90px] text-white leading-none tracking-tighter drop-shadow-lg mb-2">
                EVENT SPONSORS
              </h2>
              <p className="font-sans text-white/50 text-sm md:text-base tracking-widest uppercase mb-6">
                (Includes proshows, flagship events & others)
              </p>
              
              <span className="font-block text-4xl sm:text-6xl text-dhwani-white/80 drop-shadow-md mb-6">&</span>
              
              <h2 className="font-block text-3xl sm:text-5xl md:text-7xl lg:text-[80px] text-white leading-none tracking-tighter drop-shadow-lg mb-2">
                VARIOUS PARTNERS
              </h2>
              <p className="font-sans text-white/50 text-sm md:text-base tracking-widest uppercase">
                (Includes both monetary and serivce)
              </p>
            </div>
          </motion.div>

        </div>

        {/* Footer Text */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10">
          <p className="font-sans text-white/60 text-xs md:text-sm tracking-wide">
            *To know more about marketing proposals a Separate sponsorship category brochure will be shared.
          </p>
          
          <h4 className="font-block text-xl md:text-2xl tracking-wider text-white bg-black/50 px-6 py-2 rounded-full border border-white/10 shadow-lg">
            NOTE : <span className="text-dhwani-gold">PAID PROMOTIONS AVAILABLE</span>
          </h4>
        </div>

      </div>
    </section>
  );
}
