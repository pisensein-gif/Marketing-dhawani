"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyCET() {
  return (
    <section className="bg-[#05020A] relative overflow-hidden text-dhwani-white py-24 border-t border-dhwani-highlight/20 font-sans min-h-screen flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A0B2E]/50 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
          
          {/* Box 1: Title (2x2 Large Square) */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 p-10 bg-gradient-to-br from-[#100823] to-[#0A0515] rounded-[40px] border border-white/10 flex flex-col justify-center relative overflow-hidden group hover:border-dhwani-gold/30 transition-colors duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Map graphic watermark */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 pointer-events-none">
              <img src="/kerala-map.png" className="w-full h-full object-contain" alt="Kerala Map" />
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-block tracking-tighter leading-[0.8] mb-6 relative z-10">
              <span className="text-white italic pr-4">WHY</span><br/>
              <span className="text-[#E5162E] drop-shadow-[0_0_20px_rgba(229,22,46,0.5)]">CET</span>
              <span className="text-white/50 text-3xl sm:text-4xl md:text-5xl absolute mt-[-10px] ml-2">?</span>
            </h2>
            <div className="text-dhwani-gold font-sans font-bold uppercase tracking-widest text-sm max-w-[250px] relative z-10">
              Strategic Location Analysis & Demographic Advantage
            </div>
          </motion.div>

          {/* Box 2: Student Reach (Wide Rectangle, 2x1) */}
          <motion.div 
            className="col-span-1 md:col-span-3 lg:col-span-2 lg:row-span-1 p-8 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 hover:border-dhwani-gold/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
             <div className="flex items-center justify-between mb-6">
               <h3 className="font-block text-2xl text-dhwani-gold tracking-wide">MASSIVE STUDENT REACH</h3>
               <span className="bg-white/10 text-white/50 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">Within 20km</span>
             </div>
             <div className="grid grid-cols-2 gap-6">
               <div>
                 <div className="text-4xl lg:text-5xl font-block text-white mb-2">70,000+</div>
                 <div className="text-xs font-sans text-white/70 leading-relaxed">Students across 80<br/>Colleges & Universities</div>
               </div>
               <div>
                 <div className="text-4xl lg:text-5xl font-block text-white mb-2">50,000+</div>
                 <div className="text-xs font-sans text-white/70 leading-relaxed">High-school Seniors<br/>across 225 Regional Schools</div>
               </div>
             </div>
          </motion.div>

          {/* Box 3: Corporate Integration (Square 1x1) */}
          <motion.div 
            className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 p-8 bg-gradient-to-tr from-[#1A0B2E] to-[#2D165E] rounded-[40px] border border-white/10 hover:shadow-[0_0_40px_rgba(139,18,255,0.4)] hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-block text-xl text-white mb-6 leading-tight">CORPORATE INTEGRATION</h3>
            <ul className="text-xs font-sans text-white/80 space-y-4">
              <li className="flex flex-col"><strong className="text-dhwani-gold text-sm">Technopark (5km)</strong> 70,000+ Tech Professionals</li>
              <li className="flex flex-col"><strong className="text-dhwani-gold text-sm">Lulu Mall (5km)</strong> Cross-activation Hub</li>
              <li className="flex flex-col"><strong className="text-dhwani-gold text-sm">Vizhinjam Port</strong> International Trade Growth</li>
            </ul>
          </motion.div>

          {/* Box 4: Connectivity (Square 1x1) */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-1 p-8 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-block text-xl text-white mb-6 leading-tight">SEAMLESS CONNECTIVITY</h3>
            <ul className="text-xs font-sans text-white/80 space-y-4">
              <li className="flex flex-col"><strong className="text-[#E5162E] text-sm">Kochuveli Railway (6km)</strong> Direct outstation inflow</li>
              <li className="flex flex-col"><strong className="text-[#E5162E] text-sm">Int'l Airport (10km)</strong> VIP & Artist transit</li>
              <li className="flex flex-col"><strong className="text-[#E5162E] text-sm">NH 66 Corridor (3km)</strong> Direct highway access</li>
            </ul>
          </motion.div>

          {/* Box 5: Tourist Spots (Wide Bottom 4x1) */}
          <motion.div 
            className="col-span-1 md:col-span-3 lg:col-span-4 lg:row-span-1 p-6 lg:p-8 bg-gradient-to-r from-[#E5162E]/20 to-[#E5162E]/5 rounded-[40px] border border-[#E5162E]/30 flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-[#E5162E]/20 transition-colors duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <h3 className="font-block text-3xl md:text-4xl text-white mb-1 drop-shadow-md">YOUTH TOURIST SPOTS</h3>
              <p className="text-dhwani-gold font-sans text-xs tracking-widest uppercase font-bold">Proximity to cultural hubs</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs lg:text-sm font-block tracking-widest text-white/90">
              <span className="bg-black/50 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/5 shadow-xl hover:-translate-y-1 transition-transform cursor-default">VARKALA CLIFF (35KM)</span>
              <span className="bg-black/50 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/5 shadow-xl hover:-translate-y-1 transition-transform cursor-default">KOVALAM (25KM)</span>
              <span className="bg-black/50 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/5 shadow-xl hover:-translate-y-1 transition-transform cursor-default">MANAVEYAM VEEDHI (10KM)</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
