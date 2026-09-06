"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyDhwani() {
  return (
    <section id="sponsorship" className="bg-[#05020A] relative text-dhwani-white py-24 md:py-32 border-t border-dhwani-highlight/20 font-sans min-h-screen">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A0B2E]/30 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B12FF]/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col pt-10">
            <motion.h2 
              className="flex flex-col text-[50px] sm:text-[65px] lg:text-[100px] xl:text-[120px] leading-[0.85] font-body font-bold drop-shadow-2xl relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-white transform -translate-x-2">WHY</span>
              <span className="text-dhwani-accent tracking-tighter">DHWANI</span>
              <span className="text-white/50 text-[60px] sm:text-[80px] lg:text-[120px] absolute -right-4 lg:-right-8 top-0 italic">?</span>
            </motion.h2>
            
            <motion.div 
              className="mt-12 w-16 h-1 bg-gradient-to-r from-[#8B12FF] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
            ></motion.div>
            
            <motion.p 
              className="mt-8 font-sans text-white/60 text-lg leading-relaxed max-w-sm hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Kerala's largest campus cultural festival, driving unparalleled impact and reach.
            </motion.p>
          </div>

          {/* Right Column: Asymmetric Metric Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 w-full">
            
            {/* 1. Footfall (Large, 2x2) */}
            <motion.div 
              className="col-span-2 md:col-span-2 row-span-2 p-8 lg:p-10 bg-gradient-to-br from-[#100823] to-[#0A0515] rounded-[32px] border border-white/10 flex flex-col justify-end min-h-[250px] group hover:border-[#8B12FF]/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <img src="/100K+.png" alt="100K+" className="h-20 lg:h-28 w-auto object-contain drop-shadow-[0_0_20px_rgba(139,18,255,0.5)] group-hover:scale-105 transition-transform origin-left" />
              </div>
              <div className="text-white text-xl lg:text-2xl font-bold uppercase tracking-widest mt-4">Foot Fall</div>
            </motion.div>

            {/* 2. Years Legacy */}
            <motion.div 
              className="col-span-1 p-6 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-white text-4xl lg:text-5xl font-body font-bold leading-none">25+</div>
              <div className="text-white/60 text-xs lg:text-sm uppercase tracking-wider mt-2 font-bold">Years Legacy</div>
            </motion.div>

            {/* 3. Campus */}
            <motion.div 
              className="col-span-1 p-6 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-white text-4xl lg:text-5xl font-body font-bold leading-none">1000+</div>
              <div className="text-white/60 text-xs lg:text-sm uppercase tracking-wider mt-2 font-bold">Campus</div>
            </motion.div>

            {/* 4. Social Media (Wide, 2x1) */}
            <motion.div 
              className="col-span-2 md:col-span-2 p-8 bg-gradient-to-tr from-[#1A0B2E] to-[#2D165E] rounded-[32px] border border-white/10 hover:shadow-[0_0_30px_rgba(139,18,255,0.3)] transition-all flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-2">
                <img src="/10m.png" alt="10M+" className="h-24 lg:h-32 w-auto object-contain drop-shadow-md" />
              </div>
              <div className="text-dhwani-gold text-sm lg:text-lg uppercase tracking-widest mt-2 font-bold">Social Media Engagement</div>
            </motion.div>

            {/* 5. Visibility */}
            <motion.div 
              className="col-span-1 p-6 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="text-dhwani-gold text-3xl lg:text-4xl font-body font-bold leading-none">KERALA-WIDE</div>
              <div className="text-white/60 text-xs lg:text-sm uppercase tracking-wider mt-2 font-bold">Visibility</div>
            </motion.div>

            {/* 6. Cash Prizes (Wide, 2x1) */}
            <motion.div 
              className="col-span-2 p-8 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:border-dhwani-gold/50 transition-colors flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <img src="/1M+.png" alt="1M+" className="h-14 lg:h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]" />
                <div className="text-white text-sm lg:text-lg uppercase tracking-widest mt-2 font-bold">Cash Prizes</div>
              </div>
              <div className="text-white/40 text-[10px] font-sans">Distributed across events</div>
            </motion.div>

            {/* 7. Pro Shows */}
            <motion.div 
              className="col-span-1 p-6 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
            >
              <div className="text-white text-4xl lg:text-5xl font-body font-bold leading-none">3</div>
              <div className="text-white/60 text-xs lg:text-sm uppercase tracking-wider mt-2 font-bold">Days Pro Shows</div>
            </motion.div>

            {/* 8. Events */}
            <motion.div 
              className="col-span-1 p-6 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-white text-4xl lg:text-5xl font-body font-bold leading-none">100+</div>
              <div className="text-white/60 text-xs lg:text-sm uppercase tracking-wider mt-2 font-bold">Events & Comps</div>
            </motion.div>

            {/* 9. Artists */}
            <motion.div 
              className="col-span-1 p-6 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              viewport={{ once: true }}
            >
              <div className="text-white text-4xl lg:text-5xl font-body font-bold leading-none">35+</div>
              <div className="text-white/60 text-xs lg:text-sm uppercase tracking-wider mt-2 font-bold">Artists</div>
            </motion.div>

            {/* 10. Food Stalls */}
            <motion.div 
              className="col-span-1 p-6 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-white text-4xl lg:text-5xl font-body font-bold leading-none">50+</div>
              <div className="text-white/60 text-xs lg:text-sm uppercase tracking-wider mt-2 font-bold">Food Stalls</div>
            </motion.div>

          </div>

        </div>



      </div>
    </section>
  );
}
