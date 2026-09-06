"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, type Variants, useInView } from "framer-motion";

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Use IntersectionObserver directly so it works regardless of parent opacity
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeChar = () => {
      setDisplayedText(text.substring(0, i + 1));
      i++;

      if (i < text.length) {
        let delay = Math.random() * 50 + 30;
        const char = text[i - 1];
        if (char === ',' || char === '.') {
          delay += 250 + Math.random() * 150;
        } else if (char === ' ') {
          delay += Math.random() * 60;
        }
        timeoutId = setTimeout(typeChar, delay);
      }
    };

    timeoutId = setTimeout(typeChar, 500);
    return () => clearTimeout(timeoutId);
  }, [started, text]);

  const boldLength = 24; // "more than a celebration,"

  return (
    <div ref={ref}>
      <span className="font-sans font-medium text-white/90">
        {displayedText.substring(0, boldLength)}
      </span>
      {displayedText.length > boldLength && (
        <span>{displayedText.substring(boldLength)}</span>
      )}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1.2em] bg-dhwani-gold align-middle ml-1 shadow-[0_0_8px_rgba(255,215,0,0.8)]"
      />
    </div>
  );
};

export default function AboutDhwani() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden bg-[#020004]">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-dhwani-accent/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#20143A]/30 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col gap-16">

        {/* Top Section: Dashboard (Socials + Stats Side by Side) */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">

          {/* Left: Social Media Reach */}
          <motion.div
            className="flex-1 relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col items-center justify-center gap-8 group hover:bg-white/10 hover:border-dhwani-accent/50 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Internal ambient glow */}
            <div className="absolute -inset-24 bg-gradient-to-r from-dhwani-accent/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none" />

            <div className="text-center relative z-10">
              <div className="text-dhwani-white/90 font-sans text-sm mt-2 uppercase tracking-widest font-bold">Social Media</div>
              <div className="text-dhwani-gold flex justify-center drop-shadow-[0_0_20px_rgba(255,215,0,0.3)] group-hover:scale-105 transition-transform duration-500 origin-center mb-2 mt-2">
                <img src="/10m.png" alt="10M+" className="h-32 md:h-40 w-auto object-contain" />
              </div>
              <div className="text-dhwani-white/90 font-sans text-sm mt-2 uppercase tracking-widest font-bold">Total Views</div>
            </div>

            <div className="flex flex-col justify-center gap-6 w-full relative z-10">
              {/* Instagram */}
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover={{ scale: 1.05, x: -10 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 rounded-[2rem] flex items-center gap-6 shadow-xl hover:bg-white/10 hover:border-dhwani-accent hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] cursor-pointer w-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white p-3 shadow-inner">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </div>
                <div className="flex flex-col">
                  <div className="text-dhwani-white font-cursive italic text-4xl leading-none tracking-wider mb-1">16K+</div>
                  <div className="text-dhwani-white/60 font-sans text-xs font-bold uppercase tracking-[0.3em]">Followers</div>
                </div>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover={{ scale: 1.05, x: -10 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 rounded-[2rem] flex items-center gap-6 shadow-xl hover:bg-white/10 hover:border-[#FF0000] hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] cursor-pointer w-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FF0000] flex items-center justify-center text-white p-3 shadow-inner">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l6.5 3.27-6.5 3.27z" /></svg>
                </div>
                <div className="flex flex-col">
                  <div className="text-dhwani-white font-cursive italic text-4xl leading-none tracking-wider mb-1">1M+</div>
                  <div className="text-dhwani-white/60 font-sans text-xs font-bold uppercase tracking-[0.3em]">Views</div>
                </div>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover={{ scale: 1.05, x: -10 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 rounded-[2rem] flex items-center gap-6 shadow-xl hover:bg-white/10 hover:border-[#1877F2] hover:shadow-[0_0_30px_rgba(24,119,242,0.3)] cursor-pointer w-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white p-3 shadow-inner">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </div>
                <div className="flex flex-col">
                  <div className="text-dhwani-white font-cursive italic text-4xl leading-none tracking-wider mb-1">100K+</div>
                  <div className="text-dhwani-white/60 font-sans text-xs font-bold uppercase tracking-[0.3em]">Likes</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Scale & Impact (Bento Grid over Star) */}
          <motion.div
            className="flex-1 relative py-12 px-6 md:px-10 rounded-3xl bg-white/5 border border-white/5 overflow-hidden flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >

            {/* Massive Animated Logo Background */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{
                y: [-15, 15, -15],
                scale: [0.95, 1.05, 0.95],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/dhwani_logo_og.png"
                alt="Dhwani Logo"
                className="w-[120%] h-[120%] md:w-[100%] md:h-[100%] object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.5)]"
              />
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="relative z-10 w-full flex flex-col gap-6 w-full max-w-xl mx-auto">

              {/* Top Row Stats */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
                <motion.div
                  className="bg-[#020004]/70 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl hover:border-dhwani-accent/50 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-dhwani-white font-block text-3xl md:text-5xl leading-none mb-1 drop-shadow-md">100K+</div>
                  <div className="text-dhwani-white/60 font-sans text-xs uppercase font-bold tracking-widest">Footfall</div>
                </motion.div>

                <motion.div
                  className="bg-[#020004]/70 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl hover:border-dhwani-accent/50 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-dhwani-white font-block text-3xl md:text-5xl leading-none mb-1 drop-shadow-md">1000+</div>
                  <div className="text-dhwani-white/60 font-sans text-xs uppercase font-bold tracking-widest">Campus</div>
                </motion.div>
              </div>

              {/* Center Main Text - HIGHLIGHTED KERALA'S LARGEST FEST */}
              <div className="text-center flex flex-col items-center justify-center py-6 relative group">
                <motion.div
                  className="absolute inset-0 bg-dhwani-gold/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="text-dhwani-white/90 font-sans text-xl md:text-2xl tracking-[0.3em] uppercase mb-1 font-bold">Kerala&apos;s</div>
                  <img
                    src="/Largest.png"
                    alt="LARGEST"
                    className="h-20 sm:h-24 md:h-28 w-auto object-contain my-1 drop-shadow-[0_0_30px_rgba(255,215,0,0.4)]"
                  />
                  <div className="text-dhwani-white/90 font-sans text-xl md:text-2xl tracking-[0.3em] uppercase mb-1 font-bold">Cultural Fest</div>
                </motion.div>
              </div>

              {/* Bottom Row Stats */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
                <motion.div
                  className="bg-[#020004]/70 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl hover:border-dhwani-accent/50 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-dhwani-white font-block text-3xl md:text-5xl leading-none mb-1 drop-shadow-md">100+</div>
                  <div className="text-dhwani-white/60 font-sans text-xs uppercase font-bold tracking-widest">Events</div>
                </motion.div>

                <motion.div
                  className="bg-[#020004]/70 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl hover:border-dhwani-accent/50 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-dhwani-white font-block text-3xl md:text-5xl leading-none mb-1 drop-shadow-md">1M+</div>
                  <div className="text-dhwani-white/60 font-sans text-xs uppercase font-bold tracking-widest">Cash Prizes</div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Legacy Text & Video */}
        <div className="mt-8 pt-12 border-t border-white/5 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">

            {/* Left: Legacy Text */}
            <motion.div
              className="lg:w-1/2 flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-sans font-light text-dhwani-white leading-relaxed mb-8 max-w-2xl min-h-[80px]">
                <img src="/Dhwani_generated.png" alt="DHWANI" className="h-28 md:h-36 w-auto object-contain mb-6 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)] block" />
                <TypingText text="more than a celebration, these six letters embody the voice of a legacy that has echoed through generations." />
              </motion.h2>

              <div className="flex flex-col gap-6">
              </div>
            </motion.div>

            {/* Right: Aftermovie Video */}
            <motion.div
              className="lg:w-1/2 w-full relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Video Glow/Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-dhwani-accent via-dhwani-gold to-dhwani-violet rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-700"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-700">
                <video
                  src="/aftermovie.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Decorative text badge */}
              <div className="absolute -bottom-4 -left-4 bg-dhwani-accent text-white font-block tracking-widest text-xs py-2 px-4 rounded-xl shadow-lg transform -rotate-3 z-20 border border-white/20">
                FEEL THE ENERGY
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
