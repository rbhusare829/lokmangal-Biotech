import { l, type L } from './types';

export const ESTABLISHED = 2006;
export const YEARS_OF_SERVICE = new Date().getFullYear() - ESTABLISHED;

export const CONTACT = {
  phonePrimary: { label: '+91 99234 04591', tel: '+919923404591', wa: '919923404591' },
  phoneSecond: { label: '+91 99234 04580', tel: '+919923404580', wa: '919923404580' },
  landline: { label: '0217-2357286', tel: '+912172357286' },
  email: 'info@lokmangalbiotech.com',
  facebook: 'https://www.facebook.com/LokmangalBiotechPvtLtd/',
  youtube: 'https://www.youtube.com/@TheLokmangalgroup',
  website: 'https://www.lokmangalbiotech.com',
};

export const COMPANY = {
  name: l('Lokmangal Bio-Tech Pvt. Ltd.', 'लोकमंगल बायोटेक प्रा. लि.'),
  short: l('Lokmangal Biotech', 'लोकमंगल बायोटेक'),
  group: l('Lokmangal Group', 'लोकमंगल समूह'),
  motto: l('Success Through Total Dedication', 'अखंड गतीतून सार्थकता'),
  vision: l(
    'To improve the productivity of agriculture by providing new research-based products.',
    'नवीन संशोधनावर आधारित उत्पादने उपलब्ध करून शेतीची उत्पादकता वाढवणे.',
  ),
  mission: l(
    'To transfer new technology from the laboratory to agricultural land with the help of agricultural scientists.',
    'कृषी शास्त्रज्ञांच्या मदतीने नवीन तंत्रज्ञान प्रयोगशाळेतून थेट शेतापर्यंत पोहोचवणे.',
  ),
};

export const STATS = {
  capacityPerPlant: 25000,
  capacityTotal: 50000,
  dealers: 1000,
  dealerStates: 8,
  yieldGain: 30,
};

export interface Office {
  id: string;
  kind: L;
  title: L;
  lines: L;
  state: L;
  map: string;
}

export const OFFICES: Office[] = [
  {
    id: 'factory',
    kind: l('Factory & laboratory', 'कारखाना व प्रयोगशाळा'),
    title: l('Solapur, Maharashtra', 'सोलापूर, महाराष्ट्र'),
    lines: l('A-61, M.I.D.C., Chincholi, Solapur – 413 255 (M.S.)', 'ए-६१, एम.आय.डी.सी., चिंचोळी, सोलापूर – ४१३ २५५ (महाराष्ट्र)'),
    state: l('Maharashtra', 'महाराष्ट्र'),
    map: 'Lokmangal Biotech A-61 MIDC Chincholi Solapur 413255',
  },
  {
    id: 'corporate',
    kind: l('Corporate office', 'कॉर्पोरेट कार्यालय'),
    title: l('Lokmangal House, Solapur', 'लोकमंगल हाऊस, सोलापूर'),
    lines: l(
      '“Lokmangal House”, 8536-A/11, Murarji Peth, Old Puna Naka, Solapur – 413 001 (M.S.)',
      '“लोकमंगल हाऊस”, ८५३६-ए/११, मुरारजी पेठ, जुना पुणे नाका, सोलापूर – ४१३ ००१ (महाराष्ट्र)',
    ),
    state: l('Maharashtra', 'महाराष्ट्र'),
    map: 'Lokmangal House Murarji Peth Old Pune Naka Solapur 413001',
  },
  {
    id: 'akola',
    kind: l('Warehouse / office', 'गोदाम / कार्यालय'),
    title: l('Akola, Maharashtra', 'अकोला, महाराष्ट्र'),
    lines: l('C/o. Kamal Industrial Corporation, Plot No. F-18, M.I.D.C. Phase – II, Akola (M.S.)', 'द्वारा कमल इंडस्ट्रियल कॉर्पोरेशन, प्लॉट क्र. एफ-१८, एम.आय.डी.सी. फेज – २, अकोला (महाराष्ट्र)'),
    state: l('Maharashtra', 'महाराष्ट्र'),
    map: 'Plot F-18 MIDC Phase II Akola Maharashtra',
  },
  {
    id: 'anantapur',
    kind: l('Warehouse / office', 'गोदाम / कार्यालय'),
    title: l('Anantapur, Andhra Pradesh', 'अनंतपूर, आंध्र प्रदेश'),
    lines: l('C/o Mr. S. Subhakar, Godown No. 39, Association of Dealer Canal, Near Chilli Market, Anantapur – 515 001', 'द्वारा श्री. एस. सुभाकर, गोदाम क्र. ३९, असोसिएशन ऑफ डीलर कॅनॉल, मिरची मार्केटजवळ, अनंतपूर – ५१५ ००१'),
    state: l('Andhra Pradesh', 'आंध्र प्रदेश'),
    map: 'Near Chilli Market Anantapur Andhra Pradesh',
  },
  {
    id: 'vadodara',
    kind: l('Production unit & office', 'उत्पादन केंद्र व कार्यालय'),
    title: l('Vadodara, Gujarat', 'वडोदरा, गुजरात'),
    lines: l('Plot No. 515, A/p – Nanafofadia, Tal – Daboi, Dist – Baroda, Gujarat – 391 012', 'प्लॉट क्र. ५१५, मु.पो. – नानाफोफडिया, ता. – डभोई, जि. – बडोदा, गुजरात – ३९१ ०१२'),
    state: l('Gujarat', 'गुजरात'),
    map: 'Nanafofadia Dabhoi Vadodara Gujarat 391012',
  },
];

