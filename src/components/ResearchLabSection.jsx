import React from 'react';
import { 
  TestTube2, 
  Microscope, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  FileCheck2,
  CalendarCheck
} from 'lucide-react';
import { companyInfo } from '../data/company';

export default function ResearchLabSection({ lang }) {
  const { labTestingService } = companyInfo;

  return (
    <section id="soil-testing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174D36]/10 text-[#174D36] text-xs font-bold uppercase tracking-wider mb-3">
            <Microscope className="w-4 h-4 text-[#70A95B]" />
            <span>{lang === 'mr' ? 'महाराष्ट्र संशोधन व विकास केंद्र (MRDC)' : 'Maharashtra Research & Development Centre'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight font-devanagari">
            {lang === 'mr' 
              ? 'अत्याधुनिक संशोधन प्रयोगशाळा व १००% मोफत माती-पाणी चाचणी' 
              : 'World-Class Laboratory & 100% Free Soil Testing'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5A50] leading-relaxed font-semibold">
            {lang === 'mr'
              ? 'सोलापूर येथील मध्यवर्ती प्रयोगशाळेत कुशल कृषी शास्त्रज्ञ, अत्याधुनिक चाचणी उपकरणे आणि अचूक विश्लेषणाद्वारे प्रत्येक बॅचची शुद्धता तपासली जाते. तसेच शेतकऱ्यांच्या जमिनीचा कस टिकवून ठेवण्यासाठी १००% मोफत माती व सिंचन पाणी परीक्षण केले जाते.'
              : 'Equipped with precision analytical spectrophotometers, atomic absorption, and sterile microbiological culture rooms. We ensure zero deviation in product quality and provide complimentary testing to protect our farmers\' soil health.'}
          </p>
        </div>

        {/* Dual Pillar Showcase Cards with Real Lab Photography */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: R&D and Quality Compliance (IPL Biologicals Style) */}
          <div className="bg-[#F7F9F5] rounded-3xl p-8 border border-[#E0E7DC] shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#0D2E20] text-[#C5DF83] flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#0D2E20] font-extrabold text-xs">
                  FCO & ISO Certified
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#17251D] font-devanagari">
                {lang === 'mr' ? 'गुणवत्ता नियंत्रण आणि जैव-संशोधन' : 'Quality Compliance & R&D'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A50] leading-relaxed font-semibold">
                {lang === 'mr'
                  ? 'कच्च्या मालापासून ते अंतिम उत्पादनापर्यंत प्रत्येक बॅचची रासायनिक व जैविक प्रयोगशाळेत कसून तपासणी केली जाते, ज्यामुळे शेतकऱ्यांना मिळते १००% खात्रीशीर दर्जा.'
                  : 'Every single metric of incoming raw materials and finished products undergoes mandatory chemical and microbiological validation.'}
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    title: lang === 'mr' ? 'कच्च्या मालाची १००% शुद्धता पडताळणी' : 'Raw Material Purity Screening',
                    desc: lang === 'mr' ? 'जड धातू (Heavy Metals) शून्य आणि खनिज घटकांची उच्च शुद्धता.' : 'Verification of zero heavy metal tolerance and mineral grade.'
                  },
                  {
                    title: lang === 'mr' ? 'सक्रिय उपयुक्त जिवाणू संख्या (CFU Count)' : 'Microbial Viable Count (CFU/g)',
                    desc: lang === 'mr' ? 'ॲझोटोबॅक्टर आणि पीएसबीमध्ये १x१०⁸ CFU/g सक्रिय जिवाणूंची खात्री.' : 'Guarantees 1x10^8 active CFU count for Azotobacter & PSB.'
                  },
                  {
                    title: lang === 'mr' ? '१००% विद्राव्यता चाचणी (ठिबक सुरक्षित)' : '100% Water Solubility Assurance',
                    desc: lang === 'mr' ? 'फास्टर शृंखलेची विद्राव्यता तपासली जाते, जेणेकरून ड्रिप नोझल्स चोक होणार नाहीत.' : 'Prevents drip emitter clogging across Faster series.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-[#E0E7DC] flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#17251D] font-devanagari">{item.title}</h4>
                      <p className="text-xs text-[#4B5A50] mt-0.5 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E0E7DC] flex items-center justify-between text-xs font-bold">
              <span className="text-[#174D36]">
                {lang === 'mr' ? 'बॅच गुणवत्ता नियंत्रण रिपोर्ट उपलब्ध' : 'Batch Quality Testing Reports'}
              </span>
              <span className="text-[#2E7D32]">
                ✓ १००% खात्रीशीर दर्जा
              </span>
            </div>
          </div>

          {/* Pillar 2: Free Soil & Water Testing Service (Multiplex Group Style) */}
          <div className="bg-gradient-to-br from-[#0D2E20] via-[#174D36] to-[#0D2E20] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden border border-[#70A95B]/30">
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#C5DF83] border border-white/20 flex items-center justify-center shadow-lg">
                  <TestTube2 className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#C5DF83] text-[#0D2E20] text-xs font-extrabold uppercase tracking-wider shadow-lg animate-pulse">
                  {lang === 'mr' ? '१००% मोफत सेवा' : '100% Free Service'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari">
                {lang === 'mr' ? 'मोफत माती व सिंचन पाणी चाचणी केंद्र' : 'Soil & Water Testing Lab'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-semibold">
                {lang === 'mr'
                  ? 'अंदाधुंद रासायनिक खतांवर हजारो रुपये खर्च करण्यापूर्वी आपल्या शेतातील माती व पाण्याचे मोफत परीक्षण करून घ्या आणि जमिनीच्या अचूक गरजेनुसारच खतांचा समतोल डोस निवडा.'
                  : 'Stop guessing your fertilizer dose! Before spending thousands on unnecessary fertilizers, get your soil tested completely free at our Chincholi MIDC Solapur lab.'}
              </p>

              {/* Tested Parameters Grid */}
              <div className="pt-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C5DF83] block mb-2">
                  {lang === 'mr' ? 'तपासले जाणारे महत्त्वाचे घटक:' : 'Key Parameters Evaluated:'}
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  {labTestingService.parametersTested.slice(0, 6).map((param, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                      <span className="font-bold text-white block">{param.name}</span>
                      <span className="text-[10px] text-emerald-200 truncate block mt-0.5">{param.importance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="text-xs text-emerald-100">
                <span className="font-bold text-white block font-devanagari">{lang === 'mr' ? 'अहवाल मिळण्याचा कालावधी:' : 'Report Turnaround:'}</span>
                <span className="font-semibold text-[#C5DF83]">{lang === 'mr' ? '४८ ते ७२ तासांत संपूर्ण अहवाल व डोस सल्ला' : '48-72 Hours with Agronomist Card'}</span>
              </div>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#C5DF83] hover:bg-[#d8eea0] text-[#0D2E20] font-extrabold text-xs uppercase tracking-wider shadow-xl text-center transition-transform hover:scale-105"
              >
                {lang === 'mr' ? 'माती नमुना नोंदणी करा' : 'Register Soil Sample'}
              </a>
            </div>
          </div>

        </div>

        {/* 4-Step Sample Collection & Submission Workflow (Multiplex Model) */}
        <div className="bg-[#F7F9F5] rounded-3xl p-8 sm:p-12 border border-[#E0E7DC] space-y-8 shadow-md">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#70A95B]">
              {lang === 'mr' ? 'सुलभ कार्यपद्धती' : 'Step-by-Step Procedure'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17251D] font-devanagari">
              {lang === 'mr' 
                ? 'मातीचा नमुना कसा काढावा व जमा करावा?' 
                : 'How to Collect & Submit Soil Samples'}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {labTestingService.sampleSteps.map((step) => (
              <div 
                key={step.step}
                className="bg-white p-6 rounded-3xl border border-[#E0E7DC] shadow-sm relative flex flex-col justify-between hover:border-[#70A95B] hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0D2E20] text-[#C5DF83] font-bold text-base flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                    {step.step}
                  </div>
                  <h4 className="text-base font-bold text-[#17251D] mb-2 font-devanagari">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#4B5A50] leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E0E7DC] text-[11px] text-[#2E7D32] font-extrabold flex items-center gap-1">
                  <span>टप्पा {step.step} पूर्ण</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice Pill */}
          <div className="bg-white p-5 rounded-2xl border border-[#E0E7DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#4B5A50] shadow-sm">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-[#70A95B] shrink-0" />
              <span>
                <strong className="text-[#17251D]">{lang === 'mr' ? 'मुख्य प्रयोगशाळा पत्ता:' : 'Central Lab:'}</strong> A-61, M.I.D.C., चिंचोळी, सोलापूर – ४१३ २५५. {lang === 'mr' ? 'तसेच सर्व अधिकृत लोकमंगल कृषी सेवा केंद्रांकडे नमुने स्वीकारले जातात.' : 'Samples accepted at all dealers.'}
              </span>
            </div>
            <a 
              href="tel:+912172355555" 
              className="text-[#0D2E20] font-extrabold underline hover:text-[#70A95B] shrink-0 text-sm"
            >
              {lang === 'mr' ? 'लॅब समन्वयकाशी बोला' : 'Call Coordinator'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
