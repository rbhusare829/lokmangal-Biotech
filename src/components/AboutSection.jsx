import React from 'react';
import { 
  Building2, 
  Factory, 
  Milk, 
  GraduationCap, 
  Zap, 
  Microscope, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FlaskConical,
  Award
} from 'lucide-react';
import { companyInfo } from '../data/company';

const iconMap = {
  Building2,
  Factory,
  Milk,
  GraduationCap,
  Zap,
  Microscope
};

export default function AboutSection({ lang }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174D36]/10 text-[#174D36] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#70A95B]" />
            <span>{lang === 'mr' ? 'वारसा, ध्येय आणि नेतृत्व' : 'Heritage & Purpose'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight font-devanagari">
            {lang === 'mr' 
              ? 'शेतकऱ्यांच्या संघर्षातून उभा राहिलेला, समृद्धीसाठी समर्पित उपक्रम!' 
              : 'Born From Farmers’ Struggle, Dedicated to Agriculture Prosperity'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5A50] leading-relaxed font-semibold">
            {lang === 'mr'
              ? '२००६ मध्ये मा. श्री. सुभाष (बापू) देशमुख यांच्या दूरदृष्टीतून स्थापन झालेली लोकमंगल बायोटेक प्रा. लि. ही संतुलित पोषण, दर्जेदार जैव खते आणि थेट बांधावर पोहोचणाऱ्या वैज्ञानिक तंत्रज्ञानाद्वारे शेतीचा कायापालट करणारी अग्रणी संस्था आहे.'
              : 'Established in 2006 under the visionary leadership of Shri Subhash (Bapu) Deshmukh, Lokmangal Bio-Tech Pvt. Ltd. was founded to transform agriculture through scientific balanced nutrition, bio-fertilizers, and field-tested technology.'}
          </p>
        </div>

        {/* Founder Portrait & Quote Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#E0E7DC] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#C5DF83]/20 to-[#70A95B]/10 rounded-bl-full pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Real Founder Photo & Title */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-[#E0E7DC] pb-8 lg:pb-0 lg:pr-8">
              <div className="relative mb-5 group">
                <div className="w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-2 ring-[#70A95B]/40 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={companyInfo.founder.photo}
                    alt={companyInfo.founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 bg-[#0D2E20] text-[#C5DF83] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md border border-[#C5DF83]/40">
                  {lang === 'mr' ? 'संस्थापक अध्यक्ष' : 'Founder Chairman'}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#17251D] mt-2 font-devanagari">
                {lang === 'mr' ? companyInfo.founder.nameMarathi : companyInfo.founder.name}
              </h3>
              <p className="text-xs font-bold text-[#2E7D32] mt-0.5">
                {lang === 'mr' ? companyInfo.founder.designationMarathi : companyInfo.founder.designation}
              </p>
              <p className="text-[11px] text-[#4B5A50] mt-1 font-semibold italic">
                {lang === 'mr' ? companyInfo.founder.formerTitleMarathi : companyInfo.founder.formerTitle}
              </p>
            </div>

            {/* Founder Quote & Philosophy */}
            <div className="lg:col-span-8 space-y-5">
              <Quote className="w-12 h-12 text-[#70A95B]/40" />
              <p className="text-lg sm:text-xl text-[#17251D] italic leading-relaxed font-semibold">
                "{lang === 'mr' ? companyInfo.founder.quoteMarathi : companyInfo.founder.quote}"
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[#E0E7DC]">
                <div className="bg-[#F7F9F5] p-5 rounded-2xl border border-[#E0E7DC] hover:border-[#70A95B] transition-all">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#174D36] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#D97706]" />
                    <span>{lang === 'mr' ? 'आमची दृष्टी (Vision)' : 'Our Vision'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5A50] mt-2 leading-relaxed font-semibold">
                    {lang === 'mr' ? companyInfo.vision.mr : companyInfo.vision.en}
                  </p>
                </div>

                <div className="bg-[#F7F9F5] p-5 rounded-2xl border border-[#E0E7DC] hover:border-[#70A95B] transition-all">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#174D36] flex items-center gap-1.5">
                    <FlaskConical className="w-4 h-4 text-[#2E7D32]" />
                    <span>{lang === 'mr' ? 'आमचे ध्येय (Mission)' : 'Our Mission'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5A50] mt-2 leading-relaxed font-semibold">
                    {lang === 'mr' ? companyInfo.mission.mr : companyInfo.mission.en}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Balanced Nutrition Philosophy Callout */}
        <div className="bg-gradient-to-r from-[#0D2E20] via-[#174D36] to-[#0D2E20] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#70A95B]/30">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5DF83]/20 text-[#C5DF83] text-xs font-bold uppercase tracking-wider">
                {lang === 'mr' ? 'शास्त्रीय संकल्पना' : 'Core Scientific Principle'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari">
                {lang === 'mr' 
                  ? 'संतुलित पोषण संकल्पना: जमिनीचा पोत आणि उत्पादकतेचे रक्षण'
                  : 'The "Balanced Nutrition" Concept: Beyond Major NPK'}
              </h3>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed font-semibold">
                {lang === 'mr'
                  ? 'पिकांना १२ आवश्यक अन्नद्रव्यांची गरज असते: मुख्य (N, P, K), दुय्यम (कॅल्शियम, मॅग्नेशियम, सल्फर) आणि सूक्ष्म अन्नद्रव्ये. केवळ युरिया आणि डीएपी खते दिल्याने जमिनी खारवट आणि घट्ट बनतात. लोकमंगल बायोटेकचे संतुलित पोषण पॅकेज जमिनीचा कस वाढवून सरासरी २० ते ३०% थेट उत्पादन वाढवते.'
                  : 'All crops require 12 essential nutrients: Major (N, P, K), Secondary (Ca, Mg, S), and Micronutrients. Blindly dumping NPK fertilizers without secondary and micro-nutrients makes agricultural soils salty and nutrient-locked. Lokmangal’s research-driven Balanced Nutrition package revitalizes soil health and guarantees a 20% to 30% yield boost.'}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold">
                <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">
                  १. मुख्य अन्नद्रव्ये: N + P + K
                </span>
                <span className="bg-[#C5DF83] text-[#0D2E20] px-3.5 py-1.5 rounded-xl shadow-md">
                  २. दुय्यम: Ca + Mg + S (मॅग्नेट)
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">
                  ३. सूक्ष्म: Zn, Fe, Mn, Cu, B, Mo
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 p-6 sm:p-7 rounded-2xl border border-white/20 backdrop-blur-md space-y-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#C5DF83] flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#C5DF83]" />
                <span>{lang === 'mr' ? 'शेतकऱ्यांना झालेला थेट आर्थिक लाभ' : 'Farmer Economic Impact'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
                {lang === 'mr'
                  ? 'महाराष्ट्र, कर्नाटक, गुजरात, राजस्थान, पंजाब, छत्तीसगड, मध्य प्रदेश आणि आंध्र प्रदेशातील हजारो शेतकऱ्यांचे उत्पन्न लोकमंगलच्या संतुलित पोषण पद्धतीने लक्षणीय वाढले आहे.'
                  : 'Over 100,000+ farmers across 8 Indian states have achieved economic stability and high profits through our balanced bio-nutrition regimen.'}
              </p>
              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-white/80 font-bold">{lang === 'mr' ? 'उत्पादकता वाढ' : 'Yield Increase'}</span>
                <span className="text-[#C5DF83] font-extrabold text-xl font-serif">+२०% ते ३०%</span>
              </div>
            </div>

          </div>
        </div>

        {/* Lokmangal Group Real Ecosystem with Images (Multiplex / Coromandel Reference) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#70A95B]">
              {lang === 'mr' ? 'लोकमंगल समूहाचा विस्तार' : 'Vertical Agro Conglomerate'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17251D] font-devanagari">
              {lang === 'mr' ? 'लोकमंगल समूहाचे शेतकरी-केंद्रित उद्योग विश्व' : 'The Lokmangal Group Ecosystem'}
            </h3>
            <p className="text-sm text-[#4B5A50] font-semibold">
              {lang === 'mr'
                ? 'बँकेपासून साखर कारखान्यापर्यंत, आणि दुग्ध व्यवसायापासून उच्च कृषी शिक्षणापर्यंत शेतकऱ्यांच्या सर्वांगीण प्रगतीसाठी कार्यरत समूह.'
                : 'A vertically integrated conglomerate committed to empowering rural India at every step.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyInfo.groupEcosystem.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Building2;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E0E7DC] hover:border-[#70A95B] hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#174D36] shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h4 className="text-base font-bold text-white font-devanagari">
                        {lang === 'mr' ? item.titleMarathi : item.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-[#4B5A50] leading-relaxed font-semibold">
                      {lang === 'mr' ? item.descMarathi : item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
