import React, { useState } from 'react';
import { 
  Wheat, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Leaf, 
  TrendingUp, 
  ArrowRight
} from 'lucide-react';
import { cropsData } from '../data/crops';

export default function CropAdvisorySection({ lang }) {
  const [selectedCropId, setSelectedCropId] = useState(cropsData[0].id);

  const selectedCrop = cropsData.find(c => c.id === selectedCropId) || cropsData[0];

  return (
    <section id="crop-guide" className="py-20 lg:py-28 bg-[#F7F9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174D36]/10 text-[#174D36] text-xs font-bold uppercase tracking-wider">
            <Wheat className="w-4 h-4 text-[#70A95B]" />
            <span>{lang === 'mr' ? 'Aries Agro मॉडेल • पिकनिहाय संपूर्ण पोषण सल्ला' : 'Aries Agro Model Crop Advisory'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight font-devanagari">
            {lang === 'mr' 
              ? 'पिकनिहाय शास्त्रीय खत वेळापत्रक व तज्ज्ञ मार्गदर्शन' 
              : 'Scientifically Balanced Crop Schedules'}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5A50] font-semibold">
            {lang === 'mr'
              ? 'महाराष्ट्रातील प्रमुख नगदी पिकांसाठी वाढीच्या टप्प्यांनुसार डोस व शास्त्रोक्त सल्ला, जो थेट २० ते ३०% अधिक उत्पादन देतो.'
              : 'Unlock 20% to 30% higher harvest yields through stage-by-stage nutrition schedules tailored for Maharashtra\'s leading commercial crops.'}
          </p>
        </div>

        {/* Crop Selector Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-white rounded-3xl border border-[#E0E7DC] shadow-md max-w-full">
            {cropsData.map((crop) => (
              <button
                key={crop.id}
                onClick={() => setSelectedCropId(crop.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                  selectedCropId === crop.id
                    ? 'bg-[#0D2E20] text-[#C5DF83] shadow-lg scale-105 ring-2 ring-[#C5DF83]/50'
                    : 'text-[#4B5A50] hover:text-[#17251D] hover:bg-[#F7F9F5]'
                }`}
              >
                <Leaf className={`w-4 h-4 ${selectedCropId === crop.id ? 'text-[#C5DF83]' : 'text-[#70A95B]'}`} />
                <span>{lang === 'mr' ? crop.name : crop.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Crop Detail Showcase */}
        <div className="bg-white rounded-3xl border border-[#E0E7DC] overflow-hidden shadow-2xl">
          
          {/* Crop Banner with Real Agriculture Photo */}
          <div className="relative h-64 sm:h-80 overflow-hidden bg-[#0D2E20]">
            <img
              src={selectedCrop.image}
              alt={selectedCrop.name}
              className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest px-3 py-1 bg-[#C5DF83] text-[#0D2E20] rounded-full shadow-md">
                {lang === 'mr' ? 'विशेष पिक पोषण वेळापत्रक' : 'Target Crop Schedule'}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-devanagari">
                {selectedCrop.name} — {selectedCrop.marathiName}
              </h3>
              <p className="text-xs sm:text-sm text-[#C5DF83] font-bold max-w-2xl">
                ★ {selectedCrop.tagline}
              </p>
            </div>
          </div>

          {/* Overview & Agronomy Context */}
          <div className="p-6 sm:p-8 border-b border-[#E0E7DC] bg-[#F7F9F5]/70">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#174D36] mb-2 flex items-center gap-1.5 font-devanagari">
              <TrendingUp className="w-4 h-4 text-[#70A95B]" />
              <span>{lang === 'mr' ? 'कृषी शास्त्रज्ञांचा दृष्टिकोन व जमिनीचे व्यवस्थापन' : 'Agronomic Soil Management'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5A50] leading-relaxed font-semibold max-w-4xl">
              {selectedCrop.overview}
            </p>
          </div>

          {/* Stage-by-Stage Nutrition Timeline */}
          <div className="p-6 sm:p-8 space-y-6">
            <h4 className="text-base font-extrabold uppercase tracking-wider text-[#17251D] flex items-center gap-2 font-devanagari">
              <Calendar className="w-5 h-5 text-[#70A95B]" />
              <span>{lang === 'mr' ? 'टप्प्याटप्प्याने खत व पोषण वेळापत्रक' : 'Growth Stage Nutrition Chart'}</span>
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              {selectedCrop.stages.map((stage, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F7F9F5] rounded-3xl p-6 border border-[#E0E7DC] hover:border-[#70A95B] hover:shadow-xl transition-all duration-300 space-y-3 relative group"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 bg-[#0D2E20] text-[#C5DF83] rounded-xl shadow-sm">
                      टप्पा {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-[#4B5A50] bg-white px-3 py-1 rounded-lg border border-[#E0E7DC] shadow-sm">
                      ⏱ {stage.timing}
                    </span>
                  </div>

                  <h5 className="text-lg font-bold text-[#17251D] font-devanagari">
                    {stage.stageName}
                  </h5>

                  {/* Purpose */}
                  <p className="text-xs text-[#4B5A50] font-semibold italic">
                    {stage.purpose}
                  </p>

                  {/* Recommended Products */}
                  <div className="pt-3 border-t border-[#E0E7DC] space-y-2">
                    <span className="text-[11px] font-extrabold text-[#174D36] uppercase tracking-wider block">
                      {lang === 'mr' ? 'शिफारस केलेली लोकमंगल उत्पादने:' : 'Recommended Products:'}
                    </span>
                    <div className="space-y-1.5 font-bold">
                      {stage.products.map((prod, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2.5 text-xs text-[#17251D] bg-white px-3 py-2 rounded-xl border border-[#E0E7DC] shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                          <span>{prod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Expert Field Tips */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0D2E20] via-[#174D36] to-[#0D2E20] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#C5DF83] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'mr' ? 'वरिष्ठ कृषी शास्त्रज्ञांचे मार्गदर्शन -' : 'Senior Agronomist Tips -'} {selectedCrop.name}</span>
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-100 font-semibold">
                {selectedCrop.expertTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C5DF83] font-bold">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="shrink-0 px-6 py-3.5 rounded-2xl bg-[#C5DF83] hover:bg-[#d8eea0] text-[#0D2E20] font-extrabold text-xs uppercase tracking-wider shadow-xl transition-transform hover:scale-105"
            >
              {lang === 'mr' ? 'शास्त्रज्ञांचा थेट सल्ला घ्या' : 'Consult Agronomist'}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
