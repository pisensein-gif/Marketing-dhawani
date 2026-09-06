"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const events = [
  { id: 1, title: "Anthara", img: "/flagship/Anthara.jpg" },
  { id: 2, title: "Fashion Show", img: "/flagship/fs.jpg" },
  { id: 3, title: "Informals", img: "/flagship/INFORMALS.png" },
  { id: 4, title: "Khelolsav", img: "/flagship/khelolsav.jpg" },
  { id: 5, title: "Nadandha", img: "/flagship/nadandha.jpg" },
  { id: 6, title: "Rangam", img: "/flagship/rangam.jpg" },
];

export default function FlagshipEvents() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const numCards = events.length;
  const angle = 360 / numCards;

  const nextSlide = () => {
    setRotation((prev) => prev - angle);
    setActiveIndex((prev) => (prev + 1) % numCards);
  };

  const prevSlide = () => {
    setRotation((prev) => prev + angle);
    setActiveIndex((prev) => (prev - 1 + numCards) % numCards);
  };

  const startInteractionTimeout = () => {
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 5000); // Resume auto play after 5 seconds of no interaction
  };

  useEffect(() => {
    if (isInteracting) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(timer);
  }, [isInteracting]);

  return (
    <section className="py-12 md:py-24 bg-[#05020A] relative overflow-hidden text-dhwani-white border-t border-dhwani-highlight/20 min-h-[60vh] md:min-h-[90vh] flex flex-col items-center justify-center">
      
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_#A60058_0%,_transparent_60%)] mix-blend-screen blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-4 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-block tracking-tighter mb-4 uppercase text-white drop-shadow-2xl">
              FLAGSHIP EVENTS
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-dhwani-gold to-dhwani-accent rounded-full mx-auto"></div>
          </motion.div>
        </div>

        {/* 3D Carousel Container */}
        <motion.div 
          className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center mt-2 md:mt-4 cursor-grab active:cursor-grabbing touch-pan-y"
          style={{ perspective: "1500px" }}
          onPanStart={() => {
            setIsInteracting(true);
            if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
          }}
          onPan={(e, info) => {
            setRotation((prev) => {
              const newRot = prev + info.delta.x * 0.4; // 0.4 is sensitivity
              let newIndex = Math.round(-newRot / angle) % numCards;
              if (newIndex < 0) newIndex += numCards;
              setActiveIndex(newIndex);
              return newRot;
            });
          }}
          onPanEnd={() => {
            // Snap to the nearest card precisely
            setRotation((prev) => {
              const snapRot = Math.round(prev / angle) * angle;
              let newIndex = Math.round(-snapRot / angle) % numCards;
              if (newIndex < 0) newIndex += numCards;
              setActiveIndex(newIndex);
              return snapRot;
            });
            startInteractionTimeout();
          }}
        >
          {/* Tilted wrapper for top-down 3D ring view */}
          <div 
            className="relative flex justify-center items-center w-full h-full" 
            style={{ transformStyle: "preserve-3d", transform: "rotateX(-12deg) translateY(-20px)" }}
          >
            <motion.div
              className="relative w-32 sm:w-40 md:w-56 lg:w-64 aspect-[3/4] flex justify-center items-center"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: rotation }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              {events.map((event, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={event.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out rounded-2xl overflow-hidden border-2 flex flex-col bg-[#100823]
                      ${isActive 
                        ? 'border-dhwani-gold shadow-[0_0_50px_rgba(255,215,0,0.6)] opacity-100 z-50' 
                        : 'border-white/10 opacity-30 blur-[3px] z-10'
                      }`}
                    style={{
                      transform: `rotateY(${i * angle}deg) translateZ(clamp(140px, 25vw, 350px)) ${isActive ? 'scale(1.4)' : 'scale(1)'}`,
                    }}
                  >
                    <div className="w-full h-full relative group">
                      <img 
                        src={event.img} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/400x300/100823/FFD700?text=${event.title.replace(' ', '+')}` }} 
                      />
                      
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                      
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-2 opacity-0 animate-[slideUp_0.5s_ease-out_forwards] animation-delay-300">
                          <h3 className="font-block text-sm md:text-xl text-dhwani-gold text-center tracking-wider leading-tight">{event.title}</h3>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
        
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
