import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SolutionsSection from './components/SolutionsSection';
import CropAdvisorySection from './components/CropAdvisorySection';
import ResearchLabSection from './components/ResearchLabSection';
import WhyChooseUs from './components/WhyChooseUs';
import SustainabilitySection from './components/SustainabilitySection';
import ManufacturingNetworkSection from './components/ManufacturingNetworkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from './data/company';

export default function App() {
  const [lang, setLang] = useState('mr'); // Default to Marathi for local farmers & Maharashtrian stakeholders

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F5] text-[#17251D] font-devanagari">
      {/* Fixed Sticky Header with Marathi / English toggle */}
      <Header lang={lang} setLang={setLang} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero lang={lang} />

        {/* 2. About Us & Founder Vision */}
        <AboutSection lang={lang} />

        {/* 3. Our Solutions / Products (Mahadhan + Yara + Haifa) */}
        <SolutionsSection lang={lang} />

        {/* 4. Crop-Wise Advisory & Nutrition Schedules (Aries Agro) */}
        <CropAdvisorySection lang={lang} />

        {/* 5. Research, Laboratory & Free Soil/Water Testing (Multiplex & IPL) */}
        <ResearchLabSection lang={lang} />

        {/* 6. Why Choose Us (4 Pillars) */}
        <WhyChooseUs lang={lang} />

        {/* 7. Sustainability & Farmer Success Stories (Jaipur Bio) */}
        <SustainabilitySection lang={lang} />

        {/* 8. Manufacturing Scale & Multi-State Depots */}
        <ManufacturingNetworkSection lang={lang} />

        {/* 9. Contact & Free Soil Testing Booking Form */}
        <ContactSection lang={lang} />
      </main>

      {/* 10. Comprehensive Corporate Footer */}
      <Footer lang={lang} />

      {/* Floating Quick Action Widget for Farmers with Pulsing Wave Animation */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5">
        <a
          href="https://wa.me/919422000000?text=Namaskar%20Lokmangal%20Biotech%20Team"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-ring relative group"
          title="व्हॉट्सॲपवर संपर्क साधा"
          aria-label="WhatsApp Helpline"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            व्हॉट्सॲपवर थेट बोला
          </span>
        </a>

        <a
          href="tel:+912172355555"
          className="w-14 h-14 rounded-full bg-[#0D2E20] text-[#C5DF83] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-[#C5DF83]/50 relative group"
          title="शेतकरी हेल्पलाइन"
          aria-label="Kisan Helpline"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/85 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            शेतकरी हेल्पलाइन: {companyInfo.contact.helpline}
          </span>
        </a>
      </div>
    </div>
  );
}
