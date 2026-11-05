import { l, type L } from './types';
import type { Nutrient } from './products';

export type Tier = 'major' | 'secondary' | 'micro' | 'beneficial';

export interface NutrientInfo {
  id: Nutrient;
  no: number;
  name: L;
  tier: Tier;
  role: L;
  /** Where the sentence comes from: company data, or general agronomy added for completeness. */
  source: 'company' | 'general';
}

export const TIERS: Record<Tier, { name: L; hint: L }> = {
  major: { name: l('Major nutrients', 'मुख्य अन्नद्रव्ये'), hint: l('Nitrogen, phosphorus, potassium', 'नत्र, स्फुरद, पालाश') },
  secondary: { name: l('Secondary nutrients', 'दुय्यम अन्नद्रव्ये'), hint: l('Calcium, magnesium, sulphur', 'कॅल्शियम, मॅग्नेशियम, गंधक') },
  micro: { name: l('Micronutrients', 'सूक्ष्म अन्नद्रव्ये'), hint: l('Zinc, iron, manganese, boron, copper, molybdenum', 'जस्त, लोह, मँगनीज, बोरॉन, तांबे, मॉलिब्डेनम') },
  beneficial: { name: l('Beneficial', 'उपयुक्त'), hint: l('Silicon', 'सिलिकॉन') },
};

export const NUTRIENTS: NutrientInfo[] = [
  {
    id: 'N',
    no: 1,
    name: l('Nitrogen', 'नत्र'),
    tier: 'major',
    source: 'company',
    role: l(
      'The main constituent in the synthesis of chlorophyll. Increases carbohydrates and proteins, and the rate of photosynthesis, cell division and metabolic activity.',
      'हरितद्रव्य निर्मितीतील मुख्य घटक. कर्बोदके, प्रथिने तसेच प्रकाशसंश्लेषण, पेशीविभाजन व चयापचयाचा वेग वाढवतो.',
    ),
  },
  {
    id: 'P',
    no: 2,
    name: l('Phosphorus', 'स्फुरद'),
    tier: 'major',
    source: 'general',
    role: l(
      'A major nutrient for energy transfer in the plant, root growth, flowering and seed formation.',
      'पिकातील ऊर्जा वहन, मुळांची वाढ, फुलोरा व बीज निर्मितीसाठी लागणारे मुख्य अन्नद्रव्य.',
    ),
  },
  {
    id: 'K',
    no: 3,
    name: l('Potassium', 'पालाश'),
    tier: 'major',
    source: 'general',
    role: l(
      'A major nutrient for water balance in the plant, fruit filling and fruit quality.',
      'पिकातील पाण्याचे संतुलन, फळांचे भरणे व फळांचा दर्जा यांसाठी लागणारे मुख्य अन्नद्रव्य.',
    ),
  },
  {
    id: 'Ca',
    no: 4,
    name: l('Calcium', 'कॅल्शियम'),
    tier: 'secondary',
    source: 'company',
    role: l('Multiplies cell division in crops and acts as a catalyst for maximum uptake of NPK.', 'पेशीविभाजन वाढवते आणि एन.पी.के.च्या जास्तीत जास्त शोषणासाठी उत्प्रेरकाचे काम करते.'),
  },
  {
    id: 'Mg',
    no: 5,
    name: l('Magnesium', 'मॅग्नेशियम'),
    tier: 'secondary',
    source: 'company',
    role: l('Plays an important role in photosynthesis, keeps the plant healthy and greener, and induces resistance against fungal pathogens.', 'प्रकाशसंश्लेषणात महत्त्वाची भूमिका; पीक निरोगी व हिरवे ठेवते आणि बुरशीजन्य रोगांविरुद्ध प्रतिकारशक्ती देते.'),
  },
  {
    id: 'S',
    no: 6,
    name: l('Sulphur', 'गंधक'),
    tier: 'secondary',
    source: 'company',
    role: l('Increases disease resistance power, and plays a major role in nitrogen metabolism and the production of chlorophyll.', 'रोगप्रतिकारशक्ती वाढवते; नत्र चयापचय व हरितद्रव्य निर्मितीत मोठी भूमिका बजावते.'),
  },
  {
    id: 'Zn',
    no: 7,
    name: l('Zinc', 'जस्त'),
    tier: 'micro',
    source: 'company',
    role: l('Important in preparing plant growth regulators and protein. Helpful in the ripening of seeds and fruits.', 'वाढ नियंत्रके व प्रथिने तयार होण्यासाठी महत्त्वाचे; बिया व फळे पिकण्यास उपयुक्त.'),
  },
  {
    id: 'Fe',
    no: 8,
    name: l('Iron', 'लोह'),
    tier: 'micro',
    source: 'company',
    role: l('Important in photosynthesis and in the uptake of other micronutrients.', 'प्रकाशसंश्लेषण व इतर सूक्ष्म अन्नद्रव्यांच्या शोषणासाठी महत्त्वाचे.'),
  },
  {
    id: 'Mn',
    no: 9,
    name: l('Manganese', 'मँगनीज'),
    tier: 'micro',
    source: 'company',
    role: l('Improves photosynthetic activity and the preparation of carotene, riboflavin, ascorbic acid and protein.', 'प्रकाशसंश्लेषण आणि कॅरोटीन, रायबोफ्लेविन, ॲस्कॉर्बिक आम्ल व प्रथिने निर्मिती सुधारते.'),
  },
  {
    id: 'B',
    no: 10,
    name: l('Boron', 'बोरॉन'),
    tier: 'micro',
    source: 'company',
    role: l('Helps the uptake of calcium and nitrogen, tissue development, root growth, flowering and pollen grain formation.', 'कॅल्शियम व नत्राचे शोषण, ऊतींची वाढ, मुळांची वाढ, फुलोरा व परागकण निर्मितीस मदत करते.'),
  },
  {
    id: 'Cu',
    no: 11,
    name: l('Copper', 'तांबे'),
    tier: 'micro',
    source: 'company',
    role: l('Acts as a catalyst in all development stages of the plant, and helps vitamin A production and reproductive capacity.', 'पिकाच्या सर्व वाढीच्या अवस्थांत उत्प्रेरक; जीवनसत्त्व ‘अ’ची निर्मिती व प्रजनन क्षमतेस मदत.'),
  },
  {
    id: 'Mo',
    no: 12,
    name: l('Molybdenum', 'मॉलिब्डेनम'),
    tier: 'micro',
    source: 'company',
    role: l('An important nutrient for nitrogen-fixing micro-organisms.', 'नत्र स्थिर करणाऱ्या सूक्ष्मजीवांसाठी महत्त्वाचे अन्नद्रव्य.'),
  },
  {
    id: 'Si',
    no: 13,
    name: l('Silicon', 'सिलिकॉन'),
    tier: 'beneficial',
    source: 'company',
    role: l('Plays a role in the size and shape of fruit crops, and increases the crop’s resistance to disease and pests.', 'फळपिकांचा आकार व आकारमान वाढवते आणि रोग-किडींविरुद्ध पिकाची प्रतिकारशक्ती वाढवते.'),
  },
];
