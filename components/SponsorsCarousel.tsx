"use client";

import React from "react";

export default function SponsorsCarousel() {
  const allSponsors = [
    "aiert.png", "artech.png", "berger.png", "club-fm.png", "fav-homes.png", 
    "gateforum.png", "heera.png", "hp.png", "kbfc.png", "kmv.png", "kseb.png", 
    "ksfe.png", "learn-ia.png", "logo-1.png", "logo-10.png", "logo-11.png", 
    "logo-12.png", "logo-2.png", "logo-3.png", "logo-4.png", "logo-5.png", 
    "logo-6.png", "logo-7.png", "logo-8.png", "logo-9.png", "lords-hospital.png", 
    "medimix.png", "paul-antony.png", "realme.png", "red-fm.png", "servo.png", 
    "ust.png", "veegaland.png", "vespa.png", "vodafone.png"
  ];
  
  // Split into two rows
  const mid = Math.ceil(allSponsors.length / 2);
  const row1Sponsors = allSponsors.slice(0, mid);
  const row2Sponsors = allSponsors.slice(mid);

  return (
    <section className="py-24 border-y border-dhwani-highlight/20 relative overflow-hidden bg-[#020004]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-cursive text-dhwani-accent text-4xl md:text-5xl lg:text-6xl mb-4">
            Previous Sponsors
          </h2>
          <div className="h-1 w-24 bg-dhwani-accent mx-auto rounded-full opacity-50"></div>
          <p className="text-dhwani-white/50 mt-6 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Trusted by industry leaders and top brands over the years.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex flex-col gap-6 overflow-x-hidden">
          {/* Fading edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020004] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020004] to-transparent z-10 pointer-events-none"></div>
          
          {/* Row 1 (Moving Left) */}
          <div className="animate-marquee flex gap-6 py-2 whitespace-nowrap w-max">
            {[...row1Sponsors, ...row1Sponsors].map((filename, index) => (
              <div 
                key={`r1-${index}`}
                className="w-48 h-24 bg-white border border-white flex items-center justify-center rounded-xl flex-shrink-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(255,255,255,0.2)] group overflow-hidden"
              >
                <img 
                  src={`/sponsors/${filename}`} 
                  alt={`Sponsor`} 
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            ))}
          </div>

          {/* Row 2 (Moving Right - Reverse animation) */}
          <div className="animate-marquee-reverse flex gap-6 py-2 whitespace-nowrap w-max">
            {[...row2Sponsors, ...row2Sponsors].map((filename, index) => (
              <div 
                key={`r2-${index}`}
                className="w-48 h-24 bg-white border border-white flex items-center justify-center rounded-xl flex-shrink-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(255,255,255,0.2)] group overflow-hidden"
              >
                <img 
                  src={`/sponsors/${filename}`} 
                  alt={`Sponsor`} 
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
