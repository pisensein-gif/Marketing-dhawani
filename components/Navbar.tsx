"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Sponsorship", href: "#sponsorship" },
  { name: "Artists", href: "#artists" },
  { name: "Demographics", href: "#demographics" },
  { name: "Contact", href: "#contact" },
];

function smoothScrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => smoothScrollTo(href), 100);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#080314]/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <Image src="/dhwani_logo.png" alt="Dhwani Logo" width={36} height={36} className="w-8 h-auto object-contain" />
            <Image src="/Dhwani_text.png" alt="Dhwani Text" width={100} height={40} className="h-7 w-auto object-contain mt-1" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-dhwani-white/70 hover:text-white transition-colors font-medium text-xs lg:text-sm uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-dhwani-gold group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 lg:px-6 bg-dhwani-accent text-white font-semibold rounded-full text-xs lg:text-sm hover:brightness-125 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              Sponsor Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <div className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-[#0c0620] border-l border-white/10 flex flex-col shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Image src="/dhwani_logo.png" alt="Dhwani" width={32} height={32} className="w-8 h-auto" />
                  <Image src="/Dhwani_text.png" alt="Dhwani Text" width={90} height={36} className="h-6 w-auto mt-1" />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-white/80 hover:text-white hover:bg-white/10 font-medium text-base uppercase tracking-wider py-4 px-4 rounded-xl transition-all border-b border-white/5 flex items-center justify-between group"
                  >
                    {link.name}
                    <ChevronDown size={16} className="text-white/30 -rotate-90 group-hover:text-dhwani-gold transition-colors" />
                  </motion.button>
                ))}
              </nav>

              {/* Sponsor CTA */}
              <div className="px-6 py-6 border-t border-white/10">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-4 bg-dhwani-accent text-white font-bold text-base rounded-2xl hover:brightness-125 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300"
                >
                  🎵 Sponsor Dhwani '26
                </motion.button>
                <p className="text-white/30 text-xs text-center mt-3">Kerala's Largest Cultural Fest</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
