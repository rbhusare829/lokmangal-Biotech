import React from 'react';
import { 
  TrendingUp, 
  Factory, 
  Users, 
  FlaskRound as Flask,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function WhyChooseUs({ lang }) {
  const pillars = [
    {
      icon: TrendingUp,
      title: lang === 'mr' ? '२० ते ३०% हमखास उत्पादन वाढ' : 'Proven 20-30% Yield Boost',
      desc: lang === 'mr'
        ? 'ऊस, केळी, डाळिंब, कांदा आणि कापूस पिकांवर घेतलेल्या प्रयोगांतून शास्त्रोक्त पद्धतीने सिद्ध झालेली उत्पादकतेतील लक्षणीय वाढ.'
        : 'Field experiments across sugarcane, banana, pomegranate, and cotton consistently show substantial tonnage gains.',
      badge: 'संतुलित पोषण'
    },
    {
      icon: Factory,
      title: lang === 'mr' ? '५०,००० मे.टन उत्पादन क्षमता' : '50,000 MT Manufacturing Scale',
      desc: lang === 'mr'
        ? 'सोलापूर आणि वडोदरा येथील दोन भव्य अत्याधुनिक प्लँट्समुळे शेतकऱ्यांना व डीलर्सना वर्षभर वेळेवर उच्च प्रतीचा खत साठा मिळतो.'
        : 'Dual cutting-edge plants in Solapur and Vadodara ensure continuous automated production year-round.',
      badge: 'सोलापूर व वडोदरा'
    },
    {
      icon: Flask,
      title: lang === 'mr' ? 'मोफत माती व पाणी चाचणी लॅब' : 'Free In-House Soil & Water Lab',
      desc: lang === 'mr'
        ? 'महाराष्ट्र संशोधन व विकास केंद्रामार्फत मोफत माती परीक्षण करून गरजेनुसारच अचूक खतांची शिफारस केली जाते.'
        : 'Maharashtra Research & Development Centre analyzes pH, salinity, and trace minerals so farmers only buy what soil lacks.',
      badge: 'अचूक डोस'
    },
    {
      icon: Users,
      title: lang === 'mr' ? '१,०००+ अधिकृत वितरकांचे जाळे' : '1,000+ Trusted Dealer Network',
      desc: lang === 'mr'
        ? 'महाराष्ट्र, कर्नाटक, गुजरात, राजस्थान, पंजाब, छत्तीसगड, मध्य प्रदेश आणि आंध्र प्रदेशातील १,००० पेक्षा जास्त विश्वासू कृषी केंद्रे.'
        : 'Active footprints across Maharashtra, Karnataka, Gujarat, Rajasthan, Punjab, Chhattisgarh, MP, and Andhra Pradesh.',
      badge: '८+ राज्ये'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174D36]/10 text-[#174D36] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#D97706]" />
            <span>{lang === 'mr' ? 'लोकमंगल बायोटेकची बलस्थाने' : 'The Lokmangal Edge'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight font-devanagari">
            {lang === 'mr' 
              ? 'प्रगतिशील शेतकरी लोकमंगलवरच का विश्वास ठेवतात?' 
              : 'Why Progressive Farmers Trust Lokmangal'}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5A50] font-semibold">
            {lang === 'mr'
              ? 'दोन दशकांचा अढळ विश्वास, कृषी शास्त्रज्ञांची भक्कम साथ आणि शेतकरी समृद्धीचा ठाम निर्धार.'
              : 'Backed by decades of agricultural leadership, scientific research, and an unwavering commitment to farmer prosperity.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#E0E7DC] hover:border-[#70A95B] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F7F9F5] border border-[#E0E7DC] group-hover:bg-[#0D2E20] group-hover:text-[#C5DF83] flex items-center justify-center text-[#174D36] transition-all shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-[#0D2E20] border border-[#70A95B]/40">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#17251D] group-hover:text-[#174D36] transition-colors leading-snug font-devanagari">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5A50] mt-3 leading-relaxed font-semibold">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E0E7DC] flex items-center gap-1.5 text-xs text-[#2E7D32] font-extrabold">
                  <span>{lang === 'mr' ? 'प्रमाणित गुणवत्ता हमी' : 'Assured Quality'}</span>
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
