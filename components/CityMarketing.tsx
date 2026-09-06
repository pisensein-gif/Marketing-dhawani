"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

const rateCardItems = [
  {
    title: "Digital Billboards",
    description: "High-impact video and static displays positioned at prime campus and city activation zones.",
    price: "Rs. 4,999",
    tag: "On-Ground",
  },
  {
    title: "Proshow Screen Advertising",
    description: "Prime stage screen placement during peak flagship concerts (8,000+ capacity crowd).",
    price: "Rs. 8,999",
    tag: "Main Stage",
  },
  {
    title: "Social Media Promotion",
    description: "1 Dedicated promotional Reel broadcasted across Dhwanilive and Dhwaniflea Instagram handles.",
    price: "Rs. 2,999",
    tag: "Digital",
  },
  {
    title: "Community Promotion",
    description: "Direct targeted video and poster broadcasts across official WhatsApp and student networks.",
    price: "Included",
    isIncluded: true,
    tag: "Network",
  },
  {
    title: "Additional Promotional Support",
    description: "Event announcements, campaign circulation, and campus ambassador amplification.",
    price: "Included",
    isIncluded: true,
    tag: "Amplify",
  },
];

const comboFeatures = [
  "Ads on Main Proshow Stage Screen",
  "Ads across Multiple Digital Billboards",
  "1 Dedicated Instagram Promotional Reel",
  "Direct WhatsApp and Campus Community Blast",
  "Complete Promotional Support and Amplification",
];

const targetCategories = [
  "Food & Beverage",
  "Fashion & Apparel",
  "Education & EdTech",
  "Technology",
  "Lifestyle & Fitness",
  "Automobile",
  "Retail & E-Commerce",
];

export default function CityMarketing() {
  return (
    <section id="city-marketing" className="bg-[#05020A] relative text-white py-24 md:py-32 border-t border-white/10 font-sans overflow-hidden">
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#8B12FF]/20 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-dhwani-gold text-xs uppercase tracking-[0.3em] font-semibold block mb-3">
              Media Rate Card & Opportunities
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-block uppercase tracking-tight text-white leading-none">
              CITY <span className="text-dhwani-gold">MARKETING</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-xl font-body leading-relaxed">
            Position your brand directly in front of tens of thousands across Trivandrum through on-ground digital displays, mainstage screens, and high-engagement digital channels.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Transparent A La Carte Rate Card (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4">

            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-3 md:p-5 divide-y divide-white/5 shadow-xl">
              {rateCardItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl hover:bg-white/[0.04] transition-colors duration-200"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h4 className="font-bold text-white text-base md:text-lg tracking-wide">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/5 text-white/60 border border-white/10">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>

                  <div className="shrink-0 text-left sm:text-right pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <span className={`text-xl md:text-2xl font-bold font-mono tracking-tight ${item.isIncluded ? 'text-emerald-400' : 'text-dhwani-gold'}`}>
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Combo & Bespoke Activations (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* All-in-One Combo Card */}
            <motion.div 
              className="bg-gradient-to-b from-[#140A26] to-[#0A0514] border border-dhwani-gold/40 rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              {/* Top Header */}
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-dhwani-gold block mb-1">
                    RECOMMENDED PACKAGE
                  </span>
                  <h3 className="text-2xl md:text-3xl font-block uppercase tracking-tight text-white">
                    DHWANI CITY COMBO
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-dhwani-gold/10 border border-dhwani-gold/30 flex items-center justify-center text-dhwani-gold">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Inclusions List */}
              <div className="space-y-3 mb-8">
                {comboFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/80 text-xs md:text-sm font-body">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/50 block font-semibold">
                    All-Inclusive Rate
                  </span>
                  <span className="text-3xl md:text-4xl font-bold font-mono text-white tracking-tight">
                    Rs. 10,999
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-dhwani-gold font-medium block">
                    Save on Bundle
                  </span>
                  <span className="text-[10px] text-white/40 block">
                    On-Ground + Stage + Social
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Custom Activations & Bespoke Partnerships Card */}
            <motion.div 
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">
                  Custom Brand Activations
                </h3>
                <ArrowUpRight className="w-5 h-5 text-white/40" />
              </div>

              <p className="text-white/60 text-xs md:text-sm font-body leading-relaxed mb-6">
                Looking for direct engagement? We design custom experiential marketing, product samplings, stall placements, and exclusive category sponsorships tailored to your target demographic.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {targetCategories.map((cat, i) => (
                  <span 
                    key={i}
                    className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-white/50 font-body">Tailored options for all budgets</span>
                <span className="text-dhwani-gold font-semibold uppercase tracking-wider">Contact Marketing Team &rarr;</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}