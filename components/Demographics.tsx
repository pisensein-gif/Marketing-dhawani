"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// Helper components for the visualizations
function AnimatedCounter({ from, to, prefix = "", suffix = "", duration = 2 }: { from: number, to: number, prefix?: string, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) ref.current.textContent = prefix + Math.round(value).toLocaleString() + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, prefix, suffix]);
  return <span ref={ref}>{prefix}{from}{suffix}</span>;
}

// Icon for Gender
const PersonIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C10.34 2 9 3.34 9 5C9 6.66 10.34 8 12 8C13.66 8 15 6.66 15 5C15 3.34 13.66 2 12 2ZM15.5 9.5H8.5C7.12 9.5 6 10.62 6 12V18H8.5V23H11V18H13V23H15.5V18H18V12C18 10.62 16.88 9.5 15.5 9.5Z" />
  </svg>
);

// Helper for Growth Bar Chart
const GrowthChart = ({ title, data, histCagr, expCagr }: { title: string, data: {year: string, val: number, label: string, expected?: boolean}[], histCagr: string, expCagr: string }) => {
  const maxVal = Math.max(...data.map(d => d.val));
  
  return (
    <div className="flex flex-col relative pt-12">
      {/* CAGR Labels */}
      <div className="absolute top-0 left-0 text-[10px] md:text-xs tracking-wider">
        <div className="text-dhwani-white/60 uppercase">Historical CAGR : <span className="text-white font-bold">{histCagr}</span></div>
        <div className="text-dhwani-white/60 uppercase">Expected CAGR : <span className="text-dhwani-gold font-bold">{expCagr}</span></div>
      </div>
      
      {/* Chart Area */}
      <div className="h-48 flex items-end justify-center gap-4 md:gap-8 relative mt-4 pb-6">

        {/* Bars */}
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end relative group">
            {/* Value Label */}
            <span className="text-[10px] md:text-sm text-white mb-2">{item.label}</span>
            {/* Bar */}
            <motion.div 
              className={`w-6 md:w-10 rounded-t-sm ${item.expected ? 'bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4)]' : 'bg-[#8B12FF]/80 border border-[#8B12FF]'} relative transition-all duration-300 hover:-translate-y-1`}
              style={{ height: `${(item.val / maxVal) * 100}%`, transformOrigin: "bottom" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {item.expected && (
                <div className="absolute inset-0 flex items-center justify-center -rotate-90">
                  <span className="text-[8px] text-black font-bold tracking-widest uppercase">expected</span>
                </div>
              )}
            </motion.div>
            {/* X Axis Label */}
            <span className="absolute -bottom-6 text-xs text-dhwani-white/70">{item.year}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 font-block text-white uppercase tracking-widest drop-shadow-md text-sm md:text-lg">{title}</div>
    </div>
  );
};


export default function Demographics() {
  return (
    <section id="demographics" className="bg-[#05020A] relative overflow-hidden text-dhwani-white border-t border-dhwani-highlight/20 font-sans">
      
      {/* Background Swirl Effect (Simulated via gradients) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#1A0B2E] rounded-[100%] blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0A0515] rounded-[100%] blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-24 flex flex-col gap-32">
        
        {/* ================= SECTION 1: CET'S DEMOGRAPHICS & SEPTEMBER ADVANTAGE ================= */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          
          {/* Widget 1: Demographics Dashboard */}
          <motion.div 
            className="flex-1 flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B829FF]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#B829FF]/20 transition-colors duration-700"></div>

            <div className="flex justify-between items-start mb-12 relative z-10">
              <h2 className="text-3xl md:text-5xl font-block tracking-tighter leading-none">
                <span className="text-white block">CET'S</span> 
                <span className="text-dhwani-gold drop-shadow-md">DEMOGRAPHICS</span>
              </h2>
              <div className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest text-white/50 uppercase">
                /Dashboard
              </div>
            </div>

            <div className="flex flex-col gap-12 relative z-10">
              {/* Total Counter */}
              <div className="flex flex-col">
                <p className="text-white/60 font-sans text-sm uppercase tracking-widest font-bold mb-2">Total Student Base</p>
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-body font-bold text-white leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <AnimatedCounter from={0} to={5000} suffix="+" />
                </div>
              </div>

              {/* Multi-segment Progress Bar */}
              <div className="flex flex-col gap-4">
                <p className="text-white/60 font-sans text-sm uppercase tracking-widest font-bold">Academic Distribution</p>
                
                {/* Bar */}
                <div className="w-full h-4 md:h-6 bg-black/40 rounded-full overflow-hidden flex shadow-inner">
                  <motion.div className="h-full bg-dhwani-gold" initial={{ width: 0 }} whileInView={{ width: '70%' }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}></motion.div>
                  <motion.div className="h-full bg-[#E5162E]" initial={{ width: 0 }} whileInView={{ width: '20%' }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}></motion.div>
                  <motion.div className="h-full bg-[#B829FF]" initial={{ width: 0 }} whileInView={{ width: '10%' }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }}></motion.div>
                </div>
                
                {/* Legend */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-dhwani-gold"></div>
                      <span className="font-body font-bold text-xl text-white">3500+</span>
                    </div>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest uppercase ml-5">UG Students</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#E5162E]"></div>
                      <span className="font-body font-bold text-xl text-white">1000+</span>
                    </div>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest uppercase ml-5">PG Students</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#B829FF]"></div>
                      <span className="font-body font-bold text-xl text-white">500+</span>
                    </div>
                    <span className="text-[10px] text-white/50 font-bold tracking-widest uppercase ml-5">MBA & Others</span>
                  </div>
                </div>
              </div>

              {/* Gender Ratio */}
              <div className="flex items-center justify-between p-6 bg-black/20 rounded-3xl border border-white/5 mt-4">
                <div className="flex flex-col">
                  <span className="text-white/60 font-sans text-xs uppercase tracking-widest font-bold mb-1">Gender Ratio</span>
                  <span className="font-body font-bold text-3xl text-white">3:2</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <PersonIcon className="w-6 h-6 text-white" />
                    <span className="font-body font-bold text-sm text-white/80">60%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PersonIcon className="w-6 h-6 text-[#B829FF]" />
                    <span className="font-body font-bold text-sm text-[#B829FF]">40%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Widget 2: September Advantage Dashboard */}
          <motion.div 
            className="flex-1 flex flex-col bg-gradient-to-br from-[#1A0B2E] to-[#2D165E] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-8 relative z-10">
              <h2 className="text-3xl md:text-5xl font-block tracking-tighter leading-none">
                <span className="text-white block">THE OCTOBER</span> 
                <span className="text-dhwani-gold drop-shadow-md">ADVANTAGE</span>
              </h2>
            </div>
            
            <p className="text-white/80 font-sans text-sm leading-relaxed mb-10 border-l-2 border-dhwani-gold pl-4">
              Launching as the first mega-festival of the academic year lets your brand capture peak student attention and fresh seasonal budgets before any other campus event in the state.
            </p>

            <div className="flex flex-col gap-6 relative">
              {/* Vertical Line */}
              <div className="absolute top-2 bottom-2 left-[11px] w-[2px] bg-white/10"></div>
              
              {[
                { title: "FRESH YOUTH CAPITAL", color: "bg-[#FFD700]" },
                { title: "ZERO FESTIVAL FATIGUE", color: "bg-[#E5162E]" },
                { title: "1ST CULTURAL FEST IN KERALA", sub: "THIS ACADEMIC YEAR", color: "bg-[#B829FF]" },
                { title: "TWO-YEAR PENT-UP HYPE", color: "bg-white" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-6 relative z-10"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  viewport={{ once: true }}
                >
                  {/* Node */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-[#05020A] border-2 border-white/20 shadow-xl z-10`}>
                    <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`}></div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-col bg-black/20 px-6 py-4 rounded-2xl border border-white/5 backdrop-blur-sm flex-1 hover:bg-black/40 transition-colors cursor-default">
                    <span className="font-block text-white text-lg md:text-xl tracking-wide uppercase">
                      {item.title}
                    </span>
                    {item.sub && <span className="font-sans text-[10px] text-white/50 tracking-widest font-bold uppercase">{item.sub}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* ================= SECTION 2: MAP & CHARTS ================= */}
        <div className="flex flex-col w-full relative pt-12 border-t border-white/5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-block text-dhwani-gold tracking-tighter mb-10 text-center drop-shadow-md">
            DEMOGRAPHICS
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative w-full">
            
            {/* Left: Kerala Map (Abstract SVG representation) */}
            <div className="flex-1 relative flex justify-center lg:justify-start items-center h-[350px] md:h-[600px] w-full lg:-translate-x-12">
              <img 
                src="/kerala-map.png" 
                alt="Map of Kerala" 
                className="relative h-full w-auto scale-110 md:scale-125 object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.1)] z-10"
              />
              
              {/* Map Pin */}
              <div className="absolute bottom-[12%] right-[18%] md:bottom-[18%] md:right-[38%] flex flex-col items-center z-30 transform scale-100 md:scale-125">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-600 border-2 md:border-4 border-white shadow-[0_0_20px_rgba(220,38,38,0.8)] relative flex justify-center items-center mb-1 animate-bounce">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                  {/* Pin tail */}
                  <div className="absolute -bottom-3 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-red-600"></div>
                </div>
                <span className="font-sans text-dhwani-gold text-xs md:text-lg font-bold whitespace-nowrap bg-black/80 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10 shadow-xl">CET Trivandrum</span>
              </div>
            </div>

            {/* Center: Footfall Text */}
            <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-40 text-center w-full lg:w-auto my-8 lg:my-0 flex flex-col items-center justify-center scale-110 lg:scale-125">
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-block text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-10 relative mb-2">FOOTFALL</h3>
              <div className="z-10 relative flex justify-center items-center">
                <img src="/100K+.png" alt="100K+" className="h-24 md:h-32 lg:h-40 w-auto object-contain drop-shadow-[0_0_60px_rgba(255,215,0,0.6)]" />
              </div>
            </div>

            {/* Right: Charts Area */}
            <div className="flex-1 flex flex-col justify-between h-auto lg:h-[500px] items-center lg:items-end relative z-50 w-full lg:translate-x-8">
              
              {/* Pie Chart */}
              <div className="flex flex-col items-center w-full">
                <div className="relative w-56 h-56 md:w-64 md:h-64 mt-4 lg:mt-8 flex items-center justify-center">
                  <div 
                    className="w-full h-full rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                    style={{
                      background: `conic-gradient(
                        #E9D5FF 0% 12.5%, 
                        #C084FC 12.5% 24%, 
                        #9333EA 24% 48%, 
                        #6B21A8 48% 100%
                      )`
                    }}
                  ></div>
                  {/* Desktop Absolute Labels */}
                  <div className="hidden lg:flex absolute -right-32 -top-6 text-xs font-block tracking-widest text-dhwani-white w-32 text-left">REMAINING<br/>PARTICIPATIONS</div>
                  <div className="absolute top-[20%] right-[30%] transform translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-body font-bold text-black">12.5%</div>
                  
                  <div className="hidden lg:flex absolute -right-36 top-[30%] text-xs font-block tracking-widest text-dhwani-white w-32 text-left">CUSAT & CENTRAL</div>
                  <div className="absolute top-[35%] right-[15%] transform translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-body font-bold text-black drop-shadow-md">11.5%</div>

                  <div className="hidden lg:flex absolute -right-44 bottom-8 text-xs font-block tracking-widest text-dhwani-white w-40 text-left">KERALA UNIVERSITY<br/>(KU MAIN/ARTS)</div>
                  <div className="absolute bottom-[25%] right-[25%] transform translate-x-1/2 translate-y-1/2 text-xs md:text-sm font-body font-bold text-white drop-shadow-md">24.0%</div>

                  <div className="hidden lg:flex absolute -left-24 top-[20%] -translate-y-1/2 text-xs font-block tracking-widest text-dhwani-white flex-col text-right z-50">
                    <span>KTU</span>
                    <span>(AFFILIATED)</span>
                  </div>
                  <div className="absolute top-[50%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-body font-bold text-white drop-shadow-md z-50">52.0%</div>
                </div>

                {/* Mobile Legend */}
                <div className="grid grid-cols-2 gap-2 mt-8 lg:hidden w-full max-w-sm px-2">
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                    <div className="w-3 h-3 rounded-full bg-[#6B21A8]"></div>
                    <span className="text-[10px] font-body font-bold text-white">KTU (52.0%)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                    <div className="w-3 h-3 rounded-full bg-[#9333EA]"></div>
                    <span className="text-[10px] font-body font-bold text-white">KU MAIN (24.0%)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                    <div className="w-3 h-3 rounded-full bg-[#C084FC]"></div>
                    <span className="text-[10px] font-body font-bold text-white">CUSAT (11.5%)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                    <div className="w-3 h-3 rounded-full bg-[#E9D5FF]"></div>
                    <span className="text-[10px] font-body font-bold text-white">OTHERS (12.5%)</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row Charts */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-end mt-12 w-full justify-between">
                
                {/* Gender Ratio Grid */}
                <div className="flex flex-col bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="grid grid-cols-5 gap-2 mb-2">
                    {/* 6 Male, 4 Female logic (60/40 approx of 3:2) */}
                    {[...Array(6)].map((_, i) => <PersonIcon key={`m-${i}`} className="w-8 h-8 text-white drop-shadow-md" />)}
                    {[...Array(4)].map((_, i) => <PersonIcon key={`f-${i}`} className="w-8 h-8 text-[#B829FF] drop-shadow-md" />)}
                  </div>
                  <div className="text-center font-sans tracking-widest text-sm text-white/80">GENDER RATIO 3:2</div>
                </div>

                {/* Age Group Bar Chart */}
                <div className="flex items-end gap-6 border-l-2 border-b-2 border-white/20 p-4 h-48 w-64 md:w-72 relative text-white ml-12 mb-16 md:mb-0">
                  {/* Y Axis */}
                  <div className="absolute -left-12 bottom-6 -rotate-90 origin-left text-[10px] md:text-xs font-block tracking-widest text-white/50">PERCENTAGE &rarr;</div>
                  <div className="absolute -left-6 flex flex-col justify-between h-full py-1 text-[10px] font-sans text-white/40">
                    <span>80</span><span>70</span><span>60</span><span>50</span><span>40</span><span>30</span><span>20</span><span>10</span>
                  </div>
                  
                  {/* Bars */}
                  <div className="flex flex-col items-center justify-end h-full w-10 relative group">
                    <div className="w-full bg-dhwani-white h-[15%] rounded-t-sm transition-all duration-300 group-hover:bg-dhwani-gold group-hover:-translate-y-1"></div>
                    <span className="absolute -bottom-6 text-[10px] font-block tracking-widest">&lt;18</span>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full w-10 relative group">
                    <div className="w-full bg-dhwani-gold h-[80%] rounded-t-sm shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 group-hover:bg-[#E5162E] group-hover:-translate-y-1"></div>
                    <span className="absolute -bottom-6 text-[10px] font-block tracking-widest text-dhwani-gold">18-24</span>
                  </div>
                  <div className="flex flex-col items-center justify-end h-full w-10 relative group">
                    <div className="w-full bg-dhwani-white h-[20%] rounded-t-sm transition-all duration-300 group-hover:bg-dhwani-gold group-hover:-translate-y-1"></div>
                    <span className="absolute -bottom-6 text-[10px] font-block tracking-widest">24&gt;</span>
                  </div>
                  
                  {/* X Axis */}
                  <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-full text-center text-[10px] md:text-xs font-block tracking-widest text-white/50">AGE GROUP &rarr;</div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 3: GROWTH CHARTS ================= */}
        <div className="flex flex-col w-full relative pt-24 pb-12 border-t border-white/5">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-block text-dhwani-gold drop-shadow-md leading-none mb-2">GROWTH</h2>
            <p className="font-sans text-xl md:text-2xl text-white font-bold tracking-widest drop-shadow-sm">Over the past years</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
            
            <GrowthChart 
              title="SOCIAL MEDIA NETWORK" 
              histCagr="16.80%" 
              expCagr="24.22%"
              data={[
                { year: "2017", val: 14.2, label: "14.2k" },
                { year: "2018", val: 16.5, label: "16.5k" },
                { year: "2019", val: 19.8, label: "19.8k" },
                { year: "2022", val: 26.6, label: "26.6k" },
                { year: "2024", val: 42.1, label: "42.1k" },
                { year: "2026", val: 100, label: "100k+", expected: true },
              ]} 
            />

            <GrowthChart 
              title="FOOTFALL GROWTH" 
              histCagr="15.04%" 
              expCagr="18.93%"
              data={[
                { year: "2017", val: 21, label: "21k" },
                { year: "2018", val: 26, label: "26k" },
                { year: "2019", val: 35, label: "35k" },
                { year: "2022", val: 45, label: "45k" },
                { year: "2024", val: 56, label: "56k" },
                { year: "2026", val: 100, label: "100k+", expected: true },
              ]} 
            />

            <GrowthChart 
              title="TICKET SALE" 
              histCagr="10%" 
              expCagr="10.97%"
              data={[
                { year: "2017", val: 9.8, label: "9.8k" },
                { year: "2018", val: 12.0, label: "12.0k" },
                { year: "2019", val: 15.4, label: "15.4k" },
                { year: "2022", val: 17.6, label: "17.6k" },
                { year: "2024", val: 19.1, label: "19.1k" },
                { year: "2026", val: 25, label: "25k+", expected: true },
              ]} 
            />

            <GrowthChart 
              title="REGISTRATIONS" 
              histCagr="20.27%" 
              expCagr="25.82%"
              data={[
                { year: "2017", val: 2.1, label: "2.1k" },
                { year: "2018", val: 2.5, label: "2.5k" },
                { year: "2019", val: 3.0, label: "3.0k" },
                { year: "2022", val: 6.8, label: "6.8k" },
                { year: "2024", val: 7.6, label: "7.6k" },
                { year: "2026", val: 10, label: "10k+", expected: true },
              ]} 
            />

          </div>
          
          <div className="absolute bottom-2 left-6 text-[8px] text-white/30 uppercase tracking-widest font-sans">*NOTE : ticket sales include both cetians and non cetians</div>
        </div>

      </div>
    </section>
  );
}
