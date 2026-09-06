import React from "react";
import { Camera, Globe, Mail, Phone, MessageSquare, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-dhwani-accent font-bold text-2xl tracking-tighter mb-4">
              Dhwani &apos;26
            </h2>
            <div className="w-12 h-0.5 bg-dhwani-accent/50 mb-6"></div>
            <p className="text-dhwani-white/60 text-sm">
              South India&apos;s largest cultural extravaganza.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-dhwani-white font-bold text-lg mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-4 text-dhwani-white/70">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-dhwani-accent flex-shrink-0" />
                <span className="text-sm">+91 00000 00000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-dhwani-accent flex-shrink-0" />
                <span className="text-sm">hello@dhwanicet.org</span>
              </div>
            </div>
            <div className="w-16 h-0.5 bg-dhwani-white/10 mt-6"></div>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="text-dhwani-white font-bold text-lg mb-4 uppercase tracking-wider">Socials</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {[Camera, Globe, MessageSquare, Users].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-dhwani-white/20 flex items-center justify-center text-dhwani-white/60 hover:bg-dhwani-accent hover:text-dhwani-white hover:border-dhwani-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="w-full h-0.5 bg-dhwani-white/10 mt-2"></div>
            <div className="w-2/3 h-0.5 bg-dhwani-white/10 mt-2"></div>
          </div>

          {/* Column 4: T&C */}
          <div>
            <h3 className="text-dhwani-white font-bold text-lg mb-4 uppercase tracking-wider">T&C</h3>
            <ul className="space-y-3 text-dhwani-white/70 text-sm">
              <li><a href="#" className="hover:text-dhwani-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-dhwani-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-dhwani-accent transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-dhwani-highlight/30 pt-8 flex flex-col md:flex-row items-center justify-between text-dhwani-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Dhwani CET. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Impact</p>
        </div>
      </div>
    </footer>
  );
}
