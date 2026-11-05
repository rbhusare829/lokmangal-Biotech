import React from 'react';
import { Sprout, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Footer({ lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2419] text-white pt-16 pb-12 border-t border-[#70A95B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 font-semibold">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C5DF83] to-[#70A95B] flex items-center justify-center text-[#0D2E20] shadow-lg">
                <Sprout className="w-7 h-7" />
              </div>
              <div>
                <span className="text-2xl font-bold font-serif text-white">
                  {lang === 'mr' ? 'लोकमंगल बायोटेक' : 'Lokmangal Biotech'}
                </span>
                <span className="text-xs block text-[#C5DF83] font-extrabold uppercase tracking-wider">
                  प्रा. लि. • स्थापना २००६
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              {lang === 'mr'
                ? 'लोकमंगल समूहाचा अग्रगण्य कृषी जैव-तंत्रज्ञान उपक्रम. संतुलित पोषण, दर्जेदार विद्राव्य खते, जैविक औषधे आणि मोफत माती चाचणीद्वारे शेतकरी समृद्धीसाठी अविरत कटिबद्ध.'
                : 'A flagship agro-biotechnology enterprise of Lokmangal Group, committed to balanced soil nutrition, scientific crop protection, and sustainable agricultural prosperity across India.'}
            </p>

            <div className="pt-2 text-xs text-emerald-200 space-y-1">
              <p>
                <strong className="text-white">{lang === 'mr' ? 'संस्थापक अध्यक्ष:' : 'Founder Chairman:'}</strong> {lang === 'mr' ? companyInfo.founder.nameMarathi : companyInfo.founder.name}
              </p>
              <p className="text-white/60 text-[11px]">
                {lang === 'mr' ? companyInfo.founder.formerTitleMarathi : companyInfo.founder.formerTitle}
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#C5DF83] font-devanagari">
              {lang === 'mr' ? 'महत्त्वाचे दुवे' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-emerald-100/80 font-bold">
              <li><a href="#about" className="hover:text-[#C5DF83] transition-colors">{lang === 'mr' ? 'कंपनी परिचय' : 'About Lokmangal'}</a></li>
              <li><a href="#solutions" className="hover:text-[#C5DF83] transition-colors">{lang === 'mr' ? 'उत्पादन शृंखला' : 'Product Catalog'}</a></li>
              <li><a href="#crop-guide" className="hover:text-[#C5DF83] transition-colors">{lang === 'mr' ? 'पिक सल्ला वेळापत्रक' : 'Crop Schedules'}</a></li>
              <li><a href="#soil-testing" className="hover:text-[#C5DF83] transition-colors">{lang === 'mr' ? 'मोफत माती व पाणी चाचणी' : 'Free Soil Testing Lab'}</a></li>
              <li><a href="#manufacturing" className="hover:text-[#C5DF83] transition-colors">{lang === 'mr' ? 'सोलापूर व वडोदरा प्लँट' : 'Manufacturing Plants'}</a></li>
              <li><a href="#contact" className="hover:text-[#C5DF83] transition-colors">{lang === 'mr' ? 'संपर्क व डीलरशिप' : 'Contact & Dealers'}</a></li>
            </ul>
          </div>

          {/* Col 3: Key Formulations */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#C5DF83] font-devanagari">
              {lang === 'mr' ? 'प्रमुख उत्पादने' : 'Key Formulations'}
            </h4>
            <ul className="space-y-2 text-emerald-100/80 font-semibold">
              <li><a href="#solutions" className="hover:text-[#C5DF83] transition-colors">मॅग्नेट Ca+Mg+S (१०:०५:१०)</a></li>
              <li><a href="#solutions" className="hover:text-[#C5DF83] transition-colors">कृषी वरदान (१८:१८:१० व २०:२०:००)</a></li>
              <li><a href="#solutions" className="hover:text-[#C5DF83] transition-colors">फास्टर १००% विद्राव्य (१९:१९:१९, ००:५२:३४)</a></li>
              <li><a href="#solutions" className="hover:text-[#C5DF83] transition-colors">कॅनॉन कॅल्शियम नायट्रेट</a></li>
              <li><a href="#solutions" className="hover:text-[#C5DF83] transition-colors">लान्सर सूक्ष्म अन्नद्रव्ये व झिंक-१२</a></li>
              <li><a href="#solutions" className="hover:text-[#C5DF83] transition-colors">चॅम्पियन सेंद्रिय खत व नीम पावडर</a></li>
              <li><a href="#solutions" className="hover:text-[#C5DF83] transition-colors">ॲक्शन व बेन-१० जैविक कीटकनाशक</a></li>
            </ul>
          </div>

          {/* Col 4: Group Entities */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#C5DF83] font-devanagari">
              {lang === 'mr' ? 'लोकमंगल समूह' : 'Lokmangal Group'}
            </h4>
            <ul className="space-y-2 text-emerald-100/80 font-semibold">
              <li>लोकमंगल को-ऑप. बँक लि.</li>
              <li>लोकमंगल ॲग्रो (३ साखर कारखाने)</li>
              <li>लोकमंगल डेअरी प्रॉडक्ट्स लि.</li>
              <li>लोकमंगल कृषी व उद्यानविद्या महाविद्यालय</li>
              <li>७० मेगावॅट को-जनरेशन व इथेनॉल</li>
              <li>महाराष्ट्र संशोधन व विकास केंद्र</li>
              <li>लोकमंगल फाउंडेशन (सामाजिक कार्य)</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Back to top + copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/80 font-bold">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} लोकमंगल बायोटेक प्रा. लि. सर्व हक्क राखीव. | FCO व महाराष्ट्र शासन खत नियंत्रण कायद्यानुसार प्रमाणित.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#C5DF83] transition-colors text-xs font-extrabold"
          >
            <span>{lang === 'mr' ? 'वर जा' : 'Back to Top'}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
