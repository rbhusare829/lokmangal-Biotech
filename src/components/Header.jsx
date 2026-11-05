import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sprout, TestTube2, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Header({ lang, setLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'mr' ? 'कंपनी परिचय' : 'About Us', href: '#about' },
    { name: lang === 'mr' ? 'उत्पादने' : 'Products', href: '#solutions' },
    { name: lang === 'mr' ? 'पिकनिहाय सल्ला' : 'Crop Guide', href: '#crop-guide' },
    { name: lang === 'mr' ? 'मोफत माती परीक्षण' : 'Soil & Water Testing', href: '#soil-testing', badge: 'मोफत' },
    { name: lang === 'mr' ? 'संशोधन व लॅब' : 'Research & Lab', href: '#research' },
    { name: lang === 'mr' ? 'उत्पादन क्षमता' : 'Manufacturing', href: '#manufacturing' },
    { name: lang === 'mr' ? 'संपर्क' : 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0D2E20]/95 backdrop-blur-md text-white shadow-2xl py-2.5 border-b border-[#70A95B]/30' 
        : 'bg-[#174D36] text-white py-3.5 shadow-lg'
    }`}>
      {/* Top Banner Bar */}
      <div className="hidden lg:block border-b border-white/10 pb-2 mb-2 text-xs text-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center font-medium">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C5DF83] animate-ping"></span>
              <span className="font-semibold text-white">लोकमंगल ग्रुपचा अग्रगण्य कृषी जैव-तंत्रज्ञान उपक्रम</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="text-emerald-200">वार्षिक क्षमता: ५०,००० मे.टन • सोलापूर व वडोदरा</span>
          </div>

          <div className="flex items-center space-x-5">
            <a href="tel:+912172355555" className="flex items-center gap-1.5 text-white hover:text-[#C5DF83] transition-colors font-semibold">
              <Phone className="w-3.5 h-3.5 text-[#C5DF83]" />
              <span>शेतकरी हेल्पलाइन: {companyInfo.contact.helpline}</span>
            </a>
            <span className="text-white/30">|</span>
            
            {/* Language Switcher with Smooth Toggle */}
            <div className="flex items-center bg-black/25 rounded-full p-0.5 border border-white/20">
              <button 
                onClick={() => setLang('mr')}
                className={`px-3 py-0.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'mr' ? 'bg-[#C5DF83] text-[#0D2E20] shadow-sm' : 'text-white/80 hover:text-white'
                }`}
              >
                मराठी
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-0.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'en' ? 'bg-[#C5DF83] text-[#0D2E20] shadow-sm' : 'text-white/80 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#C5DF83] via-[#70A95B] to-[#174D36] p-0.5 shadow-xl group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0D2E20] rounded-[14px] flex items-center justify-center">
              <Sprout className="w-7 h-7 text-[#C5DF83] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif">
                {lang === 'mr' ? 'लोकमंगल बायोटेक' : 'Lokmangal Biotech'}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-extrabold px-2 py-0.5 bg-[#C5DF83] text-[#0D2E20] rounded-md shadow-sm">
                Pvt. Ltd.
              </span>
            </div>
            <p className="text-[11px] text-[#C5DF83] font-semibold tracking-wide">
              {lang === 'mr' ? 'संतुलित पोषण • भरघोस उत्पादन • समृद्ध शेतकरी' : 'BALANCED NUTRITION & BIO-INNOVATION'}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3.5 py-1.5 rounded-xl text-sm font-semibold text-emerald-100 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="text-[10px] bg-[#D97706] text-white font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#soil-testing"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-[#C5DF83] border border-[#C5DF83]/50 transition-all hover:scale-105 shadow-sm"
          >
            <TestTube2 className="w-4 h-4 text-[#C5DF83]" />
            <span>{lang === 'mr' ? 'मोफत माती परीक्षण' : 'Free Lab Test'}</span>
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[#C5DF83] hover:bg-[#d8eea0] text-[#0D2E20] shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            {lang === 'mr' ? 'डीलर चौकशी' : 'Dealer Inquiry'}
          </a>
        </div>

        {/* Mobile controls: Lang button + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button 
            onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')}
            className="px-2.5 py-1 text-xs font-bold bg-white/15 text-[#C5DF83] rounded-lg border border-[#C5DF83]/40"
          >
            {lang === 'mr' ? 'EN' : 'मराठी'}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D2E20] border-t border-white/10 px-5 pt-4 pb-6 mt-3 shadow-2xl animate-fadeIn">
          <div className="space-y-1.5 font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold text-emerald-100 hover:text-white hover:bg-white/10"
              >
                <span>{link.name}</span>
                {link.badge ? (
                  <span className="text-[10px] bg-[#D97706] text-white font-extrabold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                )}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/15 flex flex-col gap-3">
            <a
              href="#soil-testing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider bg-white/10 text-[#C5DF83] border border-[#C5DF83]/50"
            >
              <TestTube2 className="w-4 h-4 text-[#C5DF83]" />
              <span>{lang === 'mr' ? 'मोफत माती व पाणी चाचणी नोंदणी' : 'Book Free Soil & Water Test'}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center px-4 py-3 rounded-xl text-sm font-extrabold uppercase tracking-wider bg-[#C5DF83] text-[#0D2E20] shadow-md"
            >
              {lang === 'mr' ? 'संपर्क व डीलर चौकशी' : 'Contact / Dealer Inquiry'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
