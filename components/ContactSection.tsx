"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#05020A] relative overflow-hidden text-dhwani-white py-24 border-t border-dhwani-highlight/20 font-sans flex flex-col items-center">
      
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A0B2E]/60 via-[#0A0515] to-[#05020A]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center w-full max-w-5xl">
        
        {/* Central Logo & Title */}
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-48 h-64 mb-6">
            <Image 
              src="/dhwani_logo_og.png" 
              alt="Dhwani Logo" 
              fill 
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-block tracking-widest text-white drop-shadow-lg">
            DHWANI'26
          </h2>
        </motion.div>

        {/* Contact Dashed Box */}
        <motion.div 
          className="w-full border-2 border-dashed border-white/30 rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col items-center bg-black/30 backdrop-blur-sm relative shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
          <h3 className="font-block text-3xl md:text-4xl text-dhwani-gold mb-12 tracking-wider drop-shadow-md">
            CONTACT US
          </h3>

          {/* Convener */}
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="font-sans text-white/70 text-sm md:text-base tracking-widest uppercase mb-1">
              DHWANI CONVENER
            </span>
            <p className="font-bold text-white text-lg md:text-xl tracking-wide flex items-center gap-2">
              ARAVIND VG <span className="text-white/50">📞 :</span> 99959 12035
            </p>
          </div>

          {/* 3-Column Leads */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-center mb-16">
            
            <div className="flex flex-col items-center">
              <span className="font-sans text-white/70 text-xs tracking-widest uppercase mb-1">
                HEAD OF SPONSORSHIP
              </span>
              <p className="font-bold text-white text-sm md:text-base tracking-wide flex items-center gap-2 mb-1">
                AKHILJITH P <span className="text-white/50">📞</span> 79079 82102
              </p>
              <a href="mailto:akhiljithpanjal@gmail.com" className="font-sans text-white/60 text-xs md:text-sm underline hover:text-dhwani-gold transition-colors">
                akhiljithpanjal@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-sans text-white/70 text-xs tracking-widest uppercase mb-1">
                MARKETING DIRECTOR
              </span>
              <p className="font-bold text-white text-sm md:text-base tracking-wide flex items-center gap-2 mb-1">
                ADHIL P <span className="text-white/50">📞</span> 81298 53259
              </p>
              <a href="mailto:adhilp617@gmail.com" className="font-sans text-white/60 text-xs md:text-sm underline hover:text-dhwani-gold transition-colors">
                adhilp617@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-sans text-white/70 text-xs tracking-widest uppercase mb-1">
                HEAD OF MARKETING
              </span>
              <p className="font-bold text-white text-sm md:text-base tracking-wide flex items-center gap-2 mb-1">
                NANDAKISHOR <span className="text-white/50">📞</span> 7902791880
              </p>
              <a href="mailto:knandhkishor@gmail.com" className="font-sans text-white/60 text-xs md:text-sm underline hover:text-dhwani-gold transition-colors">
                knandhkishor@gmail.com
              </a>
            </div>
            
          </div>

          {/* Main Email Pill */}
          <a href="mailto:marketing.dhwani.cet@gmail.com" className="bg-[#1A0A24] border border-[#2A1045] rounded-full px-8 md:px-12 py-4 flex items-center gap-3 hover:bg-[#250F33] transition-colors shadow-lg group">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white/80 group-hover:text-white">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="font-sans text-white text-sm md:text-base font-bold underline tracking-wide">
              marketing.dhwani.cet@gmail.com
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  );
}