export const PLANTS = [
  {
    id: 'solapur',
    name: l('Solapur', 'सोलापूर'),
    state: l('Maharashtra', 'महाराष्ट्र'),
    capacity: 25000,
    coverage: [
      l('Western Maharashtra', 'पश्चिम महाराष्ट्र'),
      l('Marathwada', 'मराठवाडा'),
      l('Vidarbha', 'विदर्भ'),
      l('Khandesh', 'खानदेश'),
      l('Andhra Pradesh', 'आंध्र प्रदेश'),
      l('Telangana', 'तेलंगणा'),
      l('Karnataka', 'कर्नाटक'),
      l('Chhattisgarh', 'छत्तीसगड'),
    ],
  },
  {
    id: 'vadodara',
    name: l('Vadodara', 'वडोदरा'),
    state: l('Gujarat', 'गुजरात'),
    capacity: 25000,
    coverage: [l('Gujarat', 'गुजरात'), l('Rajasthan', 'राजस्थान'), l('Madhya Pradesh', 'मध्य प्रदेश')],
  },
];

export const DEALER_STATES: L[] = [
  l('Maharashtra', 'महाराष्ट्र'),
  l('Karnataka', 'कर्नाटक'),
  l('Gujarat', 'गुजरात'),
  l('Madhya Pradesh', 'मध्य प्रदेश'),
  l('Chhattisgarh', 'छत्तीसगड'),
  l('Rajasthan', 'राजस्थान'),
  l('Andhra Pradesh', 'आंध्र प्रदेश'),
  l('Telangana', 'तेलंगणा'),
];

/** Dates from the company's earlier official website (lokmangalbiotech.com, archived). */
export const JOURNEY = [
  {
    year: '1997',
    title: l('Maharashtra Research & Development Centre', 'महाराष्ट्र संशोधन व विकास केंद्र'),
    text: l('A laboratory with qualified staff, offering free soil and water testing.', 'पात्र कर्मचाऱ्यांसह सुसज्ज प्रयोगशाळा, जिथे माती व पाणी परीक्षण मोफत होते.'),
  },
  {
    year: '1998',
    title: l('Lokmangal Co-operative Bank', 'लोकमंगल को-ऑपरेटिव्ह बँक'),
    text: l('Set up as a source of development for the common man and the farmer.', 'सर्वसामान्य माणूस व शेतकऱ्यांच्या विकासाचे साधन म्हणून स्थापना.'),
  },
  {
    year: '1999',
    title: l('Lokmangal Agro Industries', 'लोकमंगल ॲग्रो इंडस्ट्रीज'),
    text: l('A sugar factory that gave nearby farmers an easy market for sugarcane.', 'परिसरातील शेतकऱ्यांच्या उसाला सहज बाजारपेठ देणारा साखर कारखाना.'),
  },
  {
    year: '2001',
    title: l('Lokmangal milk dairy', 'लोकमंगल दूध डेअरी'),
    text: l('An easy, popular market for farmers’ milk, near the sugar factory.', 'साखर कारखान्याजवळ शेतकऱ्यांच्या दुधासाठी सोपी व लोकप्रिय बाजारपेठ.'),
  },
  {
    year: '2006',
    title: l('Lokmangal Bio-Tech Pvt. Ltd.', 'लोकमंगल बायोटेक प्रा. लि.'),
    text: l('An agro-based biotechnology company built on the concept of balanced nutrition.', '“संतुलित पोषण” या संकल्पनेवर उभी राहिलेली कृषी-आधारित जैवतंत्रज्ञान कंपनी.'),
  },
];

