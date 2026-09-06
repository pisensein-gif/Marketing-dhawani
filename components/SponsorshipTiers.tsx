import React from "react";
import { Check } from "lucide-react";

export default function SponsorshipTiers() {
  const tiers = [
    {
      name: "Associate",
      price: "₹1L - ₹3L",
      features: [
        "Logo on Main Stage LED",
        "Social Media Mentions",
        "Stall Space (Standard)",
        "VIP Passes (x2)",
      ],
      isPopular: false,
    },
    {
      name: "Title Sponsor",
      price: "₹10L+",
      features: [
        "Naming Rights (Dhwani '26 powered by [Brand])",
        "Prime Logo Placement Everywhere",
        "Premium Stall Space",
        "Exclusive Stage Time",
        "VIP Passes (x10)",
        "Custom Brand Integration",
      ],
      isPopular: true,
    },
    {
      name: "Co-Sponsor",
      price: "₹5L - ₹8L",
      features: [
        "Logo on all Marketing Collateral",
        "Dedicated Social Media Campaign",
        "Stall Space (Premium)",
        "VIP Passes (x5)",
        "Event Specific Branding",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="sponsorship" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dhwani-white mb-6">
            Sponsorship <span className="text-dhwani-accent">Opportunities</span>
          </h2>
          <p className="text-dhwani-white/70 text-lg">
            Choose the perfect partnership tier to align your brand with our diverse, energetic audience. 
            Custom packages are also available upon request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 ${
                tier.isPopular ? "md:-mt-8 md:mb-8 scale-105 z-10" : "z-0"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dhwani-accent font-bold px-4 py-1 text-sm uppercase tracking-wider">
                  Crown Jewel
                </div>
              )}
              <h3 className="text-2xl font-bold text-dhwani-white mb-2">{tier.name}</h3>
              <div className="text-3xl font-black text-dhwani-accent mb-6">{tier.price}</div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-dhwani-white/80">
                    <Check size={20} className="text-dhwani-accent flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full font-bold transition-all ${
                tier.isPopular 
                  ? "bg-dhwani-accent text-dhwani-white hover:brightness-110" 
                  : "bg-transparent border border-dhwani-white/20 text-dhwani-white hover:bg-dhwani-white/10"
              }`}>
                Select Tier
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
