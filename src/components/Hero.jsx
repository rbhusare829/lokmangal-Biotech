import React from 'react';
import { ArrowRight, Sparkles, TestTube2, CheckCircle2, Award, Zap, TrendingUp } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Hero({ lang }) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-[#0D2E20]">
      {/* Background Photography with Rich Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85"
          alt="Lush green agriculture field at sunrise"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 hover:scale-100 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2E20] via-[#174D36]/90 to-[#0D2E20]/80"></div>
        {/* Soft decorative glow orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#70A95B]/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C5DF83]/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Copy with Strong Devanagari Fonts */}
          <div className="lg:col-span-8 text-white space-y-6">
            
            {/* Super Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5DF83]/50 backdrop-blur-md shadow-md">
              <Sparkles className="w-4 h-4 text-[#C5DF83] animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-[#C5DF83]">
                {lang === 'mr' 
                  ? 'लोकमंगल बायोटेक • संतुलित पोषण व शाश्वत कृषी समृद्धी'
                  : 'Lokmangal Bio-Tech • Pioneer of Balanced Soil Nutrition'}
              </span>
            </div>

            {/* Bold Devanagari Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight font-devanagari">
              {lang === 'mr' ? (
                <>
                  संतुलित पोषण आणि <span className="text-[#C5DF83] underline decoration-[#70A95B]/80 decoration-wavy decoration-2">जैव-तंत्रज्ञानाद्वारे</span> शेतकरी बांधवांचे भरघोस उत्पादन!
                </>
              ) : (
                <>
                  Pioneering <span className="text-[#C5DF83] italic underline decoration-[#70A95B]/80 decoration-wavy decoration-2">Biotechnology</span> & Balanced Nutrition for Higher Crop Yields
                </>
              )}
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-emerald-100/95 max-w-2xl leading-relaxed font-semibold">
              {lang === 'mr' 
                ? 'केवळ युरिया किंवा रासायनिक खतांच्या अतिवापराने जमिनी खारवट व कडक होत आहेत. लोकमंगल बायोटेकचे दुय्यम अन्नद्रव्ये (मॅग्नेट Ca:Mg:S), १००% विद्राव्य खते (फास्टर), सेंद्रिय खते आणि मोफत माती परीक्षण प्रयोगशाळा देते हमखास २० ते ३०% अधिक उत्पादन!'
                : 'Excess chemical NPK depletes soil into salinity. Lokmangal Bio-Tech introduces science-backed Secondary Nutrients (Magnet Ca:Mg:S), Water-Soluble Fertilizers (Faster), Bio-Pesticides, and 100% Free Soil & Water Testing to deliver a proven 20% to 30% yield surge.'}
            </p>

            {/* Value Proposition Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-bold text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-emerald-100 bg-white/10 border border-white/15 px-3.5 py-2.5 rounded-xl backdrop-blur-md shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C5DF83] shrink-0" />
                <span>{lang === 'mr' ? '२०-३०% सरासरी उत्पादन वाढ' : '30% Proven Yield Boost'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-emerald-100 bg-white/10 border border-white/15 px-3.5 py-2.5 rounded-xl backdrop-blur-md shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C5DF83] shrink-0" />
                <span>{lang === 'mr' ? '५०,००० मे.टन वार्षिक क्षमता' : '50,000 MT Annual Scale'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-emerald-100 bg-white/10 border border-white/15 px-3.5 py-2.5 rounded-xl backdrop-blur-md shadow-sm col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C5DF83] shrink-0" />
                <span>{lang === 'mr' ? '१००% मोफत माती परीक्षण' : 'Free Lab Soil Testing'}</span>
              </div>
            </div>

            {/* CTA Buttons with Smooth Animations */}
            <div className="flex flex-wrap gap-4 pt-3">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5DF83] hover:bg-[#d8eea0] text-[#0D2E20] font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 shine-effect"
              >
                <span>{lang === 'mr' ? 'उत्पादने पहा' : 'Explore Products'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#soil-testing"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <TestTube2 className="w-4 h-4 text-[#C5DF83]" />
                <span>{lang === 'mr' ? 'मोफत माती परीक्षण नोंदवा' : 'Book Free Soil Test'}</span>
              </a>

              <a
                href="#crop-guide"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-emerald-200 hover:text-white font-bold text-sm sm:text-base underline underline-offset-4 decoration-[#70A95B] hover:decoration-[#C5DF83] transition-colors"
              >
                <span>{lang === 'mr' ? 'पिकनिहाय खत वेळापत्रक' : 'Crop Schedules'}</span>
              </a>
            </div>

          </div>

          {/* Right Floating Editorial Feature Card with Real Image Preview */}
          <div className="lg:col-span-4">
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-7 text-white shadow-2xl space-y-5 animate-float">
              
              {/* Product Visual Header */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-white/20 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
                  alt="Magnet Calcium Magnesium Sulphur granular fertilizer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D97706] text-white text-[11px] font-extrabold uppercase shadow-sm">
                    {lang === 'mr' ? 'प्रमुख संशोधन' : 'Flagship Innovation'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-extrabold text-white">
                      मॅग्नेट (Magnet Ca+Mg+S)
                    </h3>
                    <p className="text-xs font-semibold text-[#C5DF83]">
                      दुय्यम अन्नद्रव्ये १०:०५:१० • ग्रॅन्युल व पावडर
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Quote */}
              <p className="text-xs sm:text-sm text-emerald-100 italic leading-relaxed font-medium">
                {lang === 'mr'
                  ? '"केवळ NPK वापरल्याने जमिनी खारवट झाल्या. आमच्या शास्त्रज्ञांनी मॅग्नेट विकसित केले, जे NPK खतांचे शोषण दुप्पट करून २०-३०% भरघोस उत्पादन देते."'
                  : '"Farmers using NPK major nutrients alone experienced falling yields and salty land. Our scientists created Magnet (10:05:10) to catalyze NPK absorption and guarantee 20-30% yield boost."'}
              </p>

              {/* Visual Breakdown Chips */}
              <div className="space-y-2 text-xs font-semibold">
                <div className="flex justify-between items-center bg-black/25 px-3 py-2 rounded-xl border border-white/10">
                  <span className="font-bold text-[#C5DF83]">कॅल्शियम (Ca)</span>
                  <span className="text-emerald-100">{lang === 'mr' ? 'पेशी विभाजन दुप्पट करते' : 'Multiplies cell division'}</span>
                </div>
                <div className="flex justify-between items-center bg-black/25 px-3 py-2 rounded-xl border border-white/10">
                  <span className="font-bold text-[#C5DF83]">मॅग्नेशियम (Mg)</span>
                  <span className="text-emerald-100">{lang === 'mr' ? 'हरितद्रव्य व गर्द हिरवेपणा' : 'Chlorophyll & fungal defense'}</span>
                </div>
                <div className="flex justify-between items-center bg-black/25 px-3 py-2 rounded-xl border border-white/10">
                  <span className="font-bold text-[#C5DF83]">सल्फर (S)</span>
                  <span className="text-emerald-100">{lang === 'mr' ? 'थेट २०-३०% वजन व उतारा वाढ' : 'Direct 20-30% yield uplift'}</span>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-bold">
                <span className="text-emerald-200">२५ किलो व ५० किलो बॅग</span>
                <a 
                  href="#solutions" 
                  className="text-[#C5DF83] hover:underline inline-flex items-center gap-1"
                >
                  <span>{lang === 'mr' ? 'तांत्रिक पत्रक पहा' : 'View Tech Sheet'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companyInfo.keyMetrics.map((m, idx) => (
            <div key={idx} className="border-l-2 border-[#C5DF83] pl-4 py-1 text-white">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C5DF83] font-serif">
                {m.value}
              </div>
              <div className="text-xs sm:text-xs text-emerald-100 font-bold mt-1">
                {lang === 'mr' ? m.marathi : m.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