export const GROUP_UNITS: L[] = [
  l('3 sugar factories', '३ साखर कारखाने'),
  l('70 MW co-generation', '७० मेगावॅट सहवीज निर्मिती'),
  l('Ethanol project', 'इथेनॉल प्रकल्प'),
  l('Dairy products', 'दुग्धजन्य उत्पादने'),
  l('Agriculture college', 'कृषी महाविद्यालय'),
  l('Biotechnology college', 'जैवतंत्रज्ञान महाविद्यालय'),
  l('Tissue culture laboratory', 'ऊती संवर्धन प्रयोगशाळा'),
  l('Drip irrigation bank', 'ठिबक सिंचन बँक'),
  l('Co-operative societies', 'सहकारी संस्था'),
  l('Multistate society', 'मल्टिस्टेट सोसायटी'),
  l('Spices', 'मसाले'),
  l('Agriculture bazaar', 'कृषी बाजार'),
  l('Construction company', 'बांधकाम कंपनी'),
  l('Jewellery shop', 'ज्वेलरी दालन'),
  l('Hospital', 'रुग्णालय'),
  l('Foundation (social work)', 'प्रतिष्ठान (सामाजिक कार्य)'),
];

export const FOUNDER = {
  name: l('Shri Subhash S. Deshmukh', 'श्री. सुभाष सु. देशमुख'),
  role: l('Founder Chairman, Lokmangal Group', 'संस्थापक अध्यक्ष, लोकमंगल समूह'),
  pull: l(
    'Advanced farming and an increase in production alone can make the farmer happy.',
    'प्रगत शेती आणि वाढलेले उत्पादन हेच शेतकऱ्याला सुखी करू शकते.',
  ),
  paragraphs: [
    l(
      'The Indian economy is based on agriculture, and 60% of our population depends on farming. Most of our cultivated land depends on rainwater, which keeps productivity low. Without advanced technology farmers are left helpless, and this has even led to farmers taking their own lives.',
      'भारतीय अर्थव्यवस्था शेतीवर आधारित आहे आणि आपली ६०% लोकसंख्या शेतीवर अवलंबून आहे. बहुतांश लागवडीखालील जमीन पावसाच्या पाण्यावर अवलंबून असल्याने उत्पादकता कमी राहते. प्रगत तंत्रज्ञानाअभावी शेतकरी हतबल होतो आणि शेतकरी आत्महत्येसारख्या घटनाही घडतात.',
    ),
    l(
      'Advanced farming and an increase in production alone can make the farmer happy. With this in view, the Lokmangal Group of Industries was established. First came Lokmangal Co-operative Bank Ltd., as a source of development for the common man and the farmer. The Group then established a sugar factory, Lokmangal Agro Industries Ltd.',
      'प्रगत शेती आणि वाढलेले उत्पादन हेच शेतकऱ्याला सुखी करू शकते. हाच विचार डोळ्यांसमोर ठेवून “लोकमंगल उद्योग समूहा”ची स्थापना झाली. सर्वसामान्य माणूस आणि शेतकरी यांच्या विकासाचे साधन म्हणून सर्वप्रथम “लोकमंगल को-ऑपरेटिव्ह बँक लि.” स्थापन करण्यात आली. त्यानंतर समूहाने “लोकमंगल ॲग्रो इंडस्ट्रीज लि.” हा साखर कारखाना उभारला.',
    ),
    l(
      'The main intention behind the factory was to give nearby farmers an easily available market for their sugarcane. The Group made its vision clear by establishing a milk dairy near the sugar factory, and Lokmangal Dairy Products Ltd. became a popular and easy market for farmers’ milk.',
      'परिसरातील शेतकऱ्यांच्या उसाला सहज बाजारपेठ उपलब्ध करून देणे, हा कारखाना उभारण्यामागील मुख्य उद्देश होता. साखर कारखान्याजवळच दूध डेअरी उभारून समूहाने आपली दिशा स्पष्ट केली. “लोकमंगल डेअरी प्रॉडक्ट्स लि.” ही शेतकऱ्यांच्या दुधासाठी लोकप्रिय आणि सोपी बाजारपेठ ठरली.',
    ),
    l(
      'The Group then started a Horticulture College (a four-year degree course) and a School of Agriculture for needy students. The aim of these courses, again, was to improve agriculture.',
      'त्यानंतर गरजू विद्यार्थ्यांसाठी समूहाने उद्यानविद्या महाविद्यालय (चार वर्षांचा पदवी अभ्यासक्रम) आणि कृषी विद्यालय सुरू केले. या अभ्यासक्रमांचा उद्देशही शेती सुधारणे हाच आहे.',
    ),
    l(
      'Besides these achievements, the Group has established an advanced-technology Lokmangal Distillery and a 70 megawatt ethanol co-generation plant.',
      'या सर्व कामगिरीसोबतच समूहाने प्रगत तंत्रज्ञानावर आधारित “लोकमंगल डिस्टिलरी” आणि ७० मेगावॅट इथेनॉल सहवीज निर्मिती प्रकल्प उभारला आहे.',
    ),
    l(
      'Keeping the needs of farmers in view, Lokmangal established the Maharashtra Research and Development Centre near the sugar factory. It has a well-equipped, advanced laboratory with qualified and skilled staff, and it provides free soil and water testing facilities to its users.',
      'शेतकऱ्यांच्या गरजा व्यापक दृष्टीने लक्षात घेऊन लोकमंगलने साखर कारखान्याजवळ “महाराष्ट्र संशोधन व विकास केंद्र” स्थापन केले. येथे सुसज्ज व प्रगत प्रयोगशाळा असून पात्र व कुशल कर्मचारी कार्यरत आहेत. ही प्रयोगशाळा माती व पाणी परीक्षणाची मोफत सुविधा देते.',
    ),
    l(
      'The Group then established Lokmangal Bio-Tech Pvt. Ltd., which has become the backbone of high-yielding technique. The Company has proved a tremendous increase in production, based on the concept of “balanced nutrition” and its actual application on the farm.',
      'त्यानंतर समूहाने “लोकमंगल बायोटेक प्रा. लि.”ची स्थापना केली. ती उच्च उत्पादन तंत्राचा कणा ठरली आहे. “संतुलित पोषण” या संकल्पनेच्या आधारे आणि शेतात तिचा प्रत्यक्ष वापर करून कंपनीने उत्पादनात मोठी वाढ सिद्ध केली आहे.',
    ),
    l(
      'Farmers have become economically sound through an increase in production of approximately 30%, using organic fertilizers, bio-fertilizers, chemical fertilizers and essential micronutrients. The Company is getting a remarkable response for its products from Maharashtra, Karnataka, Gujarat, Rajasthan, Punjab, Chhattisgarh, Madhya Pradesh, Uttar Pradesh, Andhra Pradesh and other states.',
      'सेंद्रिय खते, जैविक खते, रासायनिक खते आणि आवश्यक सूक्ष्म अन्नद्रव्ये यांच्या वापरातून उत्पादनात सुमारे ३०% वाढ झाल्याने शेतकरी आर्थिकदृष्ट्या सक्षम झाले आहेत. महाराष्ट्र, कर्नाटक, गुजरात, राजस्थान, पंजाब, छत्तीसगड, मध्य प्रदेश, उत्तर प्रदेश, आंध्र प्रदेश आदी राज्यांतून कंपनीच्या उत्पादनांना उत्तम प्रतिसाद मिळत आहे.',
    ),
  ],
};

