import React from 'react';
import { 
  Factory, 
  MapPin, 
  Warehouse, 
  Truck, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../data/company';

export default function ManufacturingNetworkSection({ lang }) {
  const statesCovered = [
    'महाराष्ट्र (Maharashtra)', 'कर्नाटक (Karnataka)', 'गुजरात (Gujarat)', 'राजस्थान (Rajasthan)', 
    'पंजाब (Punjab)', 'छत्तीसगड (Chhattisgarh)', 'मध्य प्रदेश (Madhya Pradesh)', 'आंध्र प्रदेश व तेलंगणा (AP & TG)'
  ];

  return (
    <section id="manufacturing" className="py-20 lg:py-28 bg-[#F7F9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174D36]/10 text-[#174D36] text-xs font-bold uppercase tracking-wider mb-3">
            <Factory className="w-4 h-4 text-[#70A95B]" />
            <span>{lang === 'mr' ? 'उत्पादन क्षमता व पुरवठा साखळी' : 'Manufacturing Scale & Logistics'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight font-devanagari">
            {lang === 'mr' 
              ? 'सोलापूर व वडोदरा: ५०,००० मे.टनांची भव्य उत्पादन क्षमता' 
              : '50,000 MT Combined Capacity Across Two Strategic Hubs'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5A50] leading-relaxed font-semibold">
            {lang === 'mr'
              ? 'महाराष्ट्र आणि गुजरातमधील दोन आधुनिक उत्पादन केंद्रे, ४ प्रादेशिक गोडाउन्स आणि १,००० पेक्षा जास्त सक्रिय कृषी सेवा केंद्र (डीलर) यांच्या माध्यमातून अखंड पुरवठा.'
              : 'Strategically positioned manufacturing facilities in Maharashtra and Gujarat, supported by multi-state regional depots and over 1,000 active dealers.'}
          </p>
        </div>

        {/* 2 Primary Manufacturing Hubs Cards with Real Photos */}
        <div className="grid lg:grid-cols-2 gap-8">
          {companyInfo.manufacturingUnits.map((unit, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#E0E7DC] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
            >
              {/* Unit Photo */}
              <div className="relative h-56 overflow-hidden bg-[#0D2E20]">
                <img
                  src={unit.image}
                  alt={unit.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 bg-[#D97706] text-white font-extrabold text-xs rounded-full shadow-md">
                    वार्षिक क्षमता: {unit.capacity}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-devanagari">
                    {unit.city}
                  </h3>
                </div>
              </div>

              <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start gap-2.5 text-xs text-[#4B5A50] font-semibold">
                    <MapPin className="w-5 h-5 text-[#70A95B] shrink-0 mt-0.5" />
                    <span>{unit.address}</span>
                  </div>

                  {/* Coverage Territory */}
                  <div className="p-4 rounded-2xl bg-[#F7F9F5] border border-[#E0E7DC] space-y-1 text-xs">
                    <span className="font-extrabold text-[#174D36] uppercase tracking-wider text-[11px] block font-devanagari">
                      {lang === 'mr' ? 'वितरण व कार्यक्षेत्र:' : 'Coverage Territory:'}
                    </span>
                    <p className="text-[#4B5A50] leading-relaxed font-semibold">
                      {unit.coverage}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#4B5A50] block mb-2">
                      {lang === 'mr' ? 'प्लँटची प्रमुख वैशिष्ट्ये:' : 'Unit Features:'}
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold text-[#17251D]">
                      {unit.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E0E7DC] flex items-center justify-between text-xs font-bold">
                  <span className="text-[#4B5A50]">
                    {lang === 'mr' ? 'थेट फॅक्टरी डिस्पॅच सुविधा' : 'Direct Factory Dispatch'}
                  </span>
                  <a 
                    href="#contact" 
                    className="text-[#0D2E20] hover:underline inline-flex items-center gap-1 text-sm font-extrabold"
                  >
                    <span>{lang === 'mr' ? 'घाऊक मागणी नोंदवा' : 'Inquire'}</span>
                    <ArrowRight className="w-4 h-4 text-[#70A95B]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Warehouses & Distribution Depots */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E0E7DC] space-y-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E0E7DC] pb-4">
            <div>
              <h3 className="text-2xl font-extrabold text-[#17251D] font-devanagari">
                {lang === 'mr' ? 'प्रादेशिक गोडाउन्स व मुख्य वितरण डेपो' : 'Regional Warehouses & Depots'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5A50] font-semibold mt-0.5">
                {lang === 'mr' ? '२४ तासांच्या आत माल पोहोचवण्यासाठी मोक्याच्या ठिकाणी स्थापन केलेले हब.' : 'Strategically located for rapid dispatches within 24 hours.'}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#0D2E20] bg-emerald-50 px-4 py-2 rounded-xl border border-[#70A95B]/40 shadow-sm">
              <Truck className="w-4 h-4 text-[#70A95B]" />
              <span>{lang === 'mr' ? 'जलद २४ तास वाहतूक' : 'Express Logistics'}</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyInfo.warehouses.map((w, idx) => (
              <div 
                key={idx}
                className="bg-[#F7F9F5] p-5 rounded-2xl border border-[#E0E7DC] space-y-2 hover:border-[#70A95B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <Warehouse className="w-5 h-5 text-[#70A95B]" />
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-white text-[#0D2E20] rounded-md border border-[#E0E7DC] shadow-sm">
                    {w.type}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#17251D] font-devanagari">
                  {w.state}
                </h4>
                <p className="text-xs text-[#4B5A50] leading-relaxed font-semibold">
                  {w.address}
                </p>
              </div>
            ))}
          </div>

          {/* Active States Strip */}
          <div className="pt-4 border-t border-[#E0E7DC]">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#174D36] block mb-2 font-devanagari">
              {lang === 'mr' ? '८ हून अधिक राज्यांमध्ये शेतकरी व डीलर नेटवर्क:' : 'Active Agricultural Footprint:'}
            </span>
            <div className="flex flex-wrap gap-2 font-semibold">
              {statesCovered.map((st, idx) => (
                <span 
                  key={idx}
                  className="px-3.5 py-1.5 bg-[#F7F9F5] border border-[#E0E7DC] text-xs text-[#17251D] rounded-xl hover:border-[#70A95B] transition-colors"
                >
                  ✓ {st}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
