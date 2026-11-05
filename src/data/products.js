export const productCategories = [
  { id: 'all', name: 'All Products', marathi: 'सर्व उत्पादने' },
  { id: 'secondary', name: 'Secondary Nutrients (Magnet)', marathi: 'दुय्यम अन्नद्रव्ये (मॅग्नेट)' },
  { id: 'npk', name: 'NPK Mixtures', marathi: 'एन.पी.के. मिश्र खते' },
  { id: 'water-soluble', name: 'Water Soluble (Faster+)', marathi: 'विद्राव्य खते (फास्टर)' },
  { id: 'micronutrients', name: 'Micronutrients & Straight', marathi: 'सूक्ष्म अन्नद्रव्ये' },
  { id: 'bio-organic', name: 'Bio & Organic Fertilizers', marathi: 'जैविक व सेंद्रिय खते' },
  { id: 'bio-stimulants', name: 'Bio-Stimulants & Growth Promoters', marathi: 'बायो-स्टिम्युलांट्स व टॉनिक' },
  { id: 'bio-protection', name: 'Bio-Pesticides & Fungicides', marathi: 'जैविक कीटकनाशक व बुरशीनाशक' },
];

export const productsData = [
  // Flagship Secondary Nutrient
  {
    id: 'magnet',
    name: 'Magnet (Ca + Mg + S)',
    marathiName: 'मॅग्नेट (कॅल्शियम + मॅग्नेशियम + सल्फर)',
    category: 'secondary',
    categoryName: 'Secondary Nutrients',
    highlight: true,
    tag: 'Flagship Soil Conditioner',
    shortDesc: 'Scientifically balanced Ca:Mg:S formulation designed to reverse soil salinity, stimulate cell division, and boost crop yield by 20-30%.',
    composition: 'Ca + Mg + S (Ratio 10:05:10) in Granule & Powder forms',
    dosages: '100 Kg per acre for soil application',
    packings: ['25 Kg Bag', '50 Kg Bag'],
    forms: ['Granules', 'Powder'],
    targetCrops: ['Sugarcane', 'Banana', 'Soybean', 'Cotton', 'Onion', 'Pomegranate', 'Grapes', 'Vegetables'],
    benefits: [
      'Calcium (Ca) multiplies cell division and acts as a catalyst for maximum NPK uptake.',
      'Magnesium (Mg) activates chlorophyll synthesis, keeps crops lush green, and strengthens resistance against fungal pathogens.',
      'Sulphur (S) elevates plant metabolism and directly yields 20% to 30% higher harvest output.',
      'Prevents soil salinity and restores soil porosity damaged by excessive chemical NPK.',
      'Available in both granule and powder form for effortless spreading and drip compatibility.'
    ],
    technicalSpecs: {
      activeIngredients: 'Calcium 10%, Magnesium 5%, Sulphur 10%',
      phRange: '6.5 - 7.5',
      solubility: 'Soil conditioning slow-release & fast absorption',
      shelfLife: '36 Months'
    },
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80'
  },

  // NPK Mixtures
  {
    id: 'krishi-vardan-18-18-10',
    name: 'Krishi Vardan 18:18:10',
    marathiName: 'कृषी वरदान १८:१८:१०',
    category: 'npk',
    categoryName: 'NPK Mixture Fertilizer',
    highlight: true,
    tag: 'Complete Basal Nutrition',
    shortDesc: 'Scientifically formulated NPK mixture providing uniform balanced nutrition during initial establishment and active vegetative growth.',
    composition: 'N(Total) = 18%, P(Total) = 18%, P(Citrate Soluble) = 18%, P(Water Soluble) = 9%, K(Total) = 10%',
    dosages: '100 Kg per acre at sowing or basal stage',
    packings: ['50 Kg Bag'],
    forms: ['Granules'],
    targetCrops: ['Sugarcane', 'Cotton', 'Vegetables', 'Fruits', 'Cereals', 'Pulses'],
    benefits: [
      'Balanced nitrogen provides instant synthesis of green chlorophyll, proteins, and carbohydrates.',
      'Dual phosphorus (citrate + water soluble) ensures immediate rooting and sustained nutrient supply.',
      'Potassium enhances cell wall thickness, drought tolerance, and fruit weight.',
      'Improves taste, natural color, uniform size, and market value of harvest.'
    ],
    technicalSpecs: {
      form: 'Dry uniform granules',
      applicationStage: 'Basal and first top dressing',
      moistureContent: 'Max 1.5%'
    },
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'krishi-vardan-20-20-00',
    name: 'Krishi Vardan 20:20:00',
    marathiName: 'कृषी वरदान २०:२०:००',
    category: 'npk',
    categoryName: 'NPK Mixture Fertilizer',
    highlight: false,
    tag: 'Vegetative Accelerator',
    shortDesc: 'High-nitrogen and high-phosphorus granular mixture designed for rapid early root proliferation and robust tillering.',
    composition: 'N(Total) = 20%, P(Total) = 20%, P(Citrate Soluble) = 20%, P(Water Soluble) = 10%, K(Total) = 0%',
    dosages: '100 Kg per acre',
    packings: ['50 Kg Bag'],
    forms: ['Granules'],
    targetCrops: ['Sugarcane', 'Cotton', 'Maize', 'Paddy', 'Wheat', 'Vegetables'],
    benefits: [
      'Accelerates photosynthesis rate and active cell multiplication in young crops.',
      'Develops vigorous white root system for enhanced moisture and micronutrient extraction.',
      'Develops natural defense against soil-borne pests and seedling blight.'
    ],
    technicalSpecs: {
      form: 'Granular',
      applicationStage: 'Sowing / Basal Application',
      packing: '50 Kg HDPE laminated bag'
    },
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'
  },

  // Water Soluble Fertilizers (Faster+)
  {
    id: 'faster-19-19-19',
    name: 'Faster 19:19:19 (NPK 100% WSF)',
    marathiName: 'फास्टर १९:१९:१९ (१००% विद्राव्य खत)',
    category: 'water-soluble',
    categoryName: 'Water Soluble Fertilizers',
    highlight: true,
    tag: 'Foliar & Drip Grade',
    shortDesc: '100% water-soluble balanced fertilizer fortified with chelated trace elements for rapid foliar absorption and drip fertigation.',
    composition: 'Nitrogen 19%, Phosphorus 19%, Potassium 19% + EDTA Chelated Micronutrients',
    dosages: 'Foliar Spray: 4-5 gm per liter | Drip: 2-3 Kg per acre per application',
    packings: ['1 Kg Pouch', '25 Kg Bag'],
    forms: ['100% Crystalline Powder'],
    targetCrops: ['All Horticulture Crops', 'Grapes', 'Pomegranate', 'Banana', 'Sugarcane', 'Tomato', 'Capsicum'],
    benefits: [
      'Fully dissolves without leaving nozzle-clogging residue or sedimentation.',
      'Fortified with chelated micronutrients preventing unseen micro-deficiencies.',
      'Quick vegetative recovery following stress, pest shock, or erratic weather.',
      'Significantly reduces fruit and flower dropping, resulting in larger, uniform produce.'
    ],
    technicalSpecs: {
      purity: '100% water soluble',
      chlorides: '< 0.5% (Safe for sensitive crops)',
      foliarCompatibility: 'Compatible with standard agrochemicals'
    },
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'faster-00-52-34',
    name: 'Faster 00:52:34 (MKP)',
    marathiName: 'फास्टर ००:५२:३४ (मोनो पोटॅशियम फॉस्फेट)',
    category: 'water-soluble',
    categoryName: 'Water Soluble Fertilizers',
    highlight: false,
    tag: 'Profuse Flowering & Root Booster',
    shortDesc: 'Zero nitrogen high phosphorus & potassium formulation to induce abundant flower budding and stop vegetative overgrowth.',
    composition: 'P2O5 = 52%, K2O = 34%',
    dosages: '4-5 gm per liter of water for spray; 2-3 Kg per acre via fertigation',
    packings: ['1 Kg Pouch', '25 Kg Bag'],
    forms: ['Crystalline Powder'],
    targetCrops: ['Pomegranate', 'Grapes', 'Cotton', 'Chilli', 'Tomato', 'Floriculture'],
    benefits: [
      'Induces dense flowering, enhances pollen vitality, and maximizes fruit set ratio.',
      'Directly halts excess shoot growth and redirects energy into reproductive structures.',
      'Helps manage powdery mildew and fungal vulnerabilities through physiological hardening.'
    ],
    technicalSpecs: {
      grade: 'Mono Potassium Phosphate',
      waterSolubility: 'Complete instant dissolution',
      applicationStage: 'Pre-flowering and flower setting stage'
    },
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'faster-13-00-45',
    name: 'Faster 13:00:45 (Potassium Nitrate)',
    marathiName: 'फास्टर १३:००:४५ (पोटॅशियम नायट्रेट)',
    category: 'water-soluble',
    categoryName: 'Water Soluble Fertilizers',
    highlight: false,
    tag: 'Fruit Sizing & Maturation',
    shortDesc: 'Nitrate nitrogen with high potassium for exceptional fruit expansion, sugar accumulation, and lustrous skin finish.',
    composition: 'N(Nitrate) = 13%, K2O = 45%',
    dosages: '5 gm per liter for spray; 2.5-4 Kg per acre via drip',
    packings: ['1 Kg Pouch', '25 Kg Bag'],
    forms: ['Crystalline Powder'],
    targetCrops: ['Banana', 'Sugarcane', 'Pomegranate', 'Grapes', 'Citrus', 'Papaya'],
    benefits: [
      'Readily absorbed nitrate accelerates potassium movement into fruit tissues.',
      'Increases fruit weight, brix level (sweetness), and export-grade uniform color.',
      'Enhances post-harvest firmness and shelf life for extended transport.'
    ],
    technicalSpecs: {
      composition: 'KNO3 (Potassium Nitrate)',
      dripCompatibility: 'Instantaneous dissolution'
    },
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cannon-calcium-nitrate',
    name: 'Cannon (Calcium Nitrate 100% WS)',
    marathiName: 'कॅनॉन (कॅल्शियम नायट्रेट १००% विद्राव्य)',
    category: 'water-soluble',
    categoryName: 'Water Soluble Fertilizers',
    highlight: false,
    tag: 'Cell Wall Strength & Shine',
    shortDesc: '100% water-soluble source of immediate nitrate nitrogen and soluble calcium for premium produce texture and crack resistance.',
    composition: 'N-NO3 = 14.4%, N-NH4 = 1.1%, Total N = 15.5%, Soluble Ca = 18.8%',
    dosages: '1-10 gm per liter of water as per crop stage',
    packings: ['500 gm', '1000 gm', '25 Kg'],
    forms: ['Fine crystalline granules'],
    targetCrops: ['Tomato', 'Pomegranate', 'Grapes', 'Capsicum', 'Apple', 'Watermelon'],
    benefits: [
      'Imparts dark green lushness to leaves and boosts overall assimilation.',
      'Eliminates blossom end rot in tomatoes and prevents fruit cracking in pomegranates and grapes.',
      'Produces regular symmetrical shape, dense skin texture, and extended keeping quality.'
    ],
    technicalSpecs: {
      purity: 'Grade A Agricultural Nitrate',
      calciumContent: '18.8% pure available calcium'
    },
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80'
  },

  // Micronutrients & Straight Fertilizers
  {
    id: 'lancer-micronutrient',
    name: 'Lancer (Balanced Micronutrients)',
    marathiName: 'लान्सर (संतुलित सूक्ष्म अन्नद्रव्ये)',
    category: 'micronutrients',
    categoryName: 'Micronutrients',
    highlight: true,
    tag: 'Multi-Trace Element Power',
    shortDesc: 'Complete 6-in-1 micronutrient complex (Fe, Mn, Zn, Cu, Mo, B) available in liquid and soil application formats.',
    composition: 'Zinc (Zn) 3.0%, Iron (Fe) 2.5%, Manganese (Mn) 1.0%, Copper (Cu) 1.0%, Boron (B) 0.5%, Molybdenum (Mo) 0.1%',
    dosages: 'Liquid Spray: 500 ml per 200 L water | Soil Application: 10 Kg powder per acre',
    packings: ['Liquid: 250 ml, 500 ml, 1 L, 5 L', 'Powder: 5 Kg, 10 Kg, 25 Kg'],
    forms: ['Liquid Suspension', 'Soil Powder'],
    targetCrops: ['Sugarcane', 'Cotton', 'Banana', 'Grapes', 'Pomegranate', 'Pulses', 'Oilseeds'],
    benefits: [
      'Iron & Manganese enhance continuous chlorophyll production and energy transfer.',
      'Zinc triggers auxin synthesis, elongating internodes and expanding leaf lamina.',
      'Copper and Boron ensure proper pollination, cell elongation, and disease defense.',
      'Molybdenum assists in biological nitrogen fixation and nodulation.'
    ],
    technicalSpecs: {
      standard: 'State fertilizer control order approved formulation',
      solubility: '100% bio-available'
    },
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spark-chelated-micronutrients',
    name: 'Spark (Chelated Micronutrients + Amino)',
    marathiName: 'स्पार्क (चिलेटेड सूक्ष्म अन्नद्रव्ये + अमिनो ॲसिड)',
    category: 'micronutrients',
    categoryName: 'Micronutrients',
    highlight: false,
    tag: 'Fast Bioavailability Booster',
    shortDesc: 'Advanced chelated micronutrient formula infused with plant-derived amino acids for instant respiratory and photosynthetic surge.',
    composition: 'Fe 2.5%, Mn 1.0%, Zn 3.0%, Cu 1.0%, Mo 0.1%, B 0.5% combined with organic Amino Acid matrix',
    dosages: '250 gm with 200 liters of water for foliar spray',
    packings: ['250 gm', '500 gm'],
    forms: ['Micro-granule / Soluble Powder'],
    targetCrops: ['Vegetables', 'Fruits', 'Cotton', 'Flowers', 'Cereals'],
    benefits: [
      'Rapidly penetrates plant cuticle without scorch marks even under hot afternoon conditions.',
      'Amino acid complex acts as a biostimulatory carrier, activating photo-hormones.',
      'Promotes robust pollination, minimizes flower abortion, and boosts fruit retention.'
    ],
    technicalSpecs: {
      chelationAgent: 'Amino-EDTA organic matrix',
      compatibility: 'Mixes freely with spray solutions'
    },
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lancer-zinc-12',
    name: 'Lancer-12 (Chelated Zinc EDTA)',
    marathiName: 'लान्सर-१२ (चिलेटेड झिंक १२%)',
    category: 'micronutrients',
    categoryName: 'Straight Micronutrient',
    highlight: false,
    tag: 'Instant Zinc Recovery',
    shortDesc: '12% pure chelated zinc designed to instantly correct rosette leaves, little leaf symptoms, and stunted shoot development.',
    composition: '12% Water Soluble Chelated Zinc (Zn-EDTA)',
    dosages: '100 gm in 150-200 liters of water per spray',
    packings: ['250 gm', '500 gm', '1000 gm'],
    forms: ['Free flowing micro-crystals'],
    targetCrops: ['Paddy', 'Maize', 'Sugarcane', 'Cotton', 'Citrus', 'Vegetables'],
    benefits: [
      'Dissolves rapidly and completely without clogging micro-sprayers.',
      'Corrects khaira disease in paddy and interveinal chlorosis in sugarcane.',
      'Boosts protein synthesis and enzymatic activity in young shoots.'
    ],
    technicalSpecs: {
      purity: 'Zinc 12.0% min',
      phStability: 'Stable in pH range 4.0 - 9.0'
    },
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'grow-perfect-magnesium',
    name: 'Grow Perfect (Magnesium Sulphate)',
    marathiName: 'ग्रो परफेक्ट (मॅग्नेशियम सल्फेट)',
    category: 'micronutrients',
    categoryName: 'Straight Nutrient',
    highlight: false,
    tag: 'Dark Green Lush Canopy',
    shortDesc: 'High purity Magnesium Sulphate (9.6% MgSO4) that rejuvenates dull yellowing foliage and accelerates photosynthesis.',
    composition: 'MgSO4 = 9.6% with natural Sulphur',
    dosages: 'Spray: 3 gm per liter of water | Soil: 15-20 Kg per acre',
    packings: ['1 Kg', '25 Kg Bag'],
    forms: ['Crystal powder'],
    targetCrops: ['Cotton', 'Sugarcane', 'Banana', 'Vegetables', 'Turmeric'],
    benefits: [
      'Prevents leaf reddening in cotton and interveinal yellowing in older leaves.',
      'Induces systemic resistance against fungal pathogens.',
      'Boosts energy storage in developing tubers and canes.'
    ],
    technicalSpecs: {
      grade: 'Technical Agro Grade',
      moisture: '< 0.5%'
    },
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80'
  },

  // Bio-Fertilizers & Organic Inputs
  {
    id: 'champion-organic',
    name: 'Champion Organic Manure',
    marathiName: 'चॅम्पियन सेंद्रिय खत',
    category: 'bio-organic',
    categoryName: 'Organic Fertilizers',
    highlight: true,
    tag: 'Soil Carbon & Fertility Restorer',
    shortDesc: 'Rich biologically enriched organic manure with 15% Organic Carbon, revitalizing tired soils and boosting microbial life.',
    composition: 'Organic Carbon 15%, Nitrogen 1%, Phosphorus 1%, Potash 1%, pH 6.5-7.5, Moisture 25%',
    dosages: '200 Kg per acre at field preparation or basal stage',
    packings: ['50 Kg Bags'],
    forms: ['Conditioned Organic Pellets / Granules'],
    targetCrops: ['Sugarcane', 'Cotton', 'Banana', 'Pomegranate', 'Grapes', 'Vegetables', 'Polyhouse Crops'],
    benefits: [
      'Drastically increases soil Organic Carbon (OC), moisture holding capacity, and soil aeration.',
      'Contains living beneficial micro-organisms that convert locked insoluble NPK into soluble plant-absorbable forms.',
      'Reduces chemical fertilizer requirement by up to 25-30% while preserving ecology.',
      'Safeguards against soil compaction, salinity hardening, and chemical toxicity.'
    ],
    technicalSpecs: {
      organicCarbon: '15% minimum',
      cnRatio: '< 20:1',
      ph: '6.5 - 7.5'
    },
    image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'neem-organic-powder',
    name: 'Lokmangal Pure Neem Powder',
    marathiName: 'लोकमंगल प्युअर नीम पावडर',
    category: 'bio-organic',
    categoryName: 'Organic Fertilizers',
    highlight: false,
    tag: 'Nematode & Soil Pest Deterrent',
    shortDesc: 'Cold-processed neem cake rich in Azadirachtin, conditioning soil pH, controlling subterranean pests, and moderating nitrogen release.',
    composition: 'Pure Neem Cake containing Azadirachtin 200 - 300 PPM, natural NPK and trace minerals',
    dosages: '50 to 100 Kg per acre',
    packings: ['50 Kg Bags'],
    forms: ['Powder / Flakes'],
    targetCrops: ['Sugarcane', 'Pomegranate', 'Banana', 'Ginger', 'Turmeric', 'Vegetables'],
    benefits: [
      'Regulates soil pH and enriches native earthworm and mycorrhizal population.',
      'Inhibits soil nitrification, preventing costly nitrogen leaching and evaporation.',
      'Acts as a natural bio-barrier against nematodes, white grubs, and subterranean larvae.'
    ],
    technicalSpecs: {
      azadirachtin: '200 to 300 PPM guaranteed',
      moisture: 'Max 10%'
    },
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'magsil-silicon-conditioner',
    name: 'Magsil Silicon Soil Conditioner',
    marathiName: 'मॅगसिल सिलिकॉन सॉईल कंडिशनर',
    category: 'bio-organic',
    categoryName: 'Soil Conditioner',
    highlight: false,
    tag: 'Fruit Firmness & Porosity',
    shortDesc: '30% active agricultural silicon that strengthens epidermal cell walls, raises drought resilience, and boosts fruit keeping quality.',
    composition: 'Bio-available Silicon - 30% with natural mineral matrix',
    dosages: '50 to 100 Kg per acre',
    packings: ['50 Kg Bags'],
    forms: ['Granules'],
    targetCrops: ['Sugarcane', 'Pomegranate', 'Grapes', 'Banana', 'Cotton', 'Paddy'],
    benefits: [
      'Silicon deposits in plant cell walls forming a mechanical shield against sucking insects.',
      'Increases soil aeration, cation exchange capacity, and reduces lodging in cereal crops.',
      'Enhances uniform fruit size, vibrant luster, and transport durability.'
    ],
    technicalSpecs: {
      siliconContent: '30% active available SiO2',
      action: 'Soil aeration & mineral solubilizer'
    },
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'azo-azotobacter',
    name: 'Azo (Azotobacter Bio-Fertilizer)',
    marathiName: 'ॲझो (ॲझोटोबॅक्टर जैव खत)',
    category: 'bio-organic',
    categoryName: 'Bio-Fertilizer Culture',
    highlight: false,
    tag: 'Atmospheric Nitrogen Fixer',
    shortDesc: 'Free-living biological nitrogen fixing bacteria that converts atmospheric nitrogen into soil-available ammonium.',
    composition: 'Azotobacter chroococcum viable cell count 1x10^8 CFU/gm',
    dosages: 'Seed Treatment: 500 gm per 10-15 kg seed | Soil: 1-2 Kg mixed with manure per acre',
    packings: ['500 gm', '1 Kg'],
    forms: ['Carrier-based powder / Liquid culture'],
    targetCrops: ['Sugarcane', 'Wheat', 'Sorghum', 'Corn', 'Cotton', 'Turmeric', 'Ginger', 'Greenhouse'],
    benefits: [
      'Fixes 20-25 kg atmospheric Nitrogen per hectare naturally.',
      'Synthesizes beneficial plant hormones (auxins, gibberellins) boosting root vigor.',
      'Improves germination percentage and seedling stand.'
    ],
    technicalSpecs: {
      cfuCount: '1x10^8 cells per gram minimum',
      carrier: 'Sterilized lignite / liquid culture'
    },
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'phospho-psb',
    name: 'Phospho (P.S.B. Phosphate Solubilizer)',
    marathiName: 'फॉस्फो (पी.एस.बी. फॉस्फेट सोल्यूबलायझिंग बॅक्टेरिया)',
    category: 'bio-organic',
    categoryName: 'Bio-Fertilizer Culture',
    highlight: false,
    tag: 'Unlocks Fixed Phosphorus',
    shortDesc: 'Beneficial bacterial strain that secretes organic acids to unlock insoluble tricalcium phosphate bound in alkaline and saline soils.',
    composition: 'Pseudomonas striata / Bacillus megaterium 1x10^8 CFU/gm',
    dosages: 'Seed Treatment: 500 gm per 10-15 kg seeds | Drenching/Soil: 1 Kg per acre',
    packings: ['500 gm', '1 Kg'],
    forms: ['Carrier Powder / Liquid'],
    targetCrops: ['Sugarcane', 'Soybean', 'Grapes', 'Pomegranate', 'Cotton', 'All Pulses'],
    benefits: [
      'Solubilizes 30-50% of otherwise unusable native or applied soil phosphorus.',
      'Significantly lowers farmer expenditure on high-cost chemical DAP / SSP.',
      'Stimulates deep root penetration and resistance to early moisture stress.'
    ],
    technicalSpecs: {
      cfuCount: '1x10^8 cells/g',
      shelfLife: '12 Months'
    },
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80'
  },

  // Bio-Stimulants & Growth Promoters
  {
    id: 'speed-bio-stimulant',
    name: 'Speed (Systemic Bio-Stimulant)',
    marathiName: 'स्पीड (बायो-स्टिम्युलांट)',
    category: 'bio-stimulants',
    categoryName: 'Bio-Stimulants',
    highlight: true,
    tag: 'Silicon + Amino Powerhouse',
    shortDesc: 'High-potency systemic bio-stimulant formulated with 30% Silicon and 50% plant amino acids for remarkable growth acceleration.',
    composition: 'Balanced Systemic Bio-Stimulant with Silicon - 30%, Amino Acids - 50%, bio-enzymes & vitamins',
    dosages: '1 to 2 ml per liter of water for foliar spray',
    packings: ['250 ml', '500 ml', '1 Litre'],
    forms: ['Concentrated Liquid'],
    targetCrops: ['All Fruits', 'Vegetables', 'Cotton', 'Sugarcane', 'Floriculture'],
    benefits: [
      'Hydrolyzed plant proteins with active enzymes spark instant hormone synthesis.',
      'Reduces heavy flower and immature fruit drop under extreme heat or unseasonal cold.',
      'Silicon component builds pest resistance and strengthens stem rigidity.',
      'Noticeably enhances fruit uniformity, gloss, and market price.'
    ],
    technicalSpecs: {
      activeMatrix: 'Silicon 30% + Amino Acid 50%',
      ph: '6.0 - 7.0 (Non-phytotoxic)'
    },
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'growth-power',
    name: 'Growth Power',
    marathiName: 'ग्रोथ पॉवर',
    category: 'bio-stimulants',
    categoryName: 'Bio-Stimulants',
    highlight: false,
    tag: 'Seaweed & Folic Formulation',
    shortDesc: 'Ascophyllum nodosum seaweed extract enriched with hydrolyzed protein and folic acid for explosive branching and yield.',
    composition: 'Protein Hydrolyzed - 10%, Seaweed Extract - 36%, Folic Acid - PPM trace',
    dosages: '1 to 2 ml per liter of water',
    packings: ['250 ml', '500 ml', '1 Litre'],
    forms: ['Water-soluble liquid'],
    targetCrops: ['All Horticulture & Agricultural Crops'],
    benefits: [
      '100% organic seaweed bioactive compounds stimulate cytokinin-like shoot branching.',
      'Enhances yield weight and fruit diameter without toxic chemical residues.',
      'Completely non-toxic to beneficial bees, soil fauna, and human handlers.'
    ],
    technicalSpecs: {
      seaweedOrigin: 'Pure marine Ascophyllum nodosum',
      compatibility: 'Tank-mix safe with all common sprays'
    },
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'humic-rich',
    name: 'Humic-Rich (Liquid & Granule)',
    marathiName: 'ह्युमिक-रीच (लिक्विड व ग्रॅन्युल)',
    category: 'bio-stimulants',
    categoryName: 'Growth Promoter',
    highlight: false,
    tag: 'Aggressive White Root Multiplier',
    shortDesc: 'Potassium humate with amino and folic acids that generates a massive dense mesh of active white roots in young plants.',
    composition: 'Humic Acid - 12%, Amino Acid - 12%, Folic Acid - 300 PPM',
    dosages: 'Liquid: 2-3 ml per liter of water | Granule: 10 Kg per acre for soil broadcast',
    packings: ['Liquid: 250 ml, 500 ml, 1 L', 'Granules: 5 Kg, 10 Kg Bags'],
    forms: ['Soluble Liquid', 'Coated Granules'],
    targetCrops: ['Sugarcane', 'Cotton', 'Banana', 'Chilli', 'Onion', 'All Vegetables'],
    benefits: [
      'Generates explosive white feeder root formation within 7-10 days of application.',
      'Improves fertilizer utilization efficiency and nutrient absorption from deep soil.',
      'Helps crops recover rapidly from waterlogged or drought stress shocks.'
    ],
    technicalSpecs: {
      humicSource: 'High-grade natural Leonardite deposit extract',
      granuleCoating: 'Slow-dissolving protective carrier'
    },
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nitro-charge',
    name: 'Nitro Charge (Flowering Stimulant)',
    marathiName: 'नायट्रो चार्ज (फ्लॉवरिंग बूस्टर)',
    category: 'bio-stimulants',
    categoryName: 'Flowering Booster',
    highlight: false,
    tag: 'Abundant Flower Setting',
    shortDesc: 'Nitrobenzene 20% w/w with pure plant amino acids, engineered to trigger synchronous profuse flowering and stop flower dropping.',
    composition: 'Nitrobenzene 20% w/w, Natural Amino Acid 12%, Solvent 38%, Emulsifier 30%',
    dosages: '2 to 3 ml per liter of water as fine spray',
    packings: ['500 ml', '1000 ml'],
    forms: ['Emulsifiable Concentrate'],
    targetCrops: ['Cotton', 'Soybean', 'Chilli', 'Tomato', 'Pomegranate', 'Paddy', 'Groundnut'],
    benefits: [
      'Stimulates high flower bud initiation and increases female flower proportion.',
      'Prevents premature drop of blossoms and newly formed small fruits.',
      'Proven yield enhancement across diverse crops by up to 20-30%.'
    ],
    technicalSpecs: {
      activeIngredient: 'Nitrobenzene 20% w/w',
      aminoMatrix: '12% natural L-amino acids'
    },
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zicom-rooting',
    name: 'Zicom (Soluble Rooting Stimulant)',
    marathiName: 'झिकॉम (रूटिंग स्टिम्युलांट)',
    category: 'bio-stimulants',
    categoryName: 'Rooting Specialist',
    highlight: false,
    tag: 'Nursery & Transplanting Champion',
    shortDesc: 'High concentrated Humic 50% + Amino 20% + Ascorbic Acid + Vitamins A & E formulation for root establishment.',
    composition: 'Humic Acid 50%, Amino Acid 20%, Ascorbic Acid 20%, Vitamin-A, Vitamin-E',
    dosages: 'Spray: 2 gm per liter | Nursery drench: 10 ml per sq. ft.',
    packings: ['250 gm', '500 gm'],
    forms: ['Soluble Powder'],
    targetCrops: ['Cotton', 'Soybean', 'Chilli', 'Onion', 'Tomato', 'Banana', 'Grapes', 'Ginger', 'Turmeric'],
    benefits: [
      'Accelerates white root multiplication and broadens branch and tiller count.',
      'Vitamins A & E boost antioxidant defense against transplanting stress.',
      'Delivers unmatched uniformity in nursery bed seedlings.'
    ],
    technicalSpecs: {
      humicConcentration: '50% active humic fraction',
      ascorbicAcid: '20% active vitamin C equivalent'
    },
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stick-up-adjuvant',
    name: 'Stick Up (Super Wetting Agent & Spreader)',
    marathiName: 'स्टिक अप (सुपर स्प्रेडर व ॲक्टिव्हेटर)',
    category: 'bio-stimulants',
    categoryName: 'Adjuvant & Spreader',
    highlight: false,
    tag: 'Spray Efficiency Multiplier',
    shortDesc: 'Organosilicone non-ionic super spreader and penetrant that reduces spray droplet surface tension and prevents rain washout.',
    composition: 'Specialized non-ionic polyether trisiloxane surfactant complex',
    dosages: '1 ml in 3 to 5 liters of water',
    packings: ['500 ml', '1000 ml', '5 Litres'],
    forms: ['Clear Concentrated Liquid'],
    targetCrops: ['All agricultural and horticultural sprays'],
    benefits: [
      'Spreads spray droplets instantly across waxy plant cuticles and hairy leaves.',
      'Improves penetration of insecticides, fungicides, and foliar nutrients by 200%.',
      'Provides excellent rain-fastness within 30 minutes of spray application.'
    ],
    technicalSpecs: {
      surfaceTension: '< 22 dynes/cm',
      nature: 'Non-ionic, completely neutral'
    },
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80'
  },

  // Bio-Pesticides & Bio-Fungicides
  {
    id: 'action-bio-pesticide',
    name: 'Action (Botanical Bio-Pesticide)',
    marathiName: 'ॲक्शन (जैविक कीटकनाशक)',
    category: 'bio-protection',
    categoryName: 'Bio-Pesticides',
    highlight: true,
    tag: 'Natural Larva & Caterpillar Shield',
    shortDesc: 'Pure herbal alkaloid and wild botanical oil emulsion containing Pongamia, Moringa, Vitex, and Asafoetida against aggressive lepidopteran caterpillars.',
    composition: 'Alkaloid & fatty acid salts with Asafoetida (Hing) 30%, Pongamia glabra (Karanj) 30%, Moringa oleifera 20%, Vitex Negundo (Nirgudi) 20%',
    dosages: '1.3 ml to 1.5 ml per liter of water for foliar spray',
    packings: ['250 ml', '500 ml', '1 Litre'],
    forms: ['Botanical Emulsion'],
    targetCrops: ['Cotton', 'Soybean', 'Gram', 'Vegetables', 'Pomegranate', 'Horticulture'],
    benefits: [
      'Effectively controls Heliothis (bollworm), Spodoptera (armyworm), and fruit borers.',
      'Acts via multiple non-chemical modes: anti-feedant, ovicidal, and repellent.',
      'Zero chemical residue; zero withholding period; safe for export produce.'
    ],
    technicalSpecs: {
      source: '100% cold-pressed herbal botanical extracts',
      residueStatus: 'Zero chemical residues (APEDA compliant)'
    },
    image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ben-10-bio-pesticide',
    name: 'Ben-10 (Sucking Pest Specialist)',
    marathiName: 'बेन-१० (रसशोषक कीटक नियंत्रक)',
    category: 'bio-protection',
    categoryName: 'Bio-Pesticides',
    highlight: false,
    tag: 'Thrips, Mites & Whitefly Defense',
    shortDesc: 'Potent wild botanical formulation (Calotropis, Lantana, Ipomoea) targeting resistant thrips, red mites, whiteflies, and aphids.',
    composition: 'Alkaloid & fatty acids with Calotropis gigantea (Rui) 30%, Lantana camara (Ghaneri) 20%, Ipomoea carnea (Besharm) 20%',
    dosages: '1.3 ml to 1.5 ml per liter of water',
    packings: ['250 ml', '500 ml', '1 Litre'],
    forms: ['Liquid Botanical Concentrate'],
    targetCrops: ['Chilli', 'Pomegranate', 'Grapes', 'Tomato', 'Cotton', 'Floriculture'],
    benefits: [
      'Rapid knockdown action on thrips, red spider mites, aphids, and whiteflies.',
      'Disrupts pest spiracles and feeding stylets without damaging beneficial predator insects.',
      'No development of insect resistance unlike synthetic pyrethroids or neonics.'
    ],
    technicalSpecs: {
      botanicalActive: 'Phyto-alkaloid multi-component matrix',
      toxicity: 'Eco-friendly Green Label'
    },
    image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blue-star-fungicide',
    name: 'Blue Star (Phosphorus + Copper Bio-Fungicide)',
    marathiName: 'ब्लू स्टार (फॉस्फरस व कॉपर बुरशीनाशक)',
    category: 'bio-protection',
    categoryName: 'Bio-Fungicides',
    highlight: false,
    tag: 'Downy Mildew & Bacterial Blight',
    shortDesc: 'Systemic and contact protection combining 35% Phosphorus and 80% Copper equivalent against stubborn fungal and bacterial diseases.',
    composition: 'P2O5 - 35%, Cu - 80% complexed matrix',
    dosages: '1 ml per liter of water for protective and curative spray',
    packings: ['500 ml', '1000 ml'],
    forms: ['Suspension Concentrate'],
    targetCrops: ['Pomegranate', 'Grapes', 'Banana', 'Tomato', 'Cotton', 'Citrus'],
    benefits: [
      'Exceptional efficacy against downy mildew, black spot, bacterial blight (Telya), and canker.',
      'Stimulates host plant systemic acquired resistance (SAR) via active phosphite pathway.',
      'Protects fresh tender shoots and fruit berries from fungal spore germination.'
    ],
    technicalSpecs: {
      activeComposition: 'P2O5 35% + Cu 80% bioactive equivalent',
      phRange: 'Optimized for leaf surface stability'
    },
    image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bordo-max',
    name: 'Bordo Max (Bordeaux Mixture Solution)',
    marathiName: 'बोर्डो मॅक्स (बोर्डो मिश्रण)',
    category: 'bio-protection',
    categoryName: 'Bio-Fungicides',
    highlight: false,
    tag: 'Classic Broad Spectrum Protection',
    shortDesc: 'Pre-neutralized, ready-to-use Bordeaux formulation eliminating tedious manual lime slaking and copper mixing in the field.',
    composition: 'Stabilized Bordeaux Mixture equivalent in liquid suspension form',
    dosages: '1 liter per 300 liters of water (approx 3.3 ml per liter)',
    packings: ['500 ml', '1000 ml'],
    forms: ['Stabilized Liquid Suspension'],
    targetCrops: ['Cotton', 'Pomegranate', 'Banana', 'Grapes', 'Vegetables', 'Horticulture'],
    benefits: [
      'Eliminates human error, clogging, and leaf scorch caused by unscientific field Bordeaux preparation.',
      'Forms a resilient protective copper film adhering strongly to bark and foliage even through monsoons.',
      'Combats anthracnose, bacterial canker, collar rot, and fruit spots.'
    ],
    technicalSpecs: {
      standard: 'Scientifically balanced neutral pH formulation',
      shelfLife: '24 Months'
    },
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
  }
];