export const FAQS = [
  {
    q: l('What does “balanced nutrition” mean?', '“संतुलित पोषण” म्हणजे काय?'),
    a: l(
      'Crops need major nutrients (N, P, K), secondary nutrients (Ca, Mg, S) and micronutrients. Using only N, P and K lowers soil productivity over time, so our range supplies all three groups.',
      'पिकांना मुख्य (नत्र, स्फुरद, पालाश), दुय्यम (कॅल्शियम, मॅग्नेशियम, गंधक) आणि सूक्ष्म अन्नद्रव्यांची गरज असते. केवळ नत्र, स्फुरद व पालाश वापरल्याने जमिनीची उत्पादकता हळूहळू कमी होते, म्हणून आमच्या श्रेणीत हे तिन्ही गट उपलब्ध आहेत.',
    ),
  },
  {
    q: l('Is soil and water testing available?', 'माती व पाणी परीक्षणाची सोय आहे का?'),
    a: l(
      'Yes. The Maharashtra Research and Development Centre of the Lokmangal Group provides free soil and water testing, and the Company’s own laboratory also carries out soil and water testing.',
      'होय. लोकमंगल समूहाचे महाराष्ट्र संशोधन व विकास केंद्र माती व पाणी परीक्षणाची मोफत सुविधा देते, तसेच कंपनीच्या स्वतःच्या प्रयोगशाळेतही माती व पाणी परीक्षण केले जाते.',
    ),
  },
  {
    q: l('What is Magnet used for?', 'मॅग्नेट कशासाठी वापरतात?'),
    a: l(
      'Magnet is a secondary nutrient mixture of calcium, magnesium and sulphur (10:05:10), available as granules and powder. The recommended dose is 100 kg per acre.',
      'मॅग्नेट हे कॅल्शियम, मॅग्नेशियम व गंधक (10:05:10) यांचे दुय्यम अन्नद्रव्य मिश्र खत असून ते दाणेदार व पावडर स्वरूपात मिळते. शिफारस केलेली मात्रा प्रति एकर १०० किलो आहे.',
    ),
  },
  {
    q: l('Can FASTER+ be used in drip irrigation?', 'फास्टर+ ठिबकमधून देता येते का?'),
    a: l(
      'Yes. FASTER+ grades are 100% water soluble and are made for both foliar spray and drip fertigation. The dose depends on the requirement of the crop.',
      'होय. फास्टर+ ग्रेड १००% पाण्यात विरघळणारे असून फवारणी व ठिबक सिंचन या दोन्हींसाठी आहेत. मात्रा पिकाच्या गरजेनुसार ठरते.',
    ),
  },
  {
    q: l('In which states are Lokmangal products available?', 'लोकमंगलची उत्पादने कोणत्या राज्यांत मिळतात?'),
    a: l(
      'We work with more than 1000 dealers in Maharashtra, Karnataka, Gujarat, Madhya Pradesh, Chhattisgarh, Rajasthan, Andhra Pradesh and Telangana.',
      'महाराष्ट्र, कर्नाटक, गुजरात, मध्य प्रदेश, छत्तीसगड, राजस्थान, आंध्र प्रदेश आणि तेलंगणा या राज्यांत १००० हून अधिक डीलर्स आमच्यासोबत काम करतात.',
    ),
  },
  {
    q: l('How do I become a dealer?', 'डीलर होण्यासाठी काय करावे?'),
    a: l(
      'Send us your firm’s details through the dealer enquiry form or call our team. We will get back to you with the next steps.',
      'डीलर चौकशी अर्जाद्वारे आपल्या फर्मची माहिती पाठवा किंवा आमच्या टीमला फोन करा. पुढील प्रक्रियेसाठी आम्ही आपल्याशी संपर्क करू.',
    ),
  },
];
