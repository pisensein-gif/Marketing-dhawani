"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  { year: "1999", text: "ORIGIN", image: "/1999.png", cx: 10, cy: 80 },
  { year: "2002", text: "Rises as Kerala's Largest", image: "/2002.png", cx: 18.8, cy: 20 },
  { year: "2006", text: "Record for highest footfall", image: "/2006.png", cx: 27.7, cy: 50 },
  { year: "2012", text: "Expanded to proshows", image: "/2012.png", cx: 36.6, cy: 80 },
  { year: "2015", text: "Mohit Chauhan performed", image: "/2015.png", cx: 45.5, cy: 50 },
  { year: "2017", text: "40k+ footfall", image: "/2017.png", cx: 54.4, cy: 20 },
  { year: "2019", text: "Prizes worth 1M+", image: "/2019.png", cx: 63.3, cy: 50 },
  { year: "2022", text: "Jonita Gandhi performs", image: "/2022.png", cx: 72.2, cy: 80 },
  { year: "2024", text: "15th edition", image: "/2024.png", cx: 81.1, cy: 50 },
  { year: "2026", text: "This OCTOBER is Yours", image: "/dhwani-logo-og.png", cx: 90, cy: 20 },
];

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate the perfectly smooth SVG path using cubic beziers (mapped to 0-100 viewBox)
  let pathD = `M ${milestones[0].cx} ${milestones[0].cy}`;
  for (let i = 1; i < milestones.length; i++) {
    const prev = milestones[i - 1];
    const curr = milestones[i];
    const dx = (curr.cx - prev.cx) / 2;
    pathD += ` C ${prev.cx + dx} ${prev.cy}, ${curr.cx - dx} ${curr.cy}, ${curr.cx} ${curr.cy}`;
  }

  return (
    <section className="py-24 relative overflow-hidden bg-[#020004]" ref={containerRef}>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-dhwani-accent/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-dhwani-gold/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-dhwani-white/80 font-block tracking-widest text-xl uppercase mb-1">Dhwani</h3>
            <h2 className="text-dhwani-white font-block text-4xl sm:text-5xl md:text-7xl mb-4 tracking-tight">THE ROAD SO FAR</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-dhwani-gold to-dhwani-accent rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP/TABLET: Single Window Curved Roadmap */}
      <div className="hidden lg:block relative w-full h-[600px] 2xl:h-[800px] mx-auto pb-12 pt-4 px-12">
          
        {/* The SVG Curved Path (Scale 0-100) */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Background path (faint) */}
          <path 
            d={pathD} 
            fill="none" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="0.5" 
            strokeLinecap="round"
          />
          {/* Animated drawing path (Automatic Loop) */}
          <motion.path 
            d={pathD} 
            fill="none" 
            stroke="url(#gradient)" 
            strokeWidth="0.8" 
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="drop-shadow-[0_0_8px_rgba(255,215,0,0.9)]"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Milestone Cards positioned exactly on the SVG line using percentages */}
        {milestones.map((milestone, index) => {
          return (
            <motion.div 
              key={index} 
              className="absolute flex flex-col items-center group w-[10vw] xl:w-[9vw] 2xl:w-[8vw] min-w-[120px]"
              style={{ 
                left: `${milestone.cx}%`, 
                top: `${milestone.cy}%`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true, margin: "0px" }}
            >
              
              {/* The Card */}
              <div className="w-full bg-[#080314]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:border-dhwani-gold/80 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300 z-10 group-hover:-translate-y-3 cursor-pointer">
                
                {/* Image Banner with enhanced hover */}
                <div className="h-16 xl:h-20 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080314] via-transparent to-transparent z-10" />
                  <img 
                    src={milestone.image} 
                    alt={`Dhwani ${milestone.year}`} 
                    className={`w-full h-full group-hover:scale-125 transition-transform duration-700 ease-out ${milestone.year === '2026' ? 'bg-black object-contain p-2' : 'object-cover'}`}
                  />
                </div>

                {/* Text Content */}
                <div className="p-2 xl:p-3 text-center relative z-20 bg-gradient-to-b from-[#080314] to-[#100823]">
                  <div className="text-dhwani-white/50 group-hover:text-dhwani-gold font-block text-xl xl:text-3xl mb-1 group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] group-hover:scale-110 transition-all duration-300">
                    {milestone.year}
                  </div>
                  <p className="text-dhwani-white/50 group-hover:text-dhwani-white font-light text-[9px] xl:text-[11px] leading-tight uppercase tracking-wide h-8 xl:h-10 flex items-center justify-center transition-colors duration-300">
                    {milestone.text}
                  </p>
                </div>
              </div>

            </motion.div>
          )
        })}
      </div>

      {/* MOBILE FALLBACK: Standard Vertical Timeline */}
      <div className="lg:hidden container mx-auto px-6 relative mt-12">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-dhwani-gold via-dhwani-accent to-dhwani-gold opacity-50 rounded-full"></div>
        <div className="flex flex-col gap-12 relative">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={`mob-${index}`} 
              className="flex flex-row items-center w-full pl-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#020004] border-4 border-dhwani-gold z-20"></div>

              {/* Card Content */}
              <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                <div className="h-32 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100823] to-transparent z-10" />
                  <img src={milestone.image} alt={milestone.year} className={`w-full h-full ${milestone.year === '2026' ? 'bg-black object-contain p-2' : 'object-cover'}`} />
                </div>
                <div className="p-5 bg-[#100823]">
                  <div className="text-dhwani-gold font-block text-3xl mb-2">{milestone.year}</div>
                  <p className="text-dhwani-white/80 font-light text-sm">{milestone.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
