import type { APIRoute } from 'astro';
import { href, type Lang } from '../../data/types';
import { CATEGORIES, PRODUCTS, categoryOf, categoryUrl, productTitle, productUrl } from '../../data/products';
import { CROPS, CROP_NAMES, cropUrl } from '../../data/crops';
import { NUTRIENTS } from '../../data/nutrients';
import { t } from '../../data/i18n';

export const getStaticPaths = () => [
  { params: { lang: undefined }, props: { lang: 'en' as Lang } },
  { params: { lang: 'mr' }, props: { lang: 'mr' as Lang } },
];

export const GET: APIRoute = ({ props }) => {
  const lang = props.lang as Lang;
  const other: Lang = lang === 'en' ? 'mr' : 'en';
  const d = t(lang);
  const m = lang === 'mr';
  const groups = { p: d.products, c: d.crops, n: m ? 'अन्नद्रव्ये' : 'Nutrients', f: m ? 'पाने' : 'Pages' };
  const entries = [
    ...PRODUCTS.map((p) => ({
      t: productTitle(p, lang),
      k: [p.name[other], p.subtitle.en, p.subtitle.mr, p.grade ?? '', ...(p.grades?.map((g) => g.grade) ?? []), categoryOf(p.category).name.en, categoryOf(p.category).name.mr, p.nutrients.join(' '), ...p.cropsNamed.flatMap((c) => [CROP_NAMES[c]?.en ?? '', CROP_NAMES[c]?.mr ?? ''])].join(' '),
      a: p.subtitle[lang],
      g: 'p',
      u: href(lang, productUrl(p)),
    })),
    ...CATEGORIES.map((c) => ({ t: c.name[lang], k: `${c.name[other]} ${c.short.en} ${c.short.mr}`, a: d.productCount(PRODUCTS.filter((p) => p.category === c.id).length), g: 'p', u: href(lang, categoryUrl(c.id)) })),
    ...CROPS.map((c) => ({ t: c.name[lang], k: c.name[other], g: 'c', u: href(lang, cropUrl(c.id)) })),
    ...NUTRIENTS.map((n) => ({ t: `${n.name[lang]} (${n.id})`, k: `${n.name[other]} ${n.id}`, a: n.role[lang].slice(0, 70) + '…', g: 'n', u: `${href(lang, '/products/')}?nutrient=${n.id}` })),
    ...[
      [d.about, 'about company profile कंपनी परिचय आमच्याविषयी', '/about/'],
      [d.founder, 'founder message subhash deshmukh संस्थापक सुभाष देशमुख', '/about/founder-message/'],
      [d.lab, 'research lab laboratory soil water testing sample प्रयोगशाळा माती पाणी परीक्षण नमुना', '/research-lab/'],
      [d.manufacturing, 'manufacturing plant factory solapur vadodara capacity कारखाना उत्पादन केंद्र सोलापूर वडोदरा', '/manufacturing/'],
      [d.knowledge, 'knowledge centre calculator dose faq ज्ञान केंद्र मात्रा प्रश्न', '/knowledge/'],
      [d.dealers, 'dealer dealership distributor डीलर डीलरशिप', '/dealers/'],
      [d.gallery, 'gallery photos फोटो गॅलरी', '/gallery/'],
      [d.downloads, 'downloads pdf catalogue brochure डाउनलोड कॅटलॉग', '/downloads/'],
      [d.contact, 'contact phone email address संपर्क फोन पत्ता', '/contact/'],
    ].map(([title, k, u]) => ({ t: title, k, g: 'f', u: href(lang, u) })),
  ];
  return new Response(JSON.stringify({ groups, entries }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
