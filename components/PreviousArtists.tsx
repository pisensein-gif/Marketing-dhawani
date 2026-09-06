"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sreenathImages = [
  "/sreenath-bhasi/1.jpg",
  "/sreenath-bhasi/2.jpg",
  "/sreenath-bhasi/3.jpg",
  "/sreenath-bhasi/4.jpg",
  "/sreenath-bhasi/5.jpg",
  "/sreenath-bhasi/6.jpg",
];

export default function PreviousArtists() {
  const [sreenathIndex, setSreenathIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSreenathIndex((prevIndex) => (prevIndex + 1) % sreenathImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const pronites = [
    { name: "Sreenath Bhasi", isSlideshow: true },
    { name: "AGAM", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800" },
    { name: "Jonita Gandhi", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800" },
  ];

  const gridTop = [
    { name: "Benny Dayal", image: "/At dhwani/Benny dayal.png" },
    { name: "Shalmali", image: "/At dhwani/shalmali.webp" },
    { name: "Mohit chauhan", image: "/At dhwani/mohithchowhan.webp" },
    { name: "Baiju Dharmajan", image: "/At dhwani/Baiju Dharmajan.jpeg" },
  ];

  const gridBottom = [
    { name: "Thamarassery Churam", image: "/At dhwani/Thamarassery Churam.jpg" },
    { name: "Avial", image: "/At dhwani/Avial.webp" },
    { name: "Lagori", image: "/At dhwani/Lagori.avif" },
  ];

  return (
    <section id="artists" className="py-24 bg-[#080314] relative overflow-hidden text-dhwani-white border-t border-dhwani-highlight/20">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-32">
        
        <div className="flex flex-col gap-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px] mb-8">
            {pronites.map((artist, index) => (
              <motion.div 
                key={index}
                className="relative w-full h-[400px] md:h-full group overflow-hidden bg-dhwani-highlight/20 rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#080314] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-dhwani-accent/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {artist.isSlideshow ? (
                  <div className="relative w-full h-full">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={sreenathIndex}
                        src={sreenathImages[sreenathIndex]} 
                        alt="Sreenath Bhasi" 
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" 
                      />
                    </AnimatePresence>
                    
                    {/* Slideshow Progress Dots */}
                    <div className="absolute top-4 right-4 z-20 flex gap-1.5">
                      {sreenathImages.map((_, dotIdx) => (
                        <div 
                          key={dotIdx} 
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            dotIdx === sreenathIndex ? "w-6 bg-dhwani-gold" : "w-1.5 bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" 
                  />
                )}
                
                {/* Vertical Name */}
                <div className="absolute bottom-12 -left-6 transform -rotate-90 origin-bottom-left z-20">
                  <h3 className="text-3xl md:text-5xl font-sans font-light tracking-wider text-dhwani-white/70 group-hover:text-dhwani-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300">
                    {artist.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PRONITE Text Footer */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-dhwani-white/70 text-center md:text-left italic font-cursive text-xl">
              "Get yourself pumped for the breathtaking performances and be ready to experience exhilarating nights full of gaiety !"
            </p>
            
            <div className="flex flex-col md:flex-row items-end gap-8 md:gap-16">
              <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[120px] font-block leading-none tracking-tighter">
                PRONITE.
              </h1>
              <p className="text-dhwani-white/60 font-sans max-w-xl text-sm md:text-base leading-relaxed mb-2">
                ProNites are here to steal the spotlight as Dhwani turns every night into a celebration of music, energy and excitement. Dhwani creates moments that resonate long after the festival ends.
              </p>
            </div>
          </motion.div>
        </div>


        <div className="flex flex-col relative mt-24">

          <h2 className="text-4xl md:text-5xl font-block mb-16 tracking-tight">
            PREVIOUSLY AT <span className="text-dhwani-gold">DHWANI</span>
          </h2>

          <div className="relative w-full">
            
            {/* Dark Purple Pill Background Shape */}
            <div className="absolute top-[20%] bottom-[20%] left-[-10%] right-[-10%] bg-[#1A0B2E] rounded-[100px] z-0 opacity-80 blur-sm pointer-events-none"></div>

            {/* Grid Container */}
            <div className="flex flex-col gap-12 relative z-10">
              
              {/* Top Row (4 Artists) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {gridTop.map((artist, index) => (
                  <motion.div 
                    key={`top-${index}`}
                    className="flex flex-col items-center group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 relative shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080314] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-sans font-light tracking-wide group-hover:text-dhwani-gold transition-colors duration-300 text-center">
                      {artist.name}
                    </h3>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Row (3 Artists) Centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full md:w-3/4">
                  {gridBottom.map((artist, index) => (
                    <motion.div 
                      key={`bot-${index}`}
                      className="flex flex-col items-center group cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 relative shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080314] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
                        <img 
                          src={artist.image} 
                          alt={artist.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-sans font-light tracking-wide group-hover:text-dhwani-gold transition-colors duration-300 text-center">
                        {artist.name}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
