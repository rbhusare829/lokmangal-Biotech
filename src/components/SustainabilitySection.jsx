import React from 'react';
import { 
  Leaf, 
  Droplet, 
  Sun, 
  Sparkles, 
  Star, 
  Quote, 
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

export default function SustainabilitySection({ lang }) {
  const testimonials = [
    {
      farmer: 'बबनराव पाटील',
      farmerEn: 'Babanrao Patil',
      location: 'पंढरपूर, सोलापूर (महाराष्ट्र)',
      locationEn: 'Pandharpur, Solapur (M.S.)',
      crop: 'ऊस (Co-86032)',
      cropEn: 'Sugarcane (Co-86032)',
      yield: 'एकरी ९४ टन (पूर्वी ६८ टन)',
      yieldEn: '94 Tons/Acre (Previously 68 Tons)',
      photo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      quote: 'मॅग्नेट ग्रॅन्युल आणि कृषी वरदान वापरल्याने माझ्या ऊसाचे वजन कमालीचे वाढले. पूर्वी युरियामुळे जमीन पांढरी व कडक पडत होती, ती आता भुसभुशीत झाली आहे आणि एकरी ९४ टन विक्रमी उत्पादन निघाले.',
      quoteEn: 'Using Magnet granule along with Krishi Vardan transformed my soil. Earlier my soil was turning salty and hard due to excess urea. Now cane thickness is outstanding and sugar recovery increased.'
    },
    {
      farmer: 'संजय शिंदे',
      farmerEn: 'Sanjay Shinde',
      location: 'सांगोला, सोलापूर (महाराष्ट्र)',
      locationEn: 'Sangola, Solapur (M.S.)',
      crop: 'डाळिंब (भगवा निर्यातक्षम)',
      cropEn: 'Pomegranate (Export Bhagwa)',
      yield: 'एकरी १४.५ टन निर्यात दर्जा',
      yieldEn: '14.5 Tons/Acre Export Grade',
      photo: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
      quote: 'कॅनॉन कॅल्शियम नायट्रेट आणि ब्लू स्टारमुळे फळांना अजिबात तडे गेले नाहीत आणि तेल्या रोगाचा प्रादुर्भाव शंभर टक्के रोखला गेला. डाळिंबाचा रंग आणि वजन दोन्ही उत्तम मिळाले.',
      quoteEn: 'Cannon Calcium Nitrate and Blue Star prevented fruit cracking and bacterial spot completely. Aril color was deep blood-red and we received premium export market rate.'
    },
    {
      farmer: 'महेश पटेल',
      farmerEn: 'Mahesh Patel',
      location: 'डभोई, वडोदरा (गुजरात)',
      locationEn: 'Daboi, Vadodara (Gujarat)',
      crop: 'केळी (ग्रँड नैन)',
      cropEn: 'Banana (Grand Naine)',
      yield: 'सरासरी ३४ किलो घड वजन',
      yieldEn: '34 Kg Average Bunch Weight',
      photo: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
      quote: 'फास्टर विद्राव्य खतांनी ठिबक नळ्या कधीच चोक झाल्या नाहीत. केळीच्या घडाचे सरासरी वजन ३४ किलो भरले आणि माल १५ दिवस आधी चांगल्या भावाने बाजारात गेला.',
      quoteEn: 'Faster 19:19:19 and Faster 13:00:45 dissolved completely in my drip lines without any filter choke. Bunches were straight, long, and matured 15 days earlier.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174D36]/10 text-[#174D36] text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-4 h-4 text-[#70A95B]" />
            <span>{lang === 'mr' ? 'शाश्वत शेती आणि शेतकरी अनुभव' : 'Sustainable Agriculture & Testimonials'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight font-devanagari">
            {lang === 'mr' 
              ? 'मातीचे आरोग्य टिकवून भावी पिढ्यांसाठी समृद्ध शेती!' 
              : 'Nurturing Soil Health for Generations to Come'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5A50] leading-relaxed font-semibold">
            {lang === 'mr'
              ? 'केवळ रासायनिक घटकांवर विसंबून न राहता सेंद्रिय कर्ब वाढवणे, सूक्ष्म जिवाणू संवर्धन आणि नैसर्गिक अर्कांवर आधारित कीड नियंत्रणाद्वारे आम्ही मातीची सुपीकता निरंतर टिकवून ठेवतो.'
              : 'Chemical agriculture without organic balance exhausts the land. Lokmangal Bio-Tech combines microbial power, organic carbon enhancers, and residue-free botanical protection to foster resilient, living soils.'}
          </p>
        </div>

        {/* 3 Core Sustainability Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#F7F9F5] p-8 rounded-3xl border border-[#E0E7DC] space-y-4 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#0D2E20] flex items-center justify-center font-bold shadow-sm">
              <Leaf className="w-7 h-7 text-[#174D36]" />
            </div>
            <h3 className="text-xl font-bold text-[#17251D] font-devanagari">
              {lang === 'mr' ? 'सेंद्रिय कर्ब (OC) संवर्धन' : 'Restoring Soil Organic Carbon'}
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5A50] leading-relaxed font-semibold">
              {lang === 'mr'
                ? 'चॅम्पियन सेंद्रिय खत (१५% OC) आणि प्युअर नीम पावडरद्वारे जमिनीतील उपयुक्त जिवाणू व गांडुळांची संख्या वाढवून माती भुसभुशीत ठेवली जाते.'
                : 'Through Champion organic manure and pure neem extracts, we elevate microbial biodiversity and native earthworm activity.'}
            </p>
          </div>

          <div className="bg-[#F7F9F5] p-8 rounded-3xl border border-[#E0E7DC] space-y-4 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#0D2E20] flex items-center justify-center font-bold shadow-sm">
              <Droplet className="w-7 h-7 text-[#174D36]" />
            </div>
            <h3 className="text-xl font-bold text-[#17251D] font-devanagari">
              {lang === 'mr' ? 'क्षारपड प्रतिबंध व खतांची बचत' : 'Preventing Soil Salinity'}
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5A50] leading-relaxed font-semibold">
              {lang === 'mr'
                ? 'मॅग्नेटमधील कॅल्शियम आणि सल्फर जमिनीतील क्षारांचे विघटन करतात, ज्यामुळे खतांचा अपव्यय टळतो व भूजल प्रदूषण रोखले जाते.'
                : 'Our Magnet secondary nutrient formula breaks the chemical lockup in saline soils, preventing heavy nitrate runoff.'}
            </p>
          </div>

          <div className="bg-[#F7F9F5] p-8 rounded-3xl border border-[#E0E7DC] space-y-4 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#0D2E20] flex items-center justify-center font-bold shadow-sm">
              <Sun className="w-7 h-7 text-[#174D36]" />
            </div>
            <h3 className="text-xl font-bold text-[#17251D] font-devanagari">
              {lang === 'mr' ? 'बिनविषारी वनस्पती अर्क संरक्षण' : 'Zero Residue Botanical Shield'}
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5A50] leading-relaxed font-semibold">
              {lang === 'mr'
                ? 'करंज, हिंग, रुई आणि निर्गुडीच्या नैसर्गिक अर्कांवर आधारित ॲक्शन व बेन-१० मुळे पिकांवर कोणतेही विषारी रासायनिक अवशेष राहत नाहीत.'
                : 'Action and Ben-10 botanical formulations utilize native botanical extracts to suppress pests without toxic residues.'}
            </p>
          </div>
        </div>

        {/* Customer Success Stories / Farmer Testimonials (Jaipur Bio reference) */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#70A95B]">
              {lang === 'mr' ? 'शेतकऱ्यांचे प्रत्यक्ष अनुभव' : 'Real Field Testimonials'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17251D] font-devanagari">
              {lang === 'mr' ? 'लोकमंगलचे समाधानी शेतकरी बांधव' : 'Farmer Success Stories'}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-[#F7F9F5] rounded-3xl overflow-hidden border border-[#E0E7DC] hover:border-[#70A95B] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
              >
                {/* Visual Harvest Header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={t.photo}
                    alt={t.crop}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>5.0</span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-extrabold bg-[#D97706] text-white px-2.5 py-0.5 rounded-full shadow-md">
                      {lang === 'mr' ? t.yield : t.yieldEn}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <Quote className="w-8 h-8 text-[#70A95B]/40" />
                    <p className="text-xs sm:text-sm text-[#17251D] italic leading-relaxed font-semibold">
                      "{lang === 'mr' ? t.quote : t.quoteEn}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E0E7DC] space-y-1">
                    <h4 className="text-base font-bold text-[#17251D] font-devanagari">
                      {lang === 'mr' ? t.farmer : t.farmerEn}
                    </h4>
                    <p className="text-xs text-[#4B5A50] font-semibold">
                      📍 {lang === 'mr' ? t.location : t.locationEn}
                    </p>
                    <p className="text-xs font-bold text-[#2E7D32]">
                      {lang === 'mr' ? t.crop : t.cropEn}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
