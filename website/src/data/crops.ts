import { l, type L } from './types';
import { PRODUCTS, type Product } from './products';

export interface Crop {
  id: string;
  name: L;
  photo: string;
  /** Focal point for the crop photo inside its frame. */
  focus?: string;
}

export const CROPS: Crop[] = [
  { id: 'sugarcane', name: l('Sugarcane', 'ऊस'), photo: 'crop-sugarcane' },
  { id: 'banana', name: l('Banana', 'केळी'), photo: 'crop-banana', focus: '50% 62%' },
  { id: 'grapes', name: l('Grapes', 'द्राक्ष'), photo: 'crop-grapes' },
  { id: 'pomegranate', name: l('Pomegranate', 'डाळिंब'), photo: 'crop-pomegranate', focus: '50% 36%' },
  { id: 'onion', name: l('Onion', 'कांदा'), photo: 'crop-onion', focus: '50% 70%' },
  { id: 'cotton', name: l('Cotton', 'कापूस'), photo: 'crop-cotton' },
  { id: 'soybean', name: l('Soybean', 'सोयाबीन'), photo: 'crop-soybean', focus: '50% 70%' },
  { id: 'tomato', name: l('Tomato', 'टोमॅटो'), photo: 'crop-tomato' },
  { id: 'chilli', name: l('Chilli', 'मिरची'), photo: 'crop-chilli' },
  { id: 'wheat', name: l('Wheat', 'गहू'), photo: 'crop-wheat' },
  { id: 'turmeric', name: l('Turmeric', 'हळद'), photo: 'crop-turmeric' },
  { id: 'groundnut', name: l('Groundnut', 'भुईमूग'), photo: 'crop-groundnut' },
  { id: 'maize', name: l('Maize', 'मका'), photo: 'crop-maize' },
  { id: 'rice', name: l('Rice', 'भात'), photo: 'crop-rice', focus: '50% 75%' },
  { id: 'vegetables', name: l('Vegetables', 'भाजीपाला'), photo: 'crop-vegetables' },
];

export const CROP_NAMES: Record<string, L> = {
  ...Object.fromEntries(CROPS.map((c) => [c.id, c.name])),
  ginger: l('Ginger', 'आले'),
  sorghum: l('Sorghum', 'ज्वारी'),
  tobacco: l('Tobacco', 'तंबाखू'),
  brinjal: l('Brinjal', 'वांगी'),
  coconut: l('Coconut', 'नारळ'),
  orange: l('Orange', 'संत्रा'),
  cucumber: l('Cucumber', 'काकडी'),
  melon: l('Melon', 'खरबूज'),
  gourds: l('Gourds', 'वेलवर्गीय'),
  cauliflower: l('Cauliflower', 'फुलकोबी'),
  cabbage: l('Cabbage', 'कोबी'),
  peas: l('Peas', 'वाटाणा'),
  potato: l('Potato', 'बटाटा'),
  tea: l('Tea', 'चहा'),
};

export const cropPageIds = new Set(CROPS.map((c) => c.id));
export const cropUrl = (id: string) => `/crops/${id}/`;

/** Products whose company data names this crop. */
export const namedFor = (id: string): Product[] => PRODUCTS.filter((p) => p.cropsNamed.includes(id));
/** Products labelled for all crops that do not already name this crop. */
export const generalFor = (id: string): Product[] => PRODUCTS.filter((p) => p.cropsAll && !p.cropsNamed.includes(id));
