import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutDhwani from "@/components/AboutDhwani";
import Roadmap from "@/components/Roadmap";
import PreviousArtists from "@/components/PreviousArtists";
import LegacySection from "@/components/LegacySection";
import FlagshipEvents from "@/components/FlagshipEvents";
import Demographics from "@/components/Demographics";
import WhyCET from "@/components/WhyCET";
import DhwaniInitiatives from "@/components/DhwaniInitiatives";
import WhyDhwani from "@/components/WhyDhwani";
import CampaignStrategy from "@/components/CampaignStrategy";
import SponsorsCarousel from "@/components/SponsorsCarousel";
import MarketingProposal from "@/components/MarketingProposal";
import ReturnOnInvestment from "@/components/ReturnOnInvestment";
import CityMarketing from "@/components/CityMarketing";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#2D165E] via-[#020004] to-[#080314] text-foreground min-h-screen font-sans selection:bg-dhwani-accent selection:text-dhwani-white overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />
        <AboutDhwani />
        <Roadmap />
        <PreviousArtists />
        <LegacySection />
        <FlagshipEvents />
        <Demographics />
        <WhyCET />
        <WhyDhwani />
        <DhwaniInitiatives />
        <CampaignStrategy />
        <SponsorsCarousel />
        <MarketingProposal />
        <CityMarketing />
        <ReturnOnInvestment />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
