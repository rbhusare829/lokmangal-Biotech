import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Check, 
  Sparkles, 
  Download, 
  X, 
  FileText, 
  Package, 
  Wheat, 
  Droplet, 
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { productsData, productCategories } from '../data/products';

export default function SolutionsSection({ lang }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.marathiName.toLowerCase().includes(q) ||
        product.composition.toLowerCase().includes(q) ||
        product.shortDesc.toLowerCase().includes(q) ||
        product.targetCrops.some(crop => crop.toLowerCase().includes(q));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDownloadSheet = (product) => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0E7DC] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174D36]/10 text-[#174D36] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{lang === 'mr' ? 'लोकमंगल संपूर्ण उत्पादन शृंखला' : 'Complete Product Portfolio'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251D] tracking-tight font-devanagari">
              {lang === 'mr' 
                ? 'भरघोस उत्पादनासाठी संशोधन-आधारित कृषी उत्पादने' 
                : 'High-Yield Bio & Chemical Agro Solutions'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4B5A50] max-w-2xl font-semibold">
              {lang === 'mr'
                ? 'सोलापूर आणि वडोदरा येथील ५०,००० मे.टन क्षमतेच्या आधुनिक प्लँट्समध्ये तयार होणारी प्रमाणित खते. नावानुसार किंवा वर्गवारीनुसार शोधा.'
                : 'Engineered to precision in our 50,000 MT capacity Solapur & Vadodara manufacturing units. Browse products by category or target crop.'}
            </p>
          </div>

          {/* Search Box (Yara reference) */}
          <div className="relative w-full md:w-88">
            <Search className="w-4 h-4 text-[#70A95B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'mr' ? 'खताचे नाव, घटक किंवा पिक शोधा...' : 'Search by name, crop or formulation...'}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#F7F9F5] border border-[#E0E7DC] focus:border-[#174D36] focus:bg-white text-sm text-[#17251D] placeholder-[#4B5A50]/70 font-semibold outline-none transition-all shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#4B5A50] hover:text-black"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs (Yara & Biostadt reference) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#0D2E20] text-[#C5DF83] shadow-md scale-102 ring-2 ring-[#C5DF83]/50'
                  : 'bg-[#F7F9F5] text-[#4B5A50] hover:bg-[#E0E7DC] hover:text-[#17251D]'
              }`}
            >
              {lang === 'mr' ? cat.marathi : cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-[#F7F9F5] rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col group hover:-translate-y-2 hover:shadow-2xl ${
                product.highlight 
                  ? 'border-[#70A95B] ring-1 ring-[#70A95B]/50 shadow-md' 
                  : 'border-[#E0E7DC] hover:border-[#70A95B]'
              }`}
            >
              {/* Product Visual Header with Real Image */}
              <div className="relative h-56 overflow-hidden bg-[#0D2E20]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                
                {/* Category & Highlight Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 bg-white/95 text-[#0D2E20] backdrop-blur-md rounded-full shadow-md">
                    {product.categoryName}
                  </span>
                  {product.tag && (
                    <span className="text-[10px] font-extrabold tracking-wide px-2.5 py-1 bg-[#D97706] text-white rounded-full shadow-md animate-pulse">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Packaging preview pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-white font-bold bg-black/50 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20">
                  <Package className="w-3.5 h-3.5 text-[#C5DF83]" />
                  <span>{product.packings.join(', ')}</span>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-[#17251D] group-hover:text-[#174D36] transition-colors leading-snug font-devanagari">
                    {lang === 'mr' ? product.marathiName : product.name}
                  </h3>
                  <p className="text-xs font-bold text-[#2E7D32] mt-0.5">
                    {product.name}
                  </p>

                  <div className="mt-3 p-3 rounded-2xl bg-white border border-[#E0E7DC] text-xs space-y-1">
                    <div className="text-[10px] text-[#4B5A50] font-extrabold uppercase tracking-wider">
                      {lang === 'mr' ? 'रासायनिक घटक व प्रमाण:' : 'Composition:'}
                    </div>
                    <div className="text-[#17251D] font-mono font-bold line-clamp-1">
                      {product.composition}
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#4B5A50] leading-relaxed font-semibold line-clamp-2">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Target Crops Pills */}
                <div>
                  <div className="text-[11px] text-[#4B5A50] font-extrabold uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Wheat className="w-3.5 h-3.5 text-[#70A95B]" />
                    <span>{lang === 'mr' ? 'शिफारस केलेली पिके:' : 'Target Crops:'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-semibold">
                    {product.targetCrops.slice(0, 4).map((crop, idx) => (
                      <span key={idx} className="text-[11px] bg-white text-[#17251D] border border-[#E0E7DC] px-2.5 py-0.5 rounded-lg">
                        {crop}
                      </span>
                    ))}
                    {product.targetCrops.length > 4 && (
                      <span className="text-[11px] bg-emerald-100 text-[#0D2E20] font-bold px-2 py-0.5 rounded-lg">
                        +{product.targetCrops.length - 4} अधिक
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button: Opens Mahadhan-style Technical Modal */}
                <div className="pt-3 border-t border-[#E0E7DC]">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-extrabold uppercase tracking-wider bg-[#0D2E20] hover:bg-[#174D36] text-[#C5DF83] shadow-md hover:shadow-lg transition-all group-hover:scale-102"
                  >
                    <FileText className="w-4 h-4 text-[#C5DF83]" />
                    <span>{lang === 'mr' ? 'तपशीलवार माहिती व डोस (Technical Sheet)' : 'View Technical Sheet & Dose'}</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Mahadhan-Inspired Comprehensive Product Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E0E7DC] relative max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0D2E20] to-[#174D36] text-white p-6 sm:p-8 relative shrink-0">
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase font-extrabold tracking-widest px-3 py-0.5 rounded-full bg-[#C5DF83] text-[#0D2E20]">
                  {activeModalProduct.categoryName}
                </span>
                {activeModalProduct.tag && (
                  <span className="text-xs uppercase font-bold text-amber-300">
                    ★ {activeModalProduct.tag}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari">
                {lang === 'mr' ? activeModalProduct.marathiName : activeModalProduct.name}
              </h2>
              <p className="text-sm font-semibold text-[#C5DF83] mt-0.5">
                {activeModalProduct.name}
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Chemical Composition Box */}
              <div className="p-4 rounded-2xl bg-[#F7F9F5] border border-[#E0E7DC]">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#174D36] mb-1">
                  {lang === 'mr' ? 'रासायनिक घटक व प्रमाणित प्रमाण' : 'Guaranteed Chemical Composition'}
                </h4>
                <p className="text-base font-mono font-bold text-[#17251D]">
                  {activeModalProduct.composition}
                </p>
              </div>

              {/* Recommended Dosage & Method */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-[#E0E7DC] shadow-sm">
                  <span className="text-xs text-[#4B5A50] font-extrabold uppercase tracking-wider block mb-1">
                    {lang === 'mr' ? 'शिफारस केलेला डोस' : 'Recommended Dosage'}
                  </span>
                  <p className="text-sm font-extrabold text-[#174D36]">
                    {activeModalProduct.dosages}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E0E7DC] shadow-sm">
                  <span className="text-xs text-[#4B5A50] font-extrabold uppercase tracking-wider block mb-1">
                    {lang === 'mr' ? 'उपलब्ध पॅकिंग' : 'Available Packing'}
                  </span>
                  <p className="text-sm font-extrabold text-[#174D36]">
                    {activeModalProduct.packings.join(', ')}
                  </p>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-base font-extrabold text-[#17251D] mb-3 flex items-center gap-2 font-devanagari">
                  <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
                  <span>{lang === 'mr' ? 'महत्त्वाचे कृषी फायदे व कार्यपद्धती' : 'Key Agronomic Benefits'}</span>
                </h4>
                <div className="space-y-2.5">
                  {activeModalProduct.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5A50] leading-relaxed font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#70A95B] mt-1.5 shrink-0"></span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Crops */}
              <div>
                <h4 className="text-sm font-extrabold text-[#17251D] mb-2 flex items-center gap-2 font-devanagari">
                  <Wheat className="w-4 h-4 text-[#70A95B]" />
                  <span>{lang === 'mr' ? 'शिफारस केलेली प्रमुख पिके' : 'Recommended Crops'}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProduct.targetCrops.map((c, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#F7F9F5] border border-[#E0E7DC] text-xs font-bold text-[#17251D] rounded-xl">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              {activeModalProduct.technicalSpecs && (
                <div className="border-t border-[#E0E7DC] pt-4">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4B5A50] mb-2">
                    {lang === 'mr' ? 'तांत्रिक तपशील' : 'Technical Specifications'}
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(activeModalProduct.technicalSpecs).map(([key, val]) => (
                      <div key={key} className="bg-[#F7F9F5] p-3 rounded-xl border border-[#E0E7DC]">
                        <span className="text-[10px] text-[#4B5A50] uppercase font-bold block">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="font-bold text-[#17251D]">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Actions Footer */}
            <div className="p-4 sm:p-6 bg-[#F7F9F5] border-t border-[#E0E7DC] flex flex-wrap items-center justify-between gap-4 shrink-0">
              <button
                onClick={() => handleDownloadSheet(activeModalProduct)}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold bg-white border border-[#E0E7DC] text-[#0D2E20] hover:bg-emerald-50 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-[#70A95B]" />
                <span>
                  {downloadSuccess 
                    ? (lang === 'mr' ? 'तांत्रिक पत्रक डाऊनलोड झाले!' : 'Technical Sheet Downloaded!') 
                    : (lang === 'mr' ? 'तांत्रिक पत्रक डाऊनलोड (PDF)' : 'Download Technical Sheet (PDF)')}
                </span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="#contact"
                  onClick={() => setActiveModalProduct(null)}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-extrabold uppercase tracking-wider bg-[#0D2E20] hover:bg-[#174D36] text-[#C5DF83] shadow-md transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#C5DF83]" />
                  <span>{lang === 'mr' ? 'घाऊक मागणी / डीलरशिप नोंदवा' : 'Inquire For Dealership'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
