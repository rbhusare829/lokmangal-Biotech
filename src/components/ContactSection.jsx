import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { companyInfo } from '../data/company';

export default function ContactSection({ lang }) {
  const [inquiryType, setInquiryType] = useState('dealership');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    state: 'Maharashtra',
    crop: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174D36]/10 text-[#174D36] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4 text-[#70A95B]" />
            <span>{lang === 'mr' ? 'थेट संपर्क व चौकशी केंद्र' : 'Get In Touch'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight font-devanagari">
            {lang === 'mr' 
              ? 'आमच्या कृषी तज्ज्ञ व विक्री विभागाशी संपर्क साधा' 
              : 'Connect With Our Agronomy Team'}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5A50] font-semibold">
            {lang === 'mr'
              ? 'अधिकृत कृषी केंद्र डीलरशिप, मोफत माती चाचणी नोंदणी किंवा उत्पादनांच्या थेट घाऊक मागणीसाठी खालील फॉर्म भरा अथवा थेट संपर्क करा.'
              : 'Whether you want to become an authorized dealer, book a free soil test, or purchase in bulk, we are here to assist.'}
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#F7F9F5] rounded-3xl p-6 sm:p-10 border border-[#E0E7DC] shadow-xl">
            
            {/* Inquiry Type Radio / Pill Tabs */}
            <div className="mb-6">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#174D36] block mb-2 font-devanagari">
                {lang === 'mr' ? 'चौकशीचा मुख्य विषय निवडा:' : 'Inquiry Purpose:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'dealership', labelEn: 'Dealership Inquiry', labelMr: 'कृषी केंद्र डीलरशिप अर्ज' },
                  { id: 'soil-test', labelEn: 'Free Soil Test Booking', labelMr: 'मोफत माती चाचणी नोंदणी' },
                  { id: 'bulk-order', labelEn: 'Bulk Product Order', labelMr: 'घाऊक खत मागणी' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setInquiryType(type.id)}
                    className={`px-3 py-3 rounded-2xl text-xs font-extrabold transition-all text-center ${
                      inquiryType === type.id
                        ? 'bg-[#0D2E20] text-[#C5DF83] shadow-md ring-2 ring-[#C5DF83]/40'
                        : 'bg-white text-[#4B5A50] border border-[#E0E7DC] hover:bg-emerald-50'
                    }`}
                  >
                    {lang === 'mr' ? type.labelMr : type.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 bg-white rounded-3xl border border-emerald-300 p-8 shadow-md">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0D2E20] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#2E7D32]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#17251D] font-devanagari">
                  {lang === 'mr' ? 'आपली नोंदणी यशस्वीरीत्या प्राप्त झाली!' : 'Inquiry Submitted Successfully!'}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5A50] max-w-md mx-auto leading-relaxed font-semibold">
                  {lang === 'mr'
                    ? `धन्यवाद ${formData.name || 'शेतकरी बंधू'}! आमचे कृषी तज्ज्ञ व विभागीय समन्वयक लवकरच आपल्याशी ${formData.phone} वर संपर्क साधतील.`
                    : `Thank you ${formData.name || 'Farmer Brother'}! Our regional coordinator will contact you shortly on ${formData.phone}.`}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', city: '', state: 'Maharashtra', crop: '', message: '' });
                    }}
                    className="text-xs font-extrabold text-[#0D2E20] underline"
                  >
                    {lang === 'mr' ? 'दुसरा संदेश पाठवा' : 'Submit Another Inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-semibold text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-[#17251D] block mb-1 font-devanagari">
                      {lang === 'mr' ? 'पूर्ण नाव / कृषी केंद्राचे नाव *' : 'Full Name / Business Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'mr' ? 'उदा. रमेश पाटील' : 'e.g. Ramesh Patil'}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E0E7DC] focus:border-[#174D36] text-sm text-[#17251D] outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-[#17251D] block mb-1 font-devanagari">
                      {lang === 'mr' ? 'मोबाईल / व्हॉट्सॲप नंबर *' : 'Mobile / WhatsApp Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="उदा. ९८२२० XXXXX"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E0E7DC] focus:border-[#174D36] text-sm text-[#17251D] outline-none shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold text-[#17251D] block mb-1 font-devanagari">
                      {lang === 'mr' ? 'जिल्हा / तालुका / शहर *' : 'District / City *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder={lang === 'mr' ? 'उदा. सोलापूर / पंढरपूर' : 'e.g. Solapur'}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E0E7DC] focus:border-[#174D36] text-sm text-[#17251D] outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-[#17251D] block mb-1 font-devanagari">
                      {lang === 'mr' ? 'राज्य' : 'State'}
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E0E7DC] focus:border-[#174D36] text-sm text-[#17251D] outline-none shadow-sm"
                    >
                      <option value="Maharashtra">महाराष्ट्र (Maharashtra)</option>
                      <option value="Karnataka">कर्नाटक (Karnataka)</option>
                      <option value="Gujarat">गुजरात (Gujarat)</option>
                      <option value="Madhya Pradesh">मध्य प्रदेश (Madhya Pradesh)</option>
                      <option value="Rajasthan">राजस्थान (Rajasthan)</option>
                      <option value="Andhra Pradesh">आंध्र प्रदेश / तेलंगणा</option>
                      <option value="Other">इतर राज्य</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold text-[#17251D] block mb-1 font-devanagari">
                    {lang === 'mr' ? 'प्रमुख पिक किंवा आवश्यक उत्पादन' : 'Main Crop or Product of Interest'}
                  </label>
                  <input
                    type="text"
                    value={formData.crop}
                    onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                    placeholder={lang === 'mr' ? 'उदा. ऊस, डाळिंब, मॅग्नेट, फास्टर विद्राव्य खत' : 'e.g. Sugarcane, Magnet 50kg, Faster 19:19:19'}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E0E7DC] focus:border-[#174D36] text-sm text-[#17251D] outline-none shadow-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold text-[#17251D] block mb-1 font-devanagari">
                    {lang === 'mr' ? 'संदेश किंवा विशेष आवश्यकता' : 'Message / Details'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'mr' ? 'शेतीचे क्षेत्र किंवा डीलरशिपबाबतचा तपशील येथे लिहा...' : 'Provide farm acreage, soil issue or dealership details...'}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E0E7DC] focus:border-[#174D36] text-sm text-[#17251D] outline-none shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#0D2E20] hover:bg-[#174D36] text-[#C5DF83] font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group-hover:scale-102"
                >
                  <Send className="w-4 h-4 text-[#C5DF83]" />
                  <span>
                    {inquiryType === 'dealership' 
                      ? (lang === 'mr' ? 'डीलरशिप अर्ज सादर करा' : 'Submit Dealership Request')
                      : inquiryType === 'soil-test'
                      ? (lang === 'mr' ? 'मोफत माती चाचणी नोंदवा' : 'Book Free Soil Test')
                      : (lang === 'mr' ? 'घाऊक मागणी नोंदवा' : 'Submit Order Inquiry')}
                  </span>
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Office & Plant Addresses */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Helpline Card */}
            <div className="bg-gradient-to-br from-[#0D2E20] to-[#174D36] text-white rounded-3xl p-7 shadow-2xl space-y-5 border border-[#70A95B]/30">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-[#C5DF83] text-[#0D2E20] flex items-center justify-center font-bold shadow-md">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C5DF83]">
                    {lang === 'mr' ? 'शेतकरी टोल-फ्री हेल्पलाइन' : 'Kisan Helpline'}
                  </span>
                  <p className="text-2xl font-extrabold text-white font-serif">
                    {companyInfo.contact.helpline}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15 space-y-2 text-xs font-semibold text-emerald-100">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C5DF83]" />
                  <span>{companyInfo.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5DF83]" />
                  <span>{companyInfo.contact.officeHours}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/919422000000?text=Namaskar%20Lokmangal%20Biotech%20Team`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-transform hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'mr' ? 'व्हॉट्सॲपवर थेट बोला' : 'Chat on WhatsApp'}</span>
              </a>
            </div>

            {/* Plants & Depots List */}
            <div className="bg-[#F7F9F5] rounded-3xl p-7 border border-[#E0E7DC] space-y-4 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#17251D] font-devanagari">
                {lang === 'mr' ? 'मुख्य कार्यालये व फॅक्टरी पत्ते' : 'Official Plant Locations'}
              </h3>

              <div className="space-y-3 text-xs font-semibold">
                <div className="bg-white p-4 rounded-2xl border border-[#E0E7DC] space-y-1 shadow-sm">
                  <span className="font-extrabold text-[#174D36] block text-sm font-devanagari">
                    📍 सोलापूर मुख्य युनिट व MRDC लॅब (महाराष्ट्र)
                  </span>
                  <p className="text-[#4B5A50]">
                    A-61, M.I.D.C., चिंचोळी, सोलापूर – ४१३ २५५ (M.S.)
                  </p>
                  <p className="text-[#2E7D32] font-bold text-[11px] pt-1">
                    ✓ मोफत माती व सिंचन पाणी चाचणी केंद्र
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#E0E7DC] space-y-1 shadow-sm">
                  <span className="font-extrabold text-[#174D36] block text-sm font-devanagari">
                    📍 वडोदरा उत्पादन युनिट (गुजरात)
                  </span>
                  <p className="text-[#4B5A50]">
                    प्लॉट नं. ५१५, नानाचाफडिया, ता. डभोई, जि. बडोदा – ३९१ ०१२
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#E0E7DC] space-y-1 shadow-sm">
                  <span className="font-extrabold text-[#174D36] block text-sm font-devanagari">
                    📍 विदर्भ व खान्देश डेपो (अकोला)
                  </span>
                  <p className="text-[#4B5A50]">
                    C/o कमल इंड. कॉर्प, प्लॉट नं. F-18, M.I.D.C. फेज-२, अकोला (M.S.)
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#E0E7DC] space-y-1 shadow-sm">
                  <span className="font-extrabold text-[#174D36] block text-sm font-devanagari">
                    📍 दक्षिण भारत मुख्य डेपो (अनंतपूर)
                  </span>
                  <p className="text-[#4B5A50]">
                    गोडाउन नं. ३९, डीलर कॅनॉल, मिरची मार्केटजवळ, अनंतपूर – ५५५ ००१ (A.P.)
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
