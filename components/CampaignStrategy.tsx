"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper components for Icons (Line art style)
const IconWrapper = ({ children, label }: { children: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 flex items-center justify-center">
      {children}
    </div>
    <span className="text-[10px] md:text-xs font-sans text-dhwani-white/70 uppercase tracking-widest text-center h-8">
      {label}
    </span>
  </div>
);

// SVG Line Art Icons
const SocialMediaIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" /><path d="M8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8" /><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>;
const WebsiteIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 22H16" /><path d="M12 18V22" /><path d="M3 8H21" /><circle cx="6" cy="6" r="0.5" fill="currentColor"/></svg>;
const PressIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M4 22H20C21.1 22 22 21.1 22 20V8L16 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22Z" /><path d="M16 2V8H22" /><path d="M6 14H18" /><path d="M6 18H14" /><path d="M6 10H8" /></svg>;
const NewsletterIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M3 8L12 14L21 8" /><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10V18H21V10" /></svg>;
const TalksIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.6099 20 9.29344 19.6896 8.13295 19.136L3 21L4.54228 16.377C3.56149 15.0116 3 13.3273 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" /><path d="M8 10H16" /><path d="M8 14H13" /></svg>;
const AmbassadorIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><circle cx="12" cy="7" r="4" /><path d="M5.5 21H18.5C19.8807 21 21 19.8807 21 18.5V17C21 15.3431 19.6569 14 18 14H6C4.34315 14 3 15.3431 3 17V18.5C3 19.8807 4.11929 21 5.5 21Z" /><path d="M16 11L18 9L20 11" /><path d="M4 11L6 9L8 11" /></svg>;

const VideoIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M10 9L15 12L10 15V9Z" /><path d="M2 8H22" /><path d="M2 16H22" /><path d="M6 4V20" /><path d="M18 4V20" /></svg>;
const AdsIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10H16" /><path d="M8 14H12" /><circle cx="18" cy="6" r="4" fill="#080314" /><text x="18" y="8" fontSize="8" textAnchor="middle" fill="currentColor">$</text></svg>;
const BannersIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M7 16V22" /><path d="M17 16V22" /><path d="M3 8H21" /></svg>;
const HandbookIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" /><path d="M6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5C4 3.11929 5.11929 2 6.5 2Z" /><path d="M12 6V12L14 10L16 12V6" /></svg>;
const StallsIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M3 9L4 4H20L21 9V11H3V9Z" /><path d="M5 11V20H19V11" /><path d="M9 11V20" /><path d="M15 11V20" /><path d="M7 4V9" /><path d="M12 4V9" /><path d="M17 4V9" /></svg>;
const HospitalityIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" /><path d="M12 15C7.58172 15 4 18.5817 4 23H20C20 18.5817 16.4183 15 12 15Z" /><path d="M15 17L18 20L21 17" /></svg>;

const AfterMovieIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M4 6L20 2L21 6L5 10L4 6Z" /><path d="M8 5L9 9" /><path d="M13 4L14 8" /><path d="M18 3L19 7" /><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M10 13L15 16L10 19V13Z" /></svg>;
const DatabaseIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12" /><path d="M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5" /><path d="M16 14C16 15.6569 17.7909 17 20 17C22.2091 17 24 15.6569 24 14C24 12.3431 22.2091 11 20 11C17.7909 11 16 12.3431 16 14Z" /><path d="M20 17L22 19" /></svg>;
const BrochureIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M5 4C5 4 7.5 3 12 5C16.5 7 19 6 19 6V20C19 20 16.5 21 12 19C7.5 17 5 18 5 18V4Z" /><path d="M12 5V19" /><path d="M8 8H9" /><path d="M8 12H9" /><path d="M15 10H16" /><path d="M15 14H16" /></svg>;
const CertificateIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" /><path d="M14 2V8H20" /><circle cx="12" cy="14" r="3" /><path d="M10.5 16.5L9 20L12 18.5L15 20L13.5 16.5" /></svg>;
const MerchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M6 5L8 2H16L18 5" /><path d="M3 5H21L19 22H5L3 5Z" /><path d="M12 10L14 14H10L12 10Z" /></svg>; // Represented as a bag/shirt hybrid
const SouvenirIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V20" /><path d="M4 14H20" /><path d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8" /><path d="M10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4" /></svg>;


// Data structure for the interactive tabs
type TabKey = "pre" | "during" | "post";

const strategyData = {
  pre: {
    id: "pre",
    titlePrefix: "PRE-",
    titleSuffix: "DHWANI.",
    description: "Flagship flashmobs, campus roadshows, & the highly anticipated Sargam (CET Kalolsavam) unleash an explosive wave of energy, puling massive crowds and building an unmatched pre-fest hype across the state.",
    digital: {
      title: "DIGITAL OUTREACH",
      icons: [{ label: "social media", icon: <SocialMediaIcon /> }, { label: "websites, apps & tickets", icon: <WebsiteIcon /> }],
      text: "Viral social media teasers and seamless online registration drives launch early."
    },
    print: {
      title: "PRINT & PR",
      icons: [{ label: "press release", icon: <PressIcon /> }, { label: "news letter", icon: <NewsletterIcon /> }],
      text: "Press conferences and local media releases maximize city-wide event anticipation."
    },
    ground: {
      title: "ON-GROUND",
      icons: [{ label: "talks", icon: <TalksIcon /> }, { label: "campus ambassador", icon: <AmbassadorIcon /> }],
      text: "Vibrant college roadshows secure multi-campus student participation and brand visibility"
    }
  },
  during: {
    id: "during",
    titlePrefix: "DURING-",
    titleSuffix: "DHWANI.",
    description: "Dhwani unites cultural nights, celebrity shows, competitions, sports, and interactive zones, drawing crowds nationwide with high youth engagement and visibility.",
    digital: {
      title: "DIGITAL OUTREACH",
      icons: [{ label: "video footages", icon: <VideoIcon /> }, { label: "pronite ads", icon: <AdsIcon /> }],
      text: "Live streaming, real-time artist content, and high impact digital ads run continuously."
    },
    print: {
      title: "PRINT & PR",
      icons: [{ label: "banners", icon: <BannersIcon /> }, { label: "handbooks", icon: <HandbookIcon /> }],
      text: "Special festival editions, daily event catalogs, and schedules keep attendees informed."
    },
    ground: {
      title: "ON-GROUND",
      icons: [{ label: "stalls", icon: <StallsIcon /> }, { label: "hospitality", icon: <HospitalityIcon /> }],
      text: "Interactive promotional stalls, sponsor hubs, and dedicated hospitality lounges manage thousands daily."
    }
  },
  post: {
    id: "post",
    titlePrefix: "POST-",
    titleSuffix: "DHWANI.",
    description: "High-quality aftermovies, victory highlights, and feedback loops sustain engagement long after the final curtain falls",
    digital: {
      title: "DIGITAL OUTREACH",
      icons: [{ label: "after movie", icon: <AfterMovieIcon /> }, { label: "databases", icon: <DatabaseIcon /> }],
      text: "Cinematic aftermovies and digital appreciation posts extend online visibility for weeks... And large set of kerala widde-student community data."
    },
    print: {
      title: "PRINT & PR",
      icons: [{ label: "brochures", icon: <BrochureIcon /> }, { label: "certificates", icon: <CertificateIcon /> }],
      text: "Post-event media coverage highlights winner lists and festival success stories."
    },
    ground: {
      title: "ON-GROUND",
      icons: [{ label: "merch", icon: <MerchIcon /> }, { label: "souvenir", icon: <SouvenirIcon /> }],
      text: "Official merchandise distribution and souvenir sales wrap up the festival experience"
    }
  }
};

export default function CampaignStrategy() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("pre");
  const data = strategyData[activeTab];

  return (
    <section className="bg-[#05020A] relative overflow-hidden text-dhwani-white py-24 min-h-screen flex flex-col items-center justify-center border-t border-dhwani-highlight/20 font-sans">
      
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[#0B0616] mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A0B2E]/50 via-transparent to-transparent blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-dhwani-accent/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-6xl">
        
        {/* Header and Tabs */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-block text-center mb-12 uppercase tracking-widest drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Campaign Strategy
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10 shadow-xl">
            {(["pre", "during", "post"] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-full text-sm md:text-base font-block uppercase tracking-widest transition-colors duration-300 ${
                  activeTab === tab ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-dhwani-highlight to-dhwani-accent rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{strategyData[tab].titlePrefix}DHWANI</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Box Grid */}
        <div className="relative min-h-[500px] lg:min-h-[600px] w-full pb-12 lg:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative lg:absolute lg:inset-0 w-full grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              
              {/* Main Info Card (Spans full width on mobile, 4 cols on desktop) */}
              <div className="lg:col-span-4 bg-gradient-to-br from-[#180A30] to-[#0D0518] rounded-[40px] p-8 md:p-10 border border-[#2A1045] shadow-2xl flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-dhwani-gold/5 rounded-full blur-[80px] group-hover:bg-dhwani-gold/10 transition-colors duration-500"></div>
                <h3 className="text-4xl md:text-5xl font-block mb-6 leading-none">
                  <span className="text-white block">{data.titlePrefix}</span>
                  <span className="text-dhwani-gold">{data.titleSuffix}</span>
                </h3>
                <p className="font-sans text-white/70 text-sm md:text-base leading-relaxed relative z-10">
                  {data.description}
                </p>
              </div>

              {/* Channels Container (Spans 8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Digital Outreach (Wide Bento) */}
                <div className="md:col-span-2 bg-white/5 backdrop-blur-md rounded-[40px] p-8 border border-white/10 hover:border-dhwani-highlight/50 hover:bg-white/10 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8 group">
                  <div className="md:w-1/2">
                    <h4 className="font-block text-2xl text-white mb-4 drop-shadow-md tracking-wider">
                      {data.digital.title}
                    </h4>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">
                      {data.digital.text}
                    </p>
                  </div>
                  <div className="flex gap-6 justify-center md:justify-end md:w-1/2">
                    {data.digital.icons.map((iconData, i) => (
                      <div key={i} className="group-hover:scale-110 group-hover:text-dhwani-highlight transition-transform duration-300">
                        <IconWrapper label={iconData.label}>{iconData.icon}</IconWrapper>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Print & PR (Square Bento) */}
                <div className="bg-gradient-to-tr from-[#1A0B2E] to-[#2D165E] rounded-[40px] p-8 border border-white/10 hover:shadow-[0_0_30px_rgba(139,18,255,0.3)] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <h4 className="font-block text-xl text-white mb-4 drop-shadow-md tracking-wider">
                      {data.print.title}
                    </h4>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">
                      {data.print.text}
                    </p>
                  </div>
                  <div className="flex gap-6 mt-8 justify-center">
                    {data.print.icons.map((iconData, i) => (
                      <div key={i} className="text-dhwani-gold group-hover:-translate-y-2 transition-transform duration-300">
                        <IconWrapper label={iconData.label}>{iconData.icon}</IconWrapper>
                      </div>
                    ))}
                  </div>
                </div>

                {/* On-Ground (Square Bento) */}
                <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <h4 className="font-block text-xl text-white mb-4 drop-shadow-md tracking-wider">
                      {data.ground.title}
                    </h4>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">
                      {data.ground.text}
                    </p>
                  </div>
                  <div className="flex gap-6 mt-8 justify-center">
                    {data.ground.icons.map((iconData, i) => (
                      <div key={i} className="text-white group-hover:-translate-y-2 transition-transform duration-300">
                        <IconWrapper label={iconData.label}>{iconData.icon}</IconWrapper>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
